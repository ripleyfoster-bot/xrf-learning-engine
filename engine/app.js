/* Learning engine (built from IFE3 v0.10.2). The same file serves every course.
   Everything course-specific comes from course.js (self.COURSE) and the course's content files. */
(function () {
  'use strict';
  var CFG = window.COURSE;
  var MODS = window.COURSE_MODULES || [];
  // progress key made from the course id: unique per course, and apart from other apps on the same address
  var KEY = 'xrf.' + CFG.id + '.progress.v1';
  var TXT = CFG.text || {}, LBL = CFG.labels || {};
  var NUMWORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];
  var app = document.getElementById('app');
  var S = load();
  var unitFilter = -1; // -1 = all units

  /* ---------- storage ---------- */
  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY)); if (s && s.v === 1) return s; } catch (e) {}
    return { v: 1, items: {}, exams: {} };
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ---------- AI socket (off until configured) ---------- */
  var AI = {
    get on() { return !!(CFG.ai && CFG.ai.enabled && CFG.ai.endpoint); },
    explain: function (payload) {
      var headers = { 'Content-Type': 'application/json' };
      if (CFG.ai.accessKey) headers['X-Access-Key'] = CFG.ai.accessKey;
      return fetch(CFG.ai.endpoint, { method: 'POST', headers: headers, body: JSON.stringify(payload) })
        .then(function (r) { if (!r.ok) throw new Error('AI ' + r.status); return r.json(); })
        .then(function (j) { return j.text; });
    }
  };

  /* ---------- helpers ---------- */
  function h(tag, props) {
    var e = document.createElement(tag), k;
    if (props) for (k in props) {
      var v = props[k];
      if (k === 'class') e.className = v;
      else if (k === 'html') e.innerHTML = v;
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) e.setAttribute(k, v === true ? '' : v);
    }
    for (var i = 2; i < arguments.length; i++) add(e, arguments[i]);
    return e;
  }
  function add(e, kid) {
    if (kid == null || kid === false) return;
    if (Array.isArray(kid)) { kid.forEach(function (x) { add(e, x); }); return; }
    e.appendChild(kid.nodeType ? kid : document.createTextNode(String(kid)));
  }
  function btn(label, cls, fn) { return h('button', { class: 'btn ' + (cls || ''), type: 'button', onclick: fn }, label); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  var LEAVE = null; // clean-up for the screen being left (engine 1.5.0: the module reader's dialogue, wake lock and saved place)
  function show() {
    sayStop();
    if (LEAVE) { var lv = LEAVE; LEAVE = null; lv(); }
    window.onscroll = null; app.classList.remove('reading');
    app.innerHTML = ''; for (var i = 0; i < arguments.length; i++) add(app, arguments[i]);
    var top = app.querySelector('header.top');
    if (top && SAY.ok && app.querySelector('.task, .rev, .hero.res')) top.appendChild(sayBtn());
    window.scrollTo(0, 0);
  }

  /* ---------- read aloud (v0.10.0) ----------
     Uses the device's own voice (Web Speech API): no internet, no AI, nothing leaves the device.
     British English voice where the device has one. Reads what is on screen, in order, so it
     works for every question format without per-format text. Tap again to stop. */
  var SAY = { ok: !!(window.speechSynthesis && window.SpeechSynthesisUtterance), on: false, tok: 0, btn: null, voice: null };
  var SPK_ICON = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
  var STOP_ICON = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/></svg>';
  // novelty and robotic voices Apple ships alongside the real ones: never chosen automatically
  var NOVELTY = /^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley|Fred|Junior|Kathy|Ralph)\b/i;
  function voiceScore(v) {
    var n = v.name || '', sc = 0;
    if (NOVELTY.test(n)) return -100;
    if (/en[-_]GB/i.test(v.lang)) sc += 20; else if (/^en/i.test(v.lang)) sc += 5; else return -50;
    if (/premium/i.test(n)) sc += 30; else if (/enhanced/i.test(n)) sc += 20;
    if (/siri/i.test(n)) sc += 10;
    if (/compact/i.test(v.voiceURI || '')) sc -= 5;
    return sc;
  }
  function voiceList() {
    if (!SAY.ok) return [];
    return (window.speechSynthesis.getVoices() || []).filter(function (v) { return voiceScore(v) > 0; })
      .sort(function (a, b) { return voiceScore(b) - voiceScore(a) || a.name.localeCompare(b.name); });
  }
  // engine 1.5.0: '*default' names no voice, so the device uses its own default for British English
  // (on iPhone, possibly the voice ticked in Settings > Accessibility > Spoken Content > Voices)
  var DEFAULT_VOICE = '*default';
  function pickVoice() {
    if (!SAY.ok) return;
    var vs = voiceList(), want = S.voice || '';
    if (want === DEFAULT_VOICE) { SAY.voice = null; return; }
    SAY.voice = vs.filter(function (v) { return v.name === want; })[0] || vs[0] || null;
  }
  if (SAY.ok) {
    pickVoice();
    if (window.speechSynthesis.addEventListener) window.speechSynthesis.addEventListener('voiceschanged', pickVoice);
    document.addEventListener('visibilitychange', function () { if (document.hidden) sayStop(); });
  }
  function sayMark(el, on) {
    if (!el) return;
    el.classList.toggle('on', on); el.setAttribute('aria-pressed', on ? 'true' : 'false');
    if (el.classList.contains('say')) { el.innerHTML = on ? STOP_ICON : SPK_ICON; el.setAttribute('aria-label', on ? 'Stop reading' : 'Read aloud'); }
    else { if (!el.getAttribute('data-label')) el.setAttribute('data-label', el.textContent); el.textContent = on ? '■ Stop' : el.getAttribute('data-label'); }
  }
  function sayStop() {
    if (!SAY.ok) return;
    SAY.tok++; SAY.on = false;
    // only cancel when something is playing: on iPhone, cancel() straight before speak() can swallow the new speech
    try { var ss = window.speechSynthesis; if (ss.speaking || ss.pending) ss.cancel(); } catch (e) {}
    sayMark(SAY.btn, false); SAY.btn = null;
  }
  // a short message under the top bar, so a silent failure is visible
  function sayNote(msg) {
    var old = app.querySelector('.saynote'); if (old) old.remove();
    if (!msg) return;
    var top = app.querySelector('header.top'), n = h('p', { class: 'saynote', role: 'status' }, msg);
    if (top && top.nextSibling) top.parentNode.insertBefore(n, top.nextSibling); else app.insertBefore(n, app.firstChild);
  }
  function sayClean(s) {
    return String(s)
      .replace(/Marker (\d+)\s*→\s*/g, 'Marker $1 is ')
      // in a list clause, two or more arrows are an order ("then"); one arrow is a pair ("goes with")
      .split(/(;|\. )/).map(function (cl) { return (cl.match(/→/g) || []).length > 1 ? cl.replace(/\s*→\s*/g, ', then ') : cl.replace(/\s*→\s*/g, ' goes with '); }).join('')
      .replace(/\s*[·•]\s*/g, ', ').replace(/[×✓✗⚑⚐‹›]/g, ' ')
      .replace(/(\d+)\s*\/\s*(\d+)/g, '$1 out of $2').replace(/_{2,}/g, ' blank ')
      .replace(/\s+/g, ' ').replace(/\s+([.,;:!?])/g, '$1').trim();
  }
  // split into sentences: short utterances avoid the Chrome cut-off on long ones
  function saySplit(t) {
    var out = [];
    t.replace(/([.!?:;])\s+(?=[A-Z0-9"'(])/g, '$1\u0001').split('\u0001').forEach(function (s) { // no look-behind: older iPhones can't parse it
      while (s.length > 220) { var k = s.lastIndexOf(', ', 220); if (k < 60) k = s.lastIndexOf(' ', 220); if (k < 1) k = 220; out.push(s.slice(0, k + 1)); s = s.slice(k + 1).trim(); }
      if (s.trim()) out.push(s.trim());
    });
    return out;
  }
  function say(text, el) {
    if (!SAY.ok) return;
    var wasMine = !!el && SAY.on && SAY.btn === el;
    sayStop(); sayNote('');
    if (wasMine) return; // second tap on the same button stops it
    var parts = saySplit(sayClean(text));
    if (!parts.length) return;
    var tok = SAY.tok, started = false, ss = window.speechSynthesis;
    SAY.on = true; SAY.btn = el; sayMark(el, true);
    function done() { if (tok !== SAY.tok) return; SAY.on = false; sayMark(SAY.btn, false); SAY.btn = null; }
    // one sentence at a time, the next started when the last ends (the pattern the 12 Week Year app uses)
    function next(k, useVoice) {
      if (tok !== SAY.tok) return;
      if (k >= parts.length) return done();
      var u = new window.SpeechSynthesisUtterance(parts[k]);
      u.lang = 'en-GB'; u.rate = 1; u.pitch = 1; u.volume = 1;
      if (useVoice && SAY.voice) u.voice = SAY.voice;
      u.onstart = function () { started = true; };
      u.onend = function () { if (tok === SAY.tok) next(k + 1, useVoice); };
      u.onerror = function (e) {
        if (tok !== SAY.tok) return;
        var why = e && e.error;
        if (why === 'interrupted' || why === 'canceled') return done();
        if (!started && useVoice && SAY.voice) return next(k, false); // chosen voice failed: use the device default
        done(); sayNote('Read aloud stopped (' + (why || 'unknown error') + ').');
      };
      ss.speak(u);
      if (ss.paused) ss.resume(); // iPhone can leave the voice paused after the app was in the background
    }
    try { next(0, true); } catch (e) { done(); sayNote('Read aloud could not start: ' + e.message); return; }
    setTimeout(function () {
      if (tok === SAY.tok && !started) sayNote('No sound yet? On iPhone and iPad, read aloud is silent when the phone is on Silent: turn Silent off, turn the volume up and tap the speaker again.');
    }, 2500);
  }
  // the readable text of one element: blanks, typed answers and dropdowns are spoken, buttons are not
  function sayText(el) {
    var out = '';
    (function walk(n) {
      if (n.nodeType === 3) { out += n.data; return; }
      if (n.nodeType !== 1 || n.hidden || n.getAttribute('aria-hidden') === 'true') return;
      var tg = n.tagName;
      if (tg === 'BUTTON' || tg === 'SVG' || tg === 'svg' || tg === 'OPTION') return;
      if (tg === 'INPUT') { out += ' blank' + (n.value.trim() ? ', you typed ' + n.value.trim() + ',' : '') + ' '; return; }
      if (tg === 'SELECT') { out += ' blank' + (n.value ? ', you chose ' + n.value + ',' : '') + ' '; return; }
      if (n.classList.contains('blank')) { out += n.textContent.trim() ? ' ' + n.textContent.trim() + ' ' : ' blank '; return; }
      for (var c = n.firstChild; c; c = c.nextSibling) walk(c);
      if (/^(DIV|P|LI|H1|H2|STRONG|SMALL|BR)$/.test(tg)) out = /[.!?:;,]\s*$/.test(out) || !out.trim() ? out + ' ' : out.replace(/\s*$/, '. ');
    })(el);
    return out.replace(/\s+/g, ' ').trim();
  }
  function sayEnd(s) { s = s.trim(); return !s ? '' : /[.!?:]$/.test(s) ? s + ' ' : s + '. '; }
  function sayList(els, fn) { return Array.prototype.map.call(els, fn).filter(Boolean).join(' '); }
  // everything readable on the current screen, top to bottom
  function sayScreen() {
    var out = '', revN = 0;
    var parts = app.querySelectorAll('.card-q, .card-a, .hint, .opts, ol.seq, .bank, .alist, .mlist, .mgrid, .dkey, ol.key, .fb, .hero.res, .panel.rev');
    Array.prototype.forEach.call(parts, function (el) {
      if (el.closest('[hidden]') || el.closest('.qmap') || el.classList.contains('gap')) return;
      if (el.parentNode.closest('.fb, .panel.rev, .hero.res')) return; // already read as part of its box
      var c = el.classList;
      if (c.contains('card-q')) {
        out += sayEnd(sayText(el));
        var sl = el.querySelector('select');
        if (sl) out += sayEnd('Choices: ' + Array.prototype.slice.call(sl.options, 1).map(function (o) { return o.textContent; }).join('; '));
      }
      else if (c.contains('card-a')) out += sayEnd('Answer: ' + sayText(el));
      else if (c.contains('hint')) out += sayEnd(sayText(el));
      else if (c.contains('opts')) out += sayList(el.children, function (b, k) {
        var s = b.classList;
        return sayEnd('Option ' + (k + 1) + ': ' + b.textContent + (s.contains('ok') ? ', correct answer' : s.contains('no') ? ', wrong' : s.contains('sel') ? ', selected' : ''));
      }) + ' ';
      else if (el.tagName === 'OL' && c.contains('seq')) { if (el.children.length) out += sayEnd('Your order so far: ' + sayList(el.children, function (li) { return sayEnd(li.textContent); })); }
      else if (c.contains('bank')) {
        var chips = Array.prototype.filter.call(el.children, function (b) { return !b.classList.contains('used'); });
        if (chips.length) out += sayEnd((el.closest('.dside') ? 'Labels' : 'Items still to place') + ': ' + chips.map(function (b) { return b.textContent; }).join('; '));
      }
      else if (c.contains('alist')) out += sayEnd('Answers') + sayList(el.children, function (li) { return sayEnd(li.children[0].textContent + ': ' + li.children[1].textContent); }) + ' ';
      else if (c.contains('mlist')) out += sayList(el.children, function (r, k) {
        var pick = r.querySelector('.lpick').textContent;
        return sayEnd('Item ' + (k + 1) + ': ' + r.children[0].textContent) + sayEnd(/^Not/.test(pick) ? 'Not answered yet' : 'Your answer: ' + pick);
      }) + ' ';
      else if (c.contains('mgrid')) out += sayList(el.children, function (col, k) {
        var left = Array.prototype.filter.call(col.children, function (b) { return !b.classList.contains('ok'); });
        return left.length ? sayEnd((k ? 'Right column' : 'Left column') + ': ' + left.map(function (b) { return b.textContent; }).join('; ')) : '';
      }) + ' ';
      else if (c.contains('dkey')) out += sayList(el.children, function (r) { return sayEnd('Marker ' + r.children[0].textContent + ': ' + r.children[1].textContent); }) + ' ';
      else if (el.tagName === 'OL' && c.contains('key')) out += sayList(el.children, function (li, k) { return sayEnd('Marker ' + (k + 1) + ': ' + (li.textContent === '?' ? 'not placed yet' : li.textContent)); }) + ' ';
      else if (c.contains('fb')) out += sayEnd(sayText(el));
      else if (c.contains('res')) out += sayEnd(sayText(el));
      else if (c.contains('rev')) out += sayEnd('Review ' + (++revN)) + sayEnd(sayText(el));
    });
    return out.trim() || 'Nothing to read on this screen.';
  }
  function sayBtn() {
    var b = h('button', { class: 'say', type: 'button', 'aria-label': 'Read aloud', 'aria-pressed': 'false', title: 'Read aloud', onclick: function () { say(sayScreen(), b); } });
    b.innerHTML = SPK_ICON;
    return b;
  }
  // small button inside a feedback box: reads just that box
  function sayBox(box) {
    if (!SAY.ok) return null;
    var b = h('button', { class: 'btn link saybox', type: 'button', 'aria-pressed': 'false', onclick: function () { say(sayText(box), b); } }, '🔊 Read this');
    return b;
  }
  function pct(x) { return Math.round(x * 100) + '%'; }
  function topbar(title, back, right) {
    return h('header', { class: 'top' },
      back ? h('button', { class: 'back', type: 'button', 'aria-label': 'Back', onclick: back }, '‹') : h('span', { class: 'back ghost' }),
      h('h1', null, title), h('span', { class: 'right' }, right || ''));
  }
  function bar(frac, cls) { return h('div', { class: 'bar ' + (cls || '') }, h('i', { style: 'width:' + Math.round(frac * 100) + '%' })); }

  /* ---------- item index and mastery ---------- */
  function build(m) {
    var it = [];
    ['cards', 'fills', 'questions', 'matches', 'diagrams'].forEach(function (k) { m[k] = m[k] || []; });
    m.cards.forEach(function (c, i) { it.push({ id: m.id + '.c' + i, type: 'card', u: c[0], q: c[1], a: c[2] }); });
    m.fills.forEach(function (f, i) { it.push({ id: m.id + '.f' + i, type: 'fill', u: f[0], text: f[1], a: f[2], d: f[3] }); });
    m.questions.forEach(function (q, i) { it.push({ id: m.id + '.q' + i, type: 'q', u: q.u, q: q.q, o: q.o, a: q.a, order: q.order, f: q.f, g: q.g || [], x: q.x, src: q.src }); });
    m.matches.forEach(function (s, i) { s.pairs.forEach(function (p, j) { it.push({ id: m.id + '.p' + i + '.' + j, type: 'pair', u: s.u, set: i, k: j }); }); });
    m.diagrams.forEach(function (d, i) { d.marks.forEach(function (k, j) { it.push({ id: m.id + '.d' + i + '.' + j, type: 'mark', u: d.u, dg: i, k: j }); }); });
    m._items = it;
  }
  MODS.forEach(build);

  // Boxes 0..3. First sight: right -> 2, wrong -> 0. After that: right +1, wrong -1.
  function mark(id, ok) {
    var r = S.items[id];
    if (!r) r = S.items[id] = { b: ok ? 2 : 0, n: 0, c: 0 };
    else r.b = ok ? Math.min(3, r.b + 1) : Math.max(0, r.b - 1);
    r.n++; if (ok) r.c++; r.t = Date.now(); save();
  }
  function weight(id) { var r = S.items[id]; return r ? [6, 3, 1.5, 0.5][r.b] : 4; }
  function pick(items, n) {
    var pool = items.map(function (x) { return { x: x, w: weight(x.id) }; }), out = [];
    while (out.length < n && pool.length) {
      var tot = 0, k; pool.forEach(function (p) { tot += p.w; });
      var r = Math.random() * tot;
      for (k = 0; k < pool.length - 1; k++) { r -= pool[k].w; if (r <= 0) break; }
      out.push(pool.splice(k, 1)[0].x);
    }
    return out;
  }
  function stats(items) {
    var sum = 0, seen = 0;
    items.forEach(function (x) { var r = S.items[x.id]; if (r) { seen++; sum += r.b / 3; } });
    return { mastery: items.length ? sum / items.length : 0, seen: seen, total: items.length };
  }
  function unitItems(m, u) { return m._items.filter(function (x) { return x.u === u; }); }
  function inFilter(x) { return unitFilter < 0 || x.u === unitFilter; }

  /* ---------- home ---------- */
  function home() {
    var list = MODS.map(function (m) {
      var st = stats(m._items);
      return h('button', { class: 'modcard', type: 'button', onclick: function () { unitFilter = -1; modScreen(m); } },
        h('strong', null, m.title), h('span', null, m.subtitle), bar(st.mastery), h('small', null, pct(st.mastery) + ' mastered'));
    });
    var rdc = rdHomeCard(); if (rdc) list.unshift(rdc);
    if (RV) {
      var rs = rvState(), dn = rvDayNow();
      list.push(h('button', { class: 'modcard rvcard', type: 'button', onclick: rvHome },
        h('strong', null, RV.title), h('span', null, RV.subtitle + ': every module, in ' + (TXT.formatsHome || 'the exam formats')),
        bar(rs.start ? Math.min(ND, dn) / ND : 0), h('small', null, rs.start ? (dn > ND ? 'All ' + ND + ' days open' : 'Day ' + dn + ' of ' + ND) : 'Not started')));
    }
    show(h('header', { class: 'top home' }, logo(36), h('h1', null, CFG.name), h('button', { class: 'link', type: 'button', onclick: about }, 'About')),
      h('p', { class: 'lead' }, 'Pick a module. The app tracks what you know and steers practice to your weak spots.'), list);
  }

  function about() {
    var u = S.user || {};
    show(topbar('About', home),
      h('div', { class: 'panel' },
        u.name ? h('p', null, h('b', null, u.name), u.company ? ', ' + u.company : '', u.exam ? ' · exam ' + u.exam.split('-').reverse().join('/') : '') : null,
        btn('Change my details', '', function () { welcome(true); }),
        h('p', { class: 'gap' }, 'Version ' + CFG.version + ' (engine ' + window.ENGINE_VERSION + '). Your details and progress are stored on this device only.'),
        h('p', null, 'AI tutor: ' + (AI.on ? 'on' : 'off in this version') + '.'),
        SAY.ok ? (function () {
          pickVoice();
          var vs = voiceList();
          if (!vs.length) return h('p', { class: 'hint' }, 'No English voices found yet. Close and reopen the app, then look here again.');
          var sl = h('select', { class: 'tsel wide', 'aria-label': 'Read-aloud voice' },
            [h('option', { value: DEFAULT_VOICE }, 'Device default (British English)')].concat(vs.map(function (v) { return h('option', { value: v.name }, v.name + (/en[-_]GB/i.test(v.lang) ? ' (British)' : ' (' + v.lang + ')')); })));
          sl.value = S.voice === DEFAULT_VOICE ? DEFAULT_VOICE : SAY.voice ? SAY.voice.name : '';
          sl.addEventListener('change', function () {
            S.voice = sl.value; save(); pickVoice();
            say(sl.value === DEFAULT_VOICE ? 'This is the device default voice. I will read your questions in this voice.' : 'This is ' + sl.value + '. I will read your questions in this voice.', null);
          });
          return h('div', { class: 'gap' }, h('p', null, h('b', null, 'Read-aloud voice'), ' (best first; your choice is saved on this device)'), sl,
            h('p', { class: 'hint' }, 'English voices this device offers the app: ' + vs.length + '. Device default lets the device pick; on iPhone it may use the voice ticked in Settings, Accessibility, Spoken Content, Voices, English (UK).'),
            h('p', { class: 'hint' }, 'On iPhone, Personal Voice and Siri voices are not offered to web apps, downloaded voices may not be passed through (it depends on the iOS version), and locking the phone stops read aloud.'));
        })() : null,
        SAY.ok ? (function () { var tb = btn('🔊 Test the voice', '', function () { say('Read aloud is working. This is the voice the app will use for questions.', tb); }); return tb; })() : null,
        h('p', null, SAY.ok ? 'Read aloud: tap the speaker at the top of any question or result to hear it, and tap again to stop. It uses this device\'s own voice' + (SAY.voice ? ' (' + SAY.voice.name + ')' : S.voice === DEFAULT_VOICE ? ' (device default)' : '') + ' and works offline.' : 'Read aloud: this browser has no built-in voice, so the speaker button is hidden.')),
      backupPanel(),
      h('div', { class: 'panel' }, h('h2', { class: 'in' }, 'Course material and disclaimer'), notices()),
      h('p', { class: 'copy' }, COPY),
      btn('Reset all progress', 'bad', function () {
        // keeps the user's details and agreement; erases learning progress only
        if (window.confirm('Erase all progress on this device?')) { S = { v: 1, items: {}, exams: {}, user: S.user }; save(); home(); }
      }));
  }

  /* ---------- save and import: one file holding progress, exam history and settings ---------- */
  // File shape: { app: 'xrf.<course id>', saved, version, engine, data: S }. Import replaces everything on this device.
  // course.js importFrom: ['<app tag>'] also accepts saves from an older app whose item ids match this course.
  function backupPanel() {
    var tag = 'xrf.' + CFG.id, from = [tag].concat(CFG.importFrom || []);
    var msg = h('p', { class: 'hint gap', role: 'status' });
    var file = h('input', { type: 'file', accept: '.json,application/json', hidden: true });
    file.addEventListener('change', function () {
      var f = file.files && file.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        var d; try { d = JSON.parse(r.result); } catch (e) { msg.textContent = 'That file could not be read. Choose a file saved from this app.'; file.value = ''; return; }
        if (!d || from.indexOf(d.app) < 0 || !d.data || d.data.v !== 1) { msg.textContent = 'That is not a save file from ' + CFG.name + '.'; file.value = ''; return; }
        var who = d.data.user && d.data.user.name ? d.data.user.name + '\'s ' : '';
        if (!window.confirm('Replace everything on this device with ' + who + 'save from ' + String(d.saved || '').slice(0, 10).split('-').reverse().join('/') + '? Progress on this device will be overwritten.')) { file.value = ''; return; }
        S = d.data; if (!S.items) S.items = {}; if (!S.exams) S.exams = {}; save(); pickVoice();
        window.alert('Imported. Your progress and settings are now on this device.'); home();
      };
      r.readAsText(f);
    });
    function saveFile() {
      var name = (CFG.shortName || CFG.id).replace(/[^A-Za-z0-9]+/g, '-') + '-save-' + new Date().toISOString().slice(0, 10) + '.json';
      var blob = new Blob([JSON.stringify({ app: tag, saved: new Date().toISOString(), version: CFG.version, engine: window.ENGINE_VERSION, data: S }, null, 1)], { type: 'application/json' });
      var asFile = null; try { asFile = new File([blob], name, { type: 'application/json' }); } catch (e) {}
      // iPhone: the share sheet lets you Save to Files, AirDrop or email it. Elsewhere: a normal download.
      if (asFile && navigator.canShare && navigator.canShare({ files: [asFile] })) {
        navigator.share({ files: [asFile], title: name }).then(function () { msg.textContent = 'Saved: ' + name; }, function () {});
        return;
      }
      var a = h('a', { href: URL.createObjectURL(blob), download: name }); document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      msg.textContent = 'Saved to your downloads: ' + name;
    }
    return h('div', { class: 'panel' }, h('h2', { class: 'in' }, 'Save and import'),
      h('p', null, 'Save a file with your progress, exam scores and settings. Import it on another device, or after reinstalling, to carry on where you left off.'),
      h('div', { class: 'qnav' }, btn('Save my progress', 'primary', saveFile), btn('Import a save', '', function () { file.click(); })),
      file, msg);
  }

  /* ---------- brand mark: the course logo from brand/ (course.js brand.logo) ---------- */
  function logo(size) {
    return h('span', { class: 'mark', style: 'width:' + size + 'px;height:' + size + 'px' },
      CFG.brand && CFG.brand.logo ? h('img', { src: CFG.brand.logo, alt: CFG.name, width: size, height: size }) : null);
  }

  /* ---------- opening screen ---------- */
  var COPY = '\u00a9 2026 Ripley Foster, XRF Systems. All rights reserved.';
  function notices() {
    // course lines first ({owner} becomes a link to the owner), then the engine's own disclaimer
    var ow = CFG.owner || {};
    return h('ul', { class: 'notice' },
      (CFG.notices || []).map(function (line) {
        var bits = line.split('{owner}');
        return h('li', null, bits[0], bits.length > 1 ? [h('a', { href: ow.url, target: '_blank', rel: 'noopener' }, ow.label || ow.url), bits[1]] : null);
      }),
      h('li', null, 'Ripley Foster and XRF Systems accept no responsibility for any errors or omissions, or for any use made of this content.'));
  }
  function daysTo(key) { return key ? -daysSince(key) : null; }
  function examLine(key) {
    var n = daysTo(key);
    if (n === null) return null;
    return n > 1 ? n + ' days to your exam' : n === 1 ? 'Your exam is tomorrow' : n === 0 ? 'Your exam is today. Good luck.' : 'Your exam date has passed';
  }
  // First launch (or "Change my details"): name, company, optional exam date and the agreement.
  function welcome(editing) {
    var u = S.user || {};
    var name = h('input', { class: 'fin', type: 'text', autocomplete: 'name', value: u.name || '', 'aria-label': 'Your name' });
    var comp = h('input', { class: 'fin', type: 'text', autocomplete: 'organization', value: u.company || '', 'aria-label': 'Your company' });
    var exam = h('input', { class: 'fin', type: 'date', value: u.exam || '', 'aria-label': 'Exam date (optional)' });
    var tick = h('input', { type: 'checkbox', id: 'agree' });
    if (u.agreed) tick.checked = true;
    var go = btn(editing ? 'Save' : 'Agree and continue', 'primary', function () {
      S.user = { name: name.value.trim(), company: comp.value.trim(), exam: exam.value || '', agreed: u.agreed || new Date().toISOString() };
      save(); home();
    });
    function check() { go.disabled = !(name.value.trim() && comp.value.trim() && tick.checked); }
    [name, comp, exam].forEach(function (x) { x.addEventListener('input', check); });
    tick.addEventListener('change', check);
    show(editing ? topbar('My details', about) : h('div', { class: 'brand' }, logo(88), h('h1', null, CFG.name), CFG.tagline ? h('p', null, CFG.tagline) : null),
      h('div', { class: 'panel' },
        h('label', { class: 'fl' }, 'Your name', name),
        h('label', { class: 'fl' }, 'Your company', comp),
        h('label', { class: 'fl' }, 'Exam date (optional)', exam, h('small', null, 'Shows a countdown each time you open the app.'))),
      h('div', { class: 'panel' }, h('h2', { class: 'in' }, 'Before you start'), notices(),
        h('label', { class: 'agree', for: 'agree' }, tick, h('span', null, CFG.agreement || 'I accept the points above.'))),
      go, h('p', { class: 'copy' }, 'Your details are stored on this device only.'), h('p', { class: 'copy' }, COPY));
    check();
  }
  // Later launches: a short cover with name, countdown and copyright.
  function cover() {
    var u = S.user;
    if (!u || !u.agreed || !u.name) return welcome(false);
    var line = examLine(u.exam);
    show(h('div', { class: 'brand cover' }, logo(88), h('h1', null, CFG.name),
        h('p', { class: 'hi' }, 'Welcome back, ' + u.name), h('p', null, u.company),
        line ? h('div', { class: 'count' }, line) : null),
      btn('Continue', 'primary', home),
      h('button', { class: 'link center', type: 'button', onclick: function () { welcome(true); } }, 'Change my details'),
      CFG.coverNote ? h('p', { class: 'copy' }, CFG.coverNote) : null,
      h('p', { class: 'copy' }, COPY));
  }

  /* ---------- module screen ---------- */
  // unit 0 is the introduction unless the module sets noIntro (label text from course.js labels)
  function unitChip(m, u) { var un = LBL.unit || 'Unit'; return m.noIntro ? un + ' ' + (u + 1) : u === 0 ? (LBL.intro || 'Intro') : un + ' ' + u; }
  function modScreen(m) {
    var all = stats(m._items);
    var units = m.units.map(function (name, u) { return { u: u, name: name, st: stats(unitItems(m, u)) }; });
    var ready = units.every(function (x) { return x.st.mastery >= CFG.passMark; });
    var ex = S.exams[m.id] || [], best = 0;
    ex.forEach(function (e) { best = Math.max(best, e.s / e.n); });

    var chips = h('div', { class: 'chips' },
      [h('button', { class: 'chip' + (unitFilter < 0 ? ' on' : ''), type: 'button', onclick: function () { unitFilter = -1; modScreen(m); } }, 'All units')]
        .concat(units.map(function (x) {
          return h('button', { class: 'chip' + (unitFilter === x.u ? ' on' : ''), type: 'button', onclick: function () { unitFilter = x.u; modScreen(m); } }, unitChip(m, x.u));
        })));

    var rows = units.map(function (x) {
      var cls = x.st.seen === 0 ? 'new' : x.st.mastery >= CFG.passMark ? 'good' : x.st.mastery < 0.5 ? 'weak' : '';
      return h('div', { class: 'urow' }, h('div', { class: 'uname' }, x.name, h('b', null, x.st.seen === 0 ? 'Not started' : pct(x.st.mastery))), bar(x.st.mastery, cls));
    });

    function tile(icon, label, sub, fn, cls) {
      return h('button', { class: 'tile ' + (cls || ''), type: 'button', onclick: fn }, h('span', { class: 'ico' }, icon), h('strong', null, label), h('small', null, sub));
    }
    show(topbar(m.title, home),
      h('div', { class: 'panel hero' },
        h('div', { class: 'big' }, pct(all.mastery)), h('div', null, 'mastered · ' + all.seen + ' of ' + all.total + ' items seen'),
        h('div', { class: 'ready ' + (ready ? 'yes' : '') }, ready ? 'Every unit is at ' + pct(CFG.passMark) + ' or above. Try the final exam.' : 'Target: every unit at ' + pct(CFG.passMark) + ' before the final exam.'),
        ex.length ? h('div', { class: 'best' }, 'Best exam score: ' + pct(best) + ' (' + ex.length + ' attempt' + (ex.length > 1 ? 's' : '') + ')') : null),
      h('h2', null, 'Practise'), chips,
      h('div', { class: 'tiles' },
        tile('★', 'Train me', 'Smart mix of your weak spots', function () { train(m); }, 'wide accent'),
        rdUnitChs(m).length ? tile('¶', unitFilter < 0 ? 'Read the module' : 'Read the unit', rdTileSub(m), function () { rdModule(m); }, 'wide read') : null,
        tile('▤', 'Flash cards', 'Recall, then rate yourself', function () { cardsMode(m); }),
        tile('⇄', 'Match up', 'Pair terms and meanings', function () { matchMode(m); }),
        tile('…', 'Missing word', 'Complete the sentence', function () { fillMode(m); }),
        tile('◎', 'Label the diagram', 'Tap labels into place', function () { diagramList(m); })),
      h('h2', null, 'Progress by unit'), rows,
      h('h2', null, 'Final exam'),
      h('div', { class: 'panel' }, h('p', null, CFG.examLength + ' questions across the whole module. Pass mark ' + pct(CFG.passMark) + '. No feedback until the end.'),
        btn('Start final exam', 'primary', function () { exam(m); })));
  }

  /* ---------- session runner ---------- */
  function runSession(m, title, tasks, again) {
    var i = 0, right = 0, missed = [];
    if (!tasks.length) { show(topbar(title, function () { modScreen(m); }), h('p', { class: 'lead' }, 'Nothing here for this unit yet. Choose "All units" or another activity.')); return; }
    function next() {
      if (i >= tasks.length) return summary();
      var t = tasks[i], body = h('div', { class: 'task' });
      show(topbar(title, function () { modScreen(m); }, (i + 1) + ' / ' + tasks.length), bar(i / tasks.length, 'thin'), body);
      body.appendChild(h('div', { class: 'utag' }, m.units[t.u]));
      if (SRCTAG[t.src]) body.appendChild(h('div', { class: 'utag' }, SRCTAG[t.src]));
      var done = function (ok) { if (ok !== null) mark(t.id, ok); if (ok) right++; else missed.push(t); i++; next(); };
      if (t.type === 'card') renderCard(t, body, done);
      else if (t.type === 'fill') renderFill(m, t, body, done);
      else renderQ(m, t, body, done, false);
    }
    function summary() {
      var weak = {}; missed.forEach(function (t) { weak[t.u] = (weak[t.u] || 0) + 1; });
      var names = Object.keys(weak).sort(function (a, b) { return weak[b] - weak[a]; }).slice(0, 2).map(function (u) { return m.units[u]; });
      show(topbar(title, function () { modScreen(m); }),
        h('div', { class: 'panel hero res' }, h('div', { class: 'big' }, right + ' / ' + tasks.length), h('div', null, 'known this round'),
          names.length ? h('div', { class: 'ready' }, 'Most misses in: ' + names.join('; ')) : h('div', { class: 'ready yes' }, 'Clean round.')),
        btn('Go again', 'primary', again), btn('Back to module', '', function () { modScreen(m); }));
    }
    next();
  }

  function train(m) { runSession(m, 'Train me', pick(m._items.filter(function (x) { return inFilter(x) && (x.type === 'card' || x.type === 'fill' || x.type === 'q'); }), 12), function () { train(m); }); }
  function cardsMode(m) { runSession(m, 'Flash cards', pick(m._items.filter(function (x) { return inFilter(x) && x.type === 'card'; }), 10), function () { cardsMode(m); }); }
  function fillMode(m) { runSession(m, 'Missing word', pick(m._items.filter(function (x) { return inFilter(x) && x.type === 'fill'; }), 10), function () { fillMode(m); }); }

  /* ---------- task renderers ---------- */
  function feedback(m, ok, text, t) {
    var box = h('div', { class: 'fb ' + (ok ? 'ok' : 'no') }, h('strong', null, ok ? 'Correct. ' : 'Not quite. '), text || '', t && t.x ? h('p', { class: 'note' }, t.x) : null);
    add(box, sayBox(box));
    if (!ok && AI.on) {
      var out = h('p', { class: 'ai' });
      box.appendChild(btn('Explain this', 'link', function () {
        out.textContent = 'Thinking…';
        AI.explain({ module: m.id, unit: m.units[t.u], item: t }).then(function (x) { out.textContent = x || 'No explanation available.'; }, function () { out.textContent = 'The AI tutor could not be reached.'; });
      }));
      box.appendChild(out);
    }
    return box;
  }

  function renderCard(t, body, done) {
    var ans = h('div', { class: 'card-a', hidden: true }, t.a);
    var rate = h('div', { class: 'rate', hidden: true },
      btn('Didn\'t know', 'bad', function () { done(false); }), btn('Nearly', 'mid', function () { done(null); }), btn('Knew it', 'good', function () { done(true); }));
    var reveal = btn('Show answer', 'primary', function () { ans.hidden = false; rate.hidden = false; reveal.hidden = true; });
    add(body, [h('div', { class: 'card-q' }, t.q), ans, reveal, rate]);
  }

  function renderFill(m, t, body, done) {
    var ok = null, parts = t.text.split('___'), blank = h('span', { class: 'blank' }, '          ');
    var after = h('div');
    var grid = h('div', { class: 'opts two' }, shuffle([t.a].concat(t.d)).map(function (o) {
      return h('button', { class: 'opt', type: 'button', 'data-v': o, onclick: function (ev) {
        if (ok !== null) return;
        ok = o === t.a; blank.textContent = t.a; blank.className = 'blank ' + (ok ? 'ok' : 'no');
        ev.currentTarget.classList.add(ok ? 'ok' : 'no');
        Array.prototype.forEach.call(grid.children, function (b) { b.disabled = true; if (b.getAttribute('data-v') === t.a) b.classList.add('ok'); });
        add(after, [feedback(m, ok, ok ? '' : 'The missing word is "' + t.a + '".', t), btn('Next', 'primary', function () { done(ok); })]);
      } }, o);
    }));
    add(body, [h('div', { class: 'card-q' }, parts[0], blank, parts[1] || ''), grid, after]);
  }

  // Practice: check then show feedback. Exam: record silently.
  function renderQ(m, t, body, done, examMode) {
    var after = h('div'), locked = false, go;
    body.appendChild(h('div', { class: 'card-q' }, t.q));
    if (t.order) {
      var seq = [], pool = shuffle(t.order), list = h('ol', { class: 'seq' }), bank = h('div', { class: 'bank' });
      var draw = function () {
        list.innerHTML = ''; bank.innerHTML = '';
        seq.forEach(function (s, k) { list.appendChild(h('li', null, h('button', { class: 'opt', type: 'button', onclick: function () { if (locked) return; seq.splice(k, 1); draw(); } }, s))); });
        pool.filter(function (s) { return seq.indexOf(s) < 0; }).forEach(function (s) { bank.appendChild(h('button', { class: 'chip', type: 'button', onclick: function () { if (locked) return; seq.push(s); draw(); } }, s)); });
        go.disabled = seq.length !== t.order.length;
      };
      go = btn(examMode ? 'Next' : 'Check', 'primary', function () {
        var ok = seq.join('|') === t.order.join('|'); locked = true;
        if (examMode) return done(ok, seq.join(' → '));
        go.hidden = true;
        add(after, [feedback(m, ok, ok ? '' : 'Correct order: ' + t.order.join(' → '), t), btn('Next', 'primary', function () { done(ok); })]);
      });
      add(body, [h('p', { class: 'hint' }, 'Tap the items in order. Tap one in your list to remove it.'), list, bank, go, after]);
      draw();
      return;
    }
    var multi = t.a.length > 1, sel = [];
    var opts = shuffle(t.o.map(function (text, i) { return { text: text, i: i }; }));
    var grid = h('div', { class: 'opts' }, opts.map(function (o) {
      return h('button', { class: 'opt', type: 'button', 'data-i': o.i, onclick: function (ev) {
        if (locked) return;
        var at = sel.indexOf(o.i);
        if (multi) { if (at < 0) sel.push(o.i); else sel.splice(at, 1); ev.currentTarget.classList.toggle('sel'); }
        else { sel = [o.i]; Array.prototype.forEach.call(grid.children, function (b) { b.classList.remove('sel'); }); ev.currentTarget.classList.add('sel'); }
        go.disabled = !sel.length;
      } }, o.text);
    }));
    go = btn(examMode ? 'Next' : 'Check', 'primary', function () {
      var ok = sel.length === t.a.length && sel.every(function (i) { return t.a.indexOf(i) >= 0; }); locked = true;
      if (examMode) return done(ok, sel.map(function (i) { return t.o[i]; }).join('; '), sel.slice());
      go.hidden = true;
      Array.prototype.forEach.call(grid.children, function (b) {
        var i = +b.getAttribute('data-i'), right = t.a.indexOf(i) >= 0;
        if (right) b.classList.add('ok'); else if (sel.indexOf(i) >= 0) b.classList.add('no');
      });
      add(after, [feedback(m, ok, ok ? '' : 'The correct answer' + (multi ? 's are' : ' is') + ' shown in green.', t), btn('Next', 'primary', function () { done(ok); })]);
    });
    go.disabled = true;
    add(body, [h('p', { class: 'hint' }, multi ? 'Select all that apply.' : 'Choose one.'), grid, go, after]);
  }

  /* ---------- match up ---------- */
  function matchMode(m) {
    var sets = m.matches.map(function (s, i) { return { s: s, i: i }; }).filter(function (x) { return unitFilter < 0 || x.s.u === unitFilter; });
    if (!sets.length) return runSession(m, 'Match up', [], null);
    // weakest set first, with a little randomness
    sets = shuffle(sets).sort(function (a, b) { return setScore(m, a.i) - setScore(m, b.i); });
    var x = sets[0], items = m._items.filter(function (it) { return it.type === 'pair' && it.set === x.i; });
    var chosen = pick(items, 5), right = 0, firstTry = {}, selL = null;
    var body = h('div', { class: 'task' });
    function col(side) {
      return h('div', { class: 'mcol' }, shuffle(chosen).map(function (it) {
        return h('button', { class: 'opt m' + side, type: 'button', 'data-id': it.id, onclick: function (ev) { tap(side, it, ev.currentTarget); } }, x.s.pairs[it.k][side === 'L' ? 0 : 1]);
      }));
    }
    function tap(side, it, el) {
      if (el.classList.contains('ok')) return;
      if (side === 'L') { Array.prototype.forEach.call(body.querySelectorAll('.mL'), function (b) { b.classList.remove('sel'); }); el.classList.add('sel'); selL = { it: it, el: el }; return; }
      if (!selL) return;
      var ok = selL.it.id === it.id;
      if (!(selL.it.id in firstTry)) firstTry[selL.it.id] = ok;
      if (ok) { right++; el.classList.add('ok'); selL.el.classList.remove('sel'); selL.el.classList.add('ok'); selL = null; if (right === chosen.length) finish(); }
      else { el.classList.add('no'); setTimeout(function () { el.classList.remove('no'); }, 500); }
    }
    function finish() {
      var clean = 0; chosen.forEach(function (it) { var ok = firstTry[it.id] === true; mark(it.id, ok); if (ok) clean++; });
      add(body, [h('div', { class: 'fb ' + (clean === chosen.length ? 'ok' : 'no') }, h('strong', null, clean + ' of ' + chosen.length + ' matched first time.')),
        btn('Another round', 'primary', function () { matchMode(m); }), btn('Back to module', '', function () { modScreen(m); })]);
    }
    show(topbar('Match up', function () { modScreen(m); }), body);
    add(body, [h('div', { class: 'utag' }, m.units[x.s.u]), h('div', { class: 'card-q small' }, x.s.title), h('p', { class: 'hint' }, 'Tap an item on the left, then its match on the right.'),
      h('div', { class: 'mgrid' }, col('L'), col('R'))]);
  }
  function setScore(m, i) { return stats(m._items.filter(function (it) { return it.type === 'pair' && it.set === i; })).mastery; }

  /* ---------- label the diagram ---------- */
  function diagramList(m) {
    var ds = m.diagrams.map(function (d, i) { return { d: d, i: i }; }).filter(function (x) { return unitFilter < 0 || x.d.u === unitFilter; });
    if (!ds.length) return runSession(m, 'Label the diagram', [], null);
    show(topbar('Label the diagram', function () { modScreen(m); }), ds.map(function (x) {
      var st = stats(m._items.filter(function (it) { return it.type === 'mark' && it.dg === x.i; }));
      return h('button', { class: 'modcard', type: 'button', onclick: function () { diagram(m, x.i); } }, h('strong', null, x.d.title), h('span', null, m.units[x.d.u]), bar(st.mastery), h('small', null, st.seen ? pct(st.mastery) + ' mastered' : 'Not started'));
    }));
  }
  function diagram(m, di) {
    var d = m.diagrams[di], sel = null, right = 0, firstTry = {};
    var fig = h('div', { class: 'fig' }, h('div', { html: '<svg viewBox="0 0 340 220" role="img" aria-label="' + d.title + '">' + d.svg + '</svg>' }));
    var key = h('ol', { class: 'key' }), bank = h('div', { class: 'bank' }), after = h('div');
    d.marks.forEach(function (k, j) {
      var id = m.id + '.d' + di + '.' + j, li = h('li', null, '?');
      key.appendChild(li);
      fig.appendChild(h('button', { class: 'pin', type: 'button', style: 'left:' + (k.x / 340 * 100) + '%;top:' + (k.y / 220 * 100) + '%', onclick: function (ev) {
        var el = ev.currentTarget; if (!sel || el.classList.contains('ok')) return;
        var ok = sel.l === k.l; if (!(id in firstTry)) firstTry[id] = ok;
        if (ok) { el.classList.add('ok'); li.textContent = k.l; li.className = 'ok'; sel.el.remove(); sel = null; if (++right === d.marks.length) finish(); }
        else { el.classList.add('no'); setTimeout(function () { el.classList.remove('no'); }, 500); }
      } }, String(j + 1)));
    });
    shuffle(d.marks).forEach(function (k) {
      bank.appendChild(h('button', { class: 'chip', type: 'button', onclick: function (ev) {
        Array.prototype.forEach.call(bank.children, function (b) { b.classList.remove('on'); }); ev.currentTarget.classList.add('on'); sel = { l: k.l, el: ev.currentTarget };
      } }, k.l));
    });
    function finish() {
      var clean = 0; d.marks.forEach(function (k, j) { var id = m.id + '.d' + di + '.' + j, ok = firstTry[id] === true; mark(id, ok); if (ok) clean++; });
      add(after, [h('div', { class: 'fb ' + (clean === d.marks.length ? 'ok' : 'no') }, h('strong', null, clean + ' of ' + d.marks.length + ' placed first time.')),
        btn('Try again', 'primary', function () { diagram(m, di); }), btn('Other diagrams', '', function () { diagramList(m); })]);
    }
    show(topbar(d.title, function () { diagramList(m); }), h('div', { class: 'task' }, h('div', { class: 'utag' }, m.units[d.u]), h('p', { class: 'hint' }, d.hint + ' Tap a label, then tap its number.'),
      h('div', { class: 'dgrid' }, h('div', { class: 'dfig' }, fig), h('div', { class: 'dside' }, bank, key, after))));
  }

  /* ---------- final exam ---------- */
  function examPaper(m) {
    var qs = m._items.filter(function (x) { return x.type === 'q'; }), n = Math.min(CFG.examLength, qs.length);
    var out = [], taken = {}, byU = {}, left = [];
    // a question clashes if it shares a topic tag with one already on the paper
    function free(q) { return q.g.every(function (t) { return !taken[t]; }); }
    function take(q) { out.push(q); q.g.forEach(function (t) { taken[t] = true; }); }
    qs.forEach(function (q) { (byU[q.u] = byU[q.u] || []).push(q); });
    // first pass: each unit gets its share of the paper, in proportion to its question count
    Object.keys(byU).forEach(function (u) {
      var quota = Math.floor(byU[u].length * n / qs.length), got = 0;
      shuffle(byU[u]).forEach(function (q) { if (got < quota && free(q)) { take(q); got++; } else left.push(q); });
    });
    // second pass: top up from whatever is left, still avoiding clashes
    left = shuffle(left);
    left.forEach(function (q) { if (out.length < n && free(q)) take(q); });
    // last resort (small banks only): allow clashes rather than set a short paper
    left.forEach(function (q) { if (out.length < n && out.indexOf(q) < 0) out.push(q); });
    return shuffle(out);
  }
  function exam(m) {
    var paper = examPaper(m).map(function (t) {
      return { m: m, u: t.u, id: t.id, fmt: t.order ? 'seq' : t.a.length > 1 ? 'mr' : 'mc', q: t.q, o: t.o, a: t.a, order: t.order, x: t.x, src: t.src };
    });
    paperRun({
      title: 'Final exam', paper: paper,
      leave: function () { if (window.confirm('Leave the exam? This attempt will not be saved.')) modScreen(m); },
      head: function (c, body) { if (SRCTAG[c.src]) body.appendChild(h('div', { class: 'utag' }, SRCTAG[c.src])); },
      finish: result
    });
    function result(res) {
      var score = 0, byU = {};
      res.forEach(function (r) { mark(r.c.id, r.ok); if (r.ok) score++; var b = byU[r.c.u] = byU[r.c.u] || { s: 0, n: 0 }; b.n++; if (r.ok) b.s++; });
      (S.exams[m.id] = S.exams[m.id] || []).push({ d: Date.now(), s: score, n: paper.length }); save();
      var need = Math.ceil(CFG.passMark * paper.length), pass = score >= need;
      var wrong = res.filter(function (r) { return !r.ok; });
      show(topbar('Exam result', function () { modScreen(m); }),
        h('div', { class: 'panel hero res' }, h('div', { class: 'big' }, score + ' / ' + paper.length), h('div', null, pct(score / paper.length) + ' · pass mark ' + need + ' (' + pct(CFG.passMark) + ')'),
          h('div', { class: 'ready ' + (pass ? 'yes' : '') }, pass ? 'Pass.' : 'Not yet. Use Train me on the weaker units below.')),
        h('h2', null, 'By unit'),
        Object.keys(byU).map(function (u) { var b = byU[u], f = b.s / b.n; return h('div', { class: 'urow' }, h('div', { class: 'uname' }, m.units[u], h('b', null, b.s + ' / ' + b.n)), bar(f, f >= CFG.passMark ? 'good' : f < 0.5 ? 'weak' : '')); }),
        wrong.length ? h('h2', null, 'Review (' + wrong.length + ')') : null,
        wrong.map(function (r) {
          var t = r.c, detail;
          if (t.order) {
            detail = [h('p', { class: 'no' }, 'Your order: ' + r.given), h('p', { class: 'ok' }, 'Correct order: ' + t.order.join(' → '))];
          } else {
            // one line per option that matters: right pick, wrong pick, or missed
            var picks = r.picks || [], rows = [], one = t.a.length === 1;
            t.o.forEach(function (text, k) {
              var right = t.a.indexOf(k) >= 0, picked = picks.indexOf(k) >= 0;
              if (right && picked) rows.push(h('li', { class: 'ok' }, h('b', null, '✓ '), text));
              else if (!right && picked) rows.push(h('li', { class: 'no' }, h('b', null, '✗ '), text, h('em', null, one ? ' (your answer)' : ' (should not be selected)')));
              else if (right) rows.push(h('li', { class: 'miss' }, h('b', null, '+ '), text, h('em', null, one ? ' (correct answer)' : ' (missed)')));
            });
            if (!picks.length) rows.unshift(h('li', { class: 'no' }, 'Not answered.'));
            detail = h('ul', { class: 'marks' }, rows);
          }
          return h('div', { class: 'panel rev' }, h('p', { class: 'q' }, t.q), detail, t.x ? h('p', { class: 'note' }, t.x) : null, h('small', null, m.units[t.u]));
        }),
        btn('Back to module', 'primary', function () { modScreen(m); }));
    }
  }

  /* ---------- exam-style paper runner: flag, go back, check your answers, then submit ---------- */
  // Used by the module final exams and every Revision paper. Answers are kept per question
  // (st), so moving back and forward never loses them. Nothing is marked until Submit.
  // items whose order or answer comes from outside the course packs carry a visible label
  var SRCTAG = { mock: 'From the mock exam only: no course pack gives this order', handout: 'From the revision handout only: no course pack gives this order' };
  function paperRun(o) {
    var P = o.paper, A = P.map(function () { return { st: {}, flag: false }; }), i = 0;
    function grid(cur) {
      return h('div', { class: 'qmap' }, P.map(function (c, k) {
        var done = xAnswered(c, A[k].st), fl = A[k].flag;
        return h('button', { class: 'qn' + (k === cur ? ' cur' : '') + (done ? ' done' : '') + (fl ? ' flag' : ''), type: 'button',
          'aria-label': 'Question ' + (k + 1) + (done ? ', answered' : ', not answered') + (fl ? ', flagged' : ''), onclick: function () { go(k); } }, String(k + 1));
      }));
    }
    function go(k) { i = Math.max(0, k); if (i >= P.length) review(); else ask(); }
    function ask() {
      var c = P[i], a = A[i], body = h('div', { class: 'task' }), map = grid(i);
      function refresh() { var g = grid(i); map.parentNode.replaceChild(g, map); map = g; }
      var fl = h('button', { class: 'btn flagbtn' + (a.flag ? ' on' : ''), type: 'button', 'aria-pressed': a.flag ? 'true' : 'false', onclick: function () {
        a.flag = !a.flag; fl.classList.toggle('on', a.flag); fl.setAttribute('aria-pressed', a.flag ? 'true' : 'false'); fl.textContent = a.flag ? '⚑ Flagged' : '⚐ Flag'; refresh();
      } }, a.flag ? '⚑ Flagged' : '⚐ Flag');
      var back = btn('‹ Back', '', function () { go(i - 1); }); back.disabled = i === 0;
      var last = i === P.length - 1;
      show(topbar(o.title, o.leave, (i + 1) + ' / ' + P.length), bar(i / P.length, 'thin'), body);
      o.head(c, body);
      xRender(c, body, a.st, refresh);
      add(body, [h('div', { class: 'qnav' }, back, fl, btn(last ? 'Check answers' : 'Next ›', 'primary', function () { go(i + 1); })),
        h('p', { class: 'hint gap' }, 'Tap a number to jump to that question. Green means answered, not marked: nothing is marked until you submit.'), map,
        last ? null : h('button', { class: 'link center', type: 'button', onclick: review }, 'Check answers and submit')]);
    }
    function review() {
      i = P.length;
      var un = [], fl = [];
      P.forEach(function (c, k) { if (!xAnswered(c, A[k].st)) un.push(k + 1); if (A[k].flag) fl.push(k + 1); });
      show(topbar('Check your answers', o.leave),
        h('div', { class: 'panel hero res' }, h('div', { class: 'big' }, (P.length - un.length) + ' / ' + P.length), h('div', null, 'answered'),
          h('div', { class: 'ready' + (un.length || fl.length ? '' : ' yes') },
            un.length ? 'Not answered: ' + un.join(', ') + '.' : 'Every question has an answer.',
            fl.length ? h('br') : null, fl.length ? 'Flagged: ' + fl.join(', ') + '.' : null)),
        h('p', { class: 'hint' }, 'Tap a number to go back to it. Nothing is marked until you submit.'), grid(-1),
        btn('Submit', 'primary', function () {
          if (un.length && !window.confirm(un.length + (un.length === 1 ? ' question is' : ' questions are') + ' not answered and will score zero. Submit anyway?')) return;
          o.finish(P.map(function (c, k) { return ext(xScore(c, A[k].st), { c: c }); }));
        }),
        btn('Back to question ' + P.length, '', function () { go(P.length - 1); }));
    }
    go(0);
  }

  /* exam-style renderers: one per format. State lives in st, so a question redraws as it was left. */
  function norm(s) { return String(s).toLowerCase().replace(/[‘’]/g, "'").replace(/\s+/g, ' ').trim().replace(/\.$/, ''); }
  function xInit(c, st) {
    if (st.init) return st;
    st.init = true;
    var f = c.fmt;
    if (f === 'mc' || f === 'mr') { st.opts = shuffle(c.o.map(function (x, k) { return k; })); st.sel = []; }
    else if (f === 'seq' || f === 'rank') { st.pool = shuffle(c.order); st.seq = []; }
    else if (f === 'type' || f === 'num') st.v = '';
    else if (f === 'select') { st.opts = shuffle([c.a].concat(c.d)); st.v = ''; }
    else if (f === 'match') {
      if (c.kind === 'pairs') {
        var s = c.m.matches[c.set], all = s.pairs.map(function (p, j) { return { id: c.id + '.' + j, l: p[0], r: p[1] }; });
        st.rows = pick(all, Math.min(4, all.length));
        var spare = shuffle(all.filter(function (x) { return st.rows.indexOf(x) < 0; })).slice(0, 1); // one extra answer that matches nothing
        st.opts = shuffle(st.rows.concat(spare).map(function (x) { return x.r; })); st.q = s.title; st.once = true;
      } else {
        st.rows = shuffle(c.rows).slice(0, 5).map(function (x) { return { id: c.id, l: x[0], r: c.cats[x[1]] }; });
        st.opts = c.cats.slice(); st.q = c.q;
      }
      st.vals = st.rows.map(function () { return ''; });
    } else if (f === 'diagram') {
      var d = c.m.diagrams[c.dg];
      st.ask = shuffle(d.marks.map(function (k, j) { return { k: k, j: j }; })).slice(0, Math.min(3, d.marks.length)).sort(function (a, b) { return a.j - b.j; });
      st.labels = shuffle(d.marks.map(function (k) { return k.l; }));
      st.vals = st.ask.map(function () { return ''; });
    }
    return st;
  }
  function xAnswered(c, st) {
    if (!st.init) return false;
    var f = c.fmt;
    if (f === 'mc' || f === 'mr') return st.sel.length > 0;
    if (f === 'seq' || f === 'rank') return st.seq.length === c.order.length;
    if (f === 'type' || f === 'num' || f === 'select') return String(st.v).trim() !== '';
    return st.vals.every(function (v) { return v !== ''; });
  }
  function xScore(c, st) {
    xInit(c, st);
    var f = c.fmt, ok, v;
    if (f === 'mc' || f === 'mr') {
      ok = st.sel.length === c.a.length && st.sel.every(function (k) { return c.a.indexOf(k) >= 0; });
      return { ok: ok, marks: [[c.id, ok]], picks: st.sel.slice(), given: st.sel.map(function (k) { return c.o[k]; }).join('; ') || 'no answer', right: c.a.map(function (k) { return c.o[k]; }).join('; ') };
    }
    if (f === 'seq' || f === 'rank') {
      ok = st.seq.length === c.order.length && st.seq.join('|') === c.order.join('|');
      return { ok: ok, marks: [[c.id, ok]], given: st.seq.join(' → ') || 'no answer', right: c.order.join(' → ') };
    }
    if (f === 'type' || f === 'num') {
      v = String(st.v).trim();
      if (f === 'num') { var x = v.replace(/,/g, ''); ok = x !== '' && isFinite(+x) && Math.abs(+x - c.a) < 1e-9; }
      else ok = v !== '' && norm(v) === norm(c.a);
      return { ok: ok, marks: [[c.id, ok]], given: v || 'no answer', right: String(c.a) };
    }
    if (f === 'select') { ok = st.v === c.a; return { ok: ok, marks: [[c.id, ok]], given: st.v || 'no answer', right: c.a }; }
    var marks = [], n = 0, wrong = [];
    if (f === 'match') {
      st.rows.forEach(function (x, k) { var good = st.vals[k] === x.r; if (good) n++; else wrong.push(x.l + ' → ' + x.r); if (c.kind === 'pairs') marks.push([x.id, good]); });
      ok = n === st.rows.length; if (c.kind === 'sort') marks.push([c.id, ok]);
      return { ok: ok, marks: marks, given: n + ' of ' + st.rows.length + ' matched', right: wrong.join('; '), q: st.q };
    }
    st.ask.forEach(function (z, k) { var good = st.vals[k] === z.k.l; if (good) n++; else wrong.push('Marker ' + (z.j + 1) + ' → ' + z.k.l); marks.push([c.id + '.' + z.j, good]); });
    return { ok: n === st.ask.length, marks: marks, given: n + ' of ' + st.ask.length + ' correct', right: wrong.join('; '), q: c.m.diagrams[c.dg].title };
  }
  function xSelect(opts, val, label, set) {
    var sl = h('select', { class: 'tsel wide', 'aria-label': label }, h('option', { value: '' }, 'Choose…'), opts.map(function (o) { return h('option', { value: o }, o); }));
    sl.value = val; sl.addEventListener('change', function () { set(sl.value); });
    return sl;
  }
  function xRender(c, body, st, ch) {
    xInit(c, st);
    var f = c.fmt;
    if (f === 'mc' || f === 'mr') {
      var multi = c.a.length > 1;
      var grid = h('div', { class: 'opts' }, st.opts.map(function (k) {
        return h('button', { class: 'opt' + (st.sel.indexOf(k) >= 0 ? ' sel' : ''), type: 'button', onclick: function (ev) {
          var at = st.sel.indexOf(k);
          if (multi) { if (at < 0) st.sel.push(k); else st.sel.splice(at, 1); ev.currentTarget.classList.toggle('sel'); }
          else { st.sel = [k]; Array.prototype.forEach.call(grid.children, function (b) { b.classList.remove('sel'); }); ev.currentTarget.classList.add('sel'); }
          ch();
        } }, c.o[k]);
      }));
      add(body, [h('div', { class: 'card-q' }, c.q), h('p', { class: 'hint' }, multi ? 'Select all that apply.' : 'Choose one.'), grid]);
      return;
    }
    if (f === 'seq' || f === 'rank') {
      var list = h('ol', { class: 'seq' }), bank = h('div', { class: 'bank' });
      var draw = function () {
        list.innerHTML = ''; bank.innerHTML = '';
        st.seq.forEach(function (s, k) { list.appendChild(h('li', null, h('button', { class: 'opt', type: 'button', onclick: function () { st.seq.splice(k, 1); draw(); ch(); } }, s))); });
        st.pool.filter(function (s) { return st.seq.indexOf(s) < 0; }).forEach(function (s) { bank.appendChild(h('button', { class: 'chip', type: 'button', onclick: function () { st.seq.push(s); draw(); ch(); } }, s)); });
      };
      add(body, [h('div', { class: 'card-q' }, c.q), h('p', { class: 'hint' }, 'Tap the items in order. Tap one in your list to remove it.'), list, bank]);
      draw();
      return;
    }
    if (f === 'type' || f === 'num') {
      var parts = c.text.split('___');
      var inp = h('input', { class: 'tin' + (f === 'num' ? ' n' : ''), type: 'text', inputmode: f === 'num' ? 'decimal' : 'text', autocomplete: 'off', autocorrect: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Your answer' });
      inp.value = st.v;
      inp.addEventListener('input', function () { var was = xAnswered(c, st); st.v = inp.value; if (was !== xAnswered(c, st)) ch(); });
      add(body, [h('div', { class: 'card-q' }, parts[0], inp, parts[1] || ''), h('p', { class: 'hint' }, f === 'num' ? 'Numbers only.' : 'Type the missing word or words.')]);
      return;
    }
    if (f === 'select') {
      var p2 = c.text.split('___');
      var sel = h('select', { class: 'tsel', 'aria-label': 'Choose the answer' }, h('option', { value: '' }, 'Choose…'), st.opts.map(function (o) { return h('option', { value: o }, o); }));
      sel.value = st.v; sel.addEventListener('change', function () { st.v = sel.value; ch(); });
      add(body, h('div', { class: 'card-q' }, p2[0], sel, p2[1] || ''));
      return;
    }
    if (f === 'match') {
      // v0.9.2: laid out like the mock exam. Answers are listed once with letters;
      // each item gets letter buttons. In pairs sets each answer is used once.
      var L = 'ABCDEFGH', spare = st.opts.length - st.rows.length;
      var how = st.once
        ? 'Match each item to its answer from the list. Use each answer once.' + (spare === 1 ? ' One answer is spare.' : spare > 1 ? ' ' + spare + ' answers are spare.' : '')
        : 'Choose the right group for each statement. A letter can be used more than once.';
      var alist = h('ol', { class: 'alist' }, st.opts.map(function (o, q) { return h('li', null, h('b', null, L[q]), h('span', null, o)); }));
      var rows = h('div', { class: 'mlist' });
      var mdraw = function () {
        rows.innerHTML = '';
        st.rows.forEach(function (x, k) {
          var cur = st.vals[k], ci = st.opts.indexOf(cur);
          rows.appendChild(h('div', { class: 'mrow lrow' }, h('span', null, x.l),
            h('div', { class: 'lets', role: 'group', 'aria-label': 'Answer for ' + x.l }, st.opts.map(function (o, q) {
              var on = cur === o, used = st.once && !on && st.vals.indexOf(o) >= 0;
              return h('button', { class: 'let' + (on ? ' on' : '') + (used ? ' used' : ''), type: 'button', 'aria-pressed': on ? 'true' : 'false', 'aria-label': L[q] + ': ' + o, onclick: function () {
                if (on) st.vals[k] = '';
                else { if (st.once) st.vals.forEach(function (v, z) { if (v === o) st.vals[z] = ''; }); st.vals[k] = o; }
                mdraw(); ch();
              } }, L[q]);
            })),
            h('small', { class: 'lpick' }, ci >= 0 ? L[ci] + ' · ' + cur : 'Not answered yet')));
        });
      };
      add(body, [h('div', { class: 'card-q small' }, st.q), h('p', { class: 'hint' }, how), h('div', { class: 'mx' }, alist, rows)]);
      mdraw();
      return;
    }
    if (f === 'diagram') {
      var d = c.m.diagrams[c.dg], fig = h('div', { class: 'fig' }, h('div', { html: '<svg viewBox="0 0 340 220" role="img" aria-label="' + d.title + '">' + d.svg + '</svg>' }));
      // v0.9.1: tap a label, then tap its number (or the other way round). No dropdowns.
      // Only the asked markers are tappable; the others are dimmed. Each label can be used once.
      var askAt = {}, pins = [], selL = null, selM = null;
      var bank = h('div', { class: 'bank' }), key = h('div', { class: 'dkey' });
      st.ask.forEach(function (z, k) { askAt[z.j] = k; });
      d.marks.forEach(function (mk, j) {
        var pos = 'left:' + (mk.x / 340 * 100) + '%;top:' + (mk.y / 220 * 100) + '%', k = askAt[j];
        if (k === undefined) { fig.appendChild(h('span', { class: 'pin still off', style: pos, 'aria-hidden': 'true' }, String(j + 1))); return; }
        pins[k] = h('button', { class: 'pin', type: 'button', style: pos, onclick: function () { tapM(k); } }, String(j + 1));
        fig.appendChild(pins[k]);
      });
      var assign = function (k, l) {
        st.vals.forEach(function (v, q) { if (v === l) st.vals[q] = ''; });
        st.vals[k] = l; selL = null; selM = null; draw(); ch();
      };
      var tapL = function (l) { if (selM !== null) assign(selM, l); else { selL = selL === l ? null : l; draw(); } };
      var tapM = function (k) {
        if (selL !== null) assign(k, selL);
        else if (st.vals[k]) { st.vals[k] = ''; selM = null; draw(); ch(); }
        else { selM = selM === k ? null : k; draw(); }
      };
      var draw = function () {
        bank.innerHTML = ''; key.innerHTML = '';
        st.labels.forEach(function (l) {
          var used = st.vals.indexOf(l) >= 0;
          bank.appendChild(h('button', { class: 'chip' + (selL === l ? ' on' : '') + (used ? ' used' : ''), type: 'button', 'aria-pressed': selL === l ? 'true' : 'false', onclick: function () { tapL(l); } }, l));
        });
        st.ask.forEach(function (z, k) {
          var v = st.vals[k], n = String(z.j + 1);
          pins[k].className = 'pin' + (v ? ' set' : '') + (selM === k ? ' on' : '');
          pins[k].setAttribute('aria-label', 'Marker ' + n + (v ? ': ' + v + '. Tap to clear.' : ': no answer yet'));
          key.appendChild(h('button', { class: 'drow' + (v ? ' set' : '') + (selM === k ? ' on' : ''), type: 'button', onclick: function () { tapM(k); } },
            h('b', null, n), h('span', null, v || 'Not answered yet'), v ? h('i', { 'aria-hidden': 'true' }, '×') : null));
        });
      };
      var nums = st.ask.map(function (z) { return z.j + 1; });
      var asked = nums.length === d.marks.length ? '' : ' Only markers ' + nums.slice(0, -1).join(', ') + ' and ' + nums[nums.length - 1] + ' are asked.';
      add(body, [h('div', { class: 'card-q small' }, d.title + ': what is at each numbered marker?'),
        h('div', { class: 'dgrid' }, h('div', { class: 'dfig' }, fig),
          h('div', { class: 'dside' }, h('p', { class: 'hint' }, 'Tap a label, then tap its number. Tap a filled number to clear it.' + asked), bank, key))]);
      draw();
    }
  }

  /* ---------- revision: exam countdown (number of days from revision.js) ---------- */
  // Exam conditions: one paper a day in the course's exam formats, no feedback until the end.
  // Questions are built from the module items (so answers here also move module mastery)
  // plus the Revision-only items in content/revision.js.
  var RV = window.COURSE_REVISION || null, RVC = [];
  // day count and mock day come from the content: the day flagged mock: true also offers the full mock (none flagged: no mock)
  var ND = RV ? RV.days.length : 0;
  var MOCKDAY = RV ? (RV.days.filter(function (d) { return d.mock; })[0] || null) : null;
  function dayByN(n) { return RV.days.filter(function (d) { return d.n === n; })[0] || RV.days[n - 1]; }
  function numWord(n) { return NUMWORD[n] || String(n); }
  var FMT = {};
  var NUMRE = /^\d+(\.\d+)?$/;
  var RANKRE = /rank|importance|priority|most|highest|effective|likelihood|challenge|risk/i;
  function ext(a, b) { var o = {}, k; for (k in a) o[k] = a[k]; for (k in b) o[k] = b[k]; return o; }

  function rvBuild() {
    RV.formats.forEach(function (f) { FMT[f[0]] = { name: f[1], how: f[2] }; });
    MODS.forEach(function (m) {
      m._items.forEach(function (x) {
        var base = { m: m, u: x.u, id: x.id };
        if (x.type === 'q') {
          if (x.order) RVC.push(ext(base, { fmt: x.f === 'r' ? 'rank' : x.f === 's' ? 'seq' : RANKRE.test(x.q) ? 'rank' : 'seq', q: x.q, order: x.order, g: x.g, x: x.x, src: x.src }));
          else RVC.push(ext(base, { fmt: x.a.length > 1 ? 'mr' : 'mc', q: x.q, o: x.o, a: x.a, g: x.g, x: x.x, src: x.src }));
        } else if (x.type === 'fill') {
          if (NUMRE.test(x.a)) RVC.push(ext(base, { fmt: 'num', text: x.text, a: +x.a }));
          else {
            RVC.push(ext(base, { fmt: 'type', text: x.text, a: x.a }));
            RVC.push(ext(base, { fmt: 'select', text: x.text, a: x.a, d: x.d }));
          }
        }
      });
      m.matches.forEach(function (s, i) { RVC.push({ fmt: 'match', kind: 'pairs', m: m, u: s.u, id: m.id + '.p' + i, set: i, q: s.title }); });
      m.diagrams.forEach(function (d, i) { RVC.push({ fmt: 'diagram', m: m, u: d.u, id: m.id + '.d' + i, dg: i, q: d.title }); });
    });
    RV.numeric.forEach(function (n, i) { RVC.push({ fmt: 'num', day: n[0], id: 'rv.n' + i, text: n[1], a: n[2] }); });
    RV.orders.forEach(function (o, i) { RVC.push({ fmt: o.f === 'r' ? 'rank' : 'seq', day: o.d, id: 'rv.o' + i, q: o.q, order: o.order }); });
    RV.sorts.forEach(function (s, i) { RVC.push({ fmt: 'match', kind: 'sort', day: s.d, id: 'rv.s' + i, q: s.q, cats: s.cats, rows: s.rows }); });
  }
  if (RV) rvBuild();

  function rvState() { if (!S.rev) S.rev = { start: null, days: {}, fmt: {} }; return S.rev; }
  function today() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function daysSince(key) {
    var p = key.split('-'), a = new Date(+p[0], +p[1] - 1, +p[2]), n = new Date(), b = new Date(n.getFullYear(), n.getMonth(), n.getDate());
    return Math.round((b - a) / 86400000);
  }
  function rvDayNow() { var r = rvState(); return r.start ? Math.max(1, daysSince(r.start) + 1) : 0; }
  function dayOpen(n) { var r = rvState(); return r.start ? daysSince(r.start) >= n - 1 : n === 1; }
  function inDay(day, c) {
    if (c.day) return c.day === day.n;
    return !!c.m && day.units.some(function (p) { return p[0] === c.m.id && p[1] === c.u; });
  }
  function subIds(c) {
    if (c.fmt === 'match' && c.kind === 'pairs') return c.m.matches[c.set].pairs.map(function (p, j) { return c.id + '.' + j; });
    if (c.fmt === 'diagram') return c.m.diagrams[c.dg].marks.map(function (k, j) { return c.id + '.' + j; });
    return [c.id];
  }
  function cw(c) { var ids = subIds(c), t = 0; ids.forEach(function (id) { t += weight(id); }); return t / ids.length; }

  // Weighted draw towards weak items, never two questions on the same topic tag or the same source item.
  function drawN(list, n, used) {
    var pool = list.map(function (c) { return { c: c, w: cw(c) }; }), out = [];
    function free(c) { return !used.ids[c.id] && (c.g || []).every(function (t) { return !used.tags[t]; }); }
    pool = pool.filter(function (p) { return free(p.c); });
    while (out.length < n && pool.length) {
      var tot = 0, k, r; pool.forEach(function (p) { tot += p.w; });
      r = Math.random() * tot;
      for (k = 0; k < pool.length - 1; k++) { r -= pool[k].w; if (r <= 0) break; }
      var c = pool.splice(k, 1)[0].c;
      if (!free(c)) continue;
      out.push(c); used.ids[c.id] = true; (c.g || []).forEach(function (t) { used.tags[t] = true; });
    }
    return out;
  }
  function rvPaper(day, mock) {
    var mix = mock ? RV.mockMix : RV.paperMix, out = [], used = { ids: {}, tags: {} };
    RV.formats.forEach(function (f) {
      var k = f[0], want = mix[k] || 0;
      var mine = RVC.filter(function (c) { return c.fmt === k && (mock || inDay(day, c)); });
      var got = drawN(mine, want, used);
      // every format appears every day: if today's topics have too few of a format, borrow from other days
      if (got.length < want) {
        got = got.concat(drawN(RVC.filter(function (c) { return c.fmt === k && mine.indexOf(c) < 0; }), want - got.length, used)
          .map(function (c) { return ext(c, { borrowed: true }); }));
      }
      out = out.concat(got);
    });
    return shuffle(out);
  }

  /* revision home */
  function rvHome() {
    var r = rvState(), now = rvDayNow();
    var rows = RV.days.map(function (d) {
      var open = dayOpen(d.n), rec = r.days[d.n], st;
      if (!open) { var wait = d.n - now; st = !r.start ? 'Unlocks ' + (d.n === 2 ? 'the day after you start' : (d.n - 1) + ' days after you start') : 'Unlocks ' + (wait <= 1 ? 'tomorrow' : 'in ' + wait + ' days'); }
      else st = rec ? 'Best ' + pct(rec.best) + ' · ' + rec.tries + ' attempt' + (rec.tries > 1 ? 's' : '') : (d.n === now || (!r.start && d.n === 1) ? 'Today' : 'Ready');
      var topics = d.units.map(function (p) { var m = MODS.filter(function (x) { return x.id === p[0]; })[0]; return m ? (m.tag || (LBL.moduleTag != null ? LBL.moduleTag : 'M') + (MODS.indexOf(m) + 1)) + ' ' + m.units[p[1]].split(':')[0] : ''; }).join(' · ');
      return h('button', { class: 'modcard day' + (open ? '' : ' off') + (rec && rec.best >= CFG.passMark ? ' done' : ''), type: 'button', disabled: !open, onclick: function () { rvStart(d, false); } },
        h('strong', null, 'Day ' + d.n + ': ' + d.title), h('span', null, topics), rec ? bar(rec.best, rec.best >= CFG.passMark ? 'good' : rec.best < 0.5 ? 'weak' : '') : null,
        h('small', null, st + ' · ' + RV.paperLength + ' questions'));
    });
    var mock = null, mk = r.days.mock;
    if (MOCKDAY) {
      var mockOpen = dayOpen(MOCKDAY.n);
      mock = h('button', { class: 'modcard day mock' + (mockOpen ? '' : ' off'), type: 'button', disabled: !mockOpen, onclick: function () { rvStart(MOCKDAY, true); } },
        h('strong', null, 'Day ' + MOCKDAY.n + ': Full mock exam'), h('span', null, 'Every module, every format'), mk ? bar(mk.best, mk.best >= CFG.passMark ? 'good' : '') : null,
        h('small', null, (mockOpen ? (mk ? 'Best ' + pct(mk.best) : 'Ready') : 'Unlocks on Day ' + MOCKDAY.n) + ' · ' + RV.mockLength + ' questions'));
    }
    var fs = RV.formats.map(function (f) {
      var x = r.fmt[f[0]];
      return h('div', { class: 'urow' }, h('div', { class: 'uname' }, f[1], h('b', null, x ? x.s + ' / ' + x.n : '–')), bar(x ? x.s / x.n : 0, x ? (x.s / x.n >= CFG.passMark ? 'good' : x.s / x.n < 0.5 ? 'weak' : '') : ''));
    });
    show(topbar('Revision', home),
      h('div', { class: 'panel hero' },
        h('div', { class: 'big' }, r.start ? (now > ND ? 'Done' : 'Day ' + now) : ND + ' days'),
        h('div', null, r.start ? (now > ND ? 'All ' + numWord(ND) + ' days are open. Keep sitting papers.' : 'of ' + ND + ' · started ' + r.start.split('-').reverse().join('/')) : 'One exam-style paper a day, in ' + (TXT.formatsRevision || 'the exam formats') + '.'),
        h('div', { class: 'ready' }, 'Exam conditions: no feedback until you finish. ' + (TXT.modulesOpen || 'Every module stays open for practice at any time.'))),
      h('h2', null, 'Your countdown'), rows, mock,
      h('h2', null, 'Score by exam format'), fs,
      h('div', { class: 'panel' }, h('p', null, 'Each day unlocks at midnight after you start Day 1. Days you have reached stay open, so you can sit their papers again.'),
        r.start ? btn('Restart the countdown', '', function () { if (window.confirm('Restart the ' + ND + ' days from today? Scores are kept.')) { r.start = today(); save(); rvHome(); } }) : null));
  }

  function rvStart(day, mock) {
    var r = rvState();
    if (!r.start) { r.start = today(); save(); }
    paperRun({
      title: mock ? 'Full mock exam' : 'Day ' + day.n, paper: rvPaper(day, mock),
      leave: function () { if (window.confirm('Leave this paper? This attempt will not be saved.')) rvHome(); },
      head: function (c, body) {
        add(body, [h('div', { class: 'fmt' }, h('b', null, FMT[c.fmt].name), ' · ', FMT[c.fmt].how),
          h('div', { class: 'utag' }, c.m ? c.m.title + ' · ' + c.m.units[c.u] : 'Day ' + c.day + ': ' + dayByN(c.day).title),
          SRCTAG[c.src] ? h('div', { class: 'utag' }, SRCTAG[c.src]) : null]);
      },
      finish: function (res) { rvResult(day, mock, res); }
    });
  }
  function rvResult(day, mock, res) {
    var r = rvState(), score = 0, byF = {};
    res.forEach(function (x) {
      x.marks.forEach(function (mk) { mark(mk[0], mk[1]); });
      if (x.ok) score++;
      var b = byF[x.c.fmt] = byF[x.c.fmt] || { s: 0, n: 0 }; b.n++; if (x.ok) b.s++;
      var g = r.fmt[x.c.fmt] = r.fmt[x.c.fmt] || { s: 0, n: 0 }; g.n++; if (x.ok) g.s++;
    });
    var frac = score / res.length, key = mock ? 'mock' : day.n, rec = r.days[key] = r.days[key] || { best: 0, tries: 0 };
    rec.tries++; rec.best = Math.max(rec.best, frac); rec.last = frac; save();
    var need = Math.ceil(CFG.passMark * res.length), pass = score >= need;
    var weakest = RV.formats.filter(function (f) { return byF[f[0]]; }).sort(function (a, b) { return byF[a[0]].s / byF[a[0]].n - byF[b[0]].s / byF[b[0]].n; })[0];
    var wrong = res.filter(function (x) { return !x.ok; });
    show(topbar(mock ? 'Mock result' : 'Day ' + day.n + ' result', rvHome),
      h('div', { class: 'panel hero res' }, h('div', { class: 'big' }, score + ' / ' + res.length), h('div', null, pct(frac) + ' · pass mark ' + need + ' (' + pct(CFG.passMark) + ')'),
        h('div', { class: 'ready ' + (pass ? 'yes' : '') }, pass ? 'Pass.' : 'Not yet.' + (weakest && byF[weakest[0]].s < byF[weakest[0]].n ? ' Weakest format: ' + weakest[1] + '.' : ''))),
      h('h2', null, 'By exam format'),
      RV.formats.filter(function (f) { return byF[f[0]]; }).map(function (f) {
        var b = byF[f[0]], x = b.s / b.n;
        return h('div', { class: 'urow' }, h('div', { class: 'uname' }, f[1], h('b', null, b.s + ' / ' + b.n)), bar(x, x >= CFG.passMark ? 'good' : x < 0.5 ? 'weak' : ''));
      }),
      wrong.length ? h('h2', null, 'Review (' + wrong.length + ')') : null,
      wrong.map(function (x) {
        var c = x.c, multi = c.fmt === 'match' || c.fmt === 'diagram';
        return h('div', { class: 'panel rev' }, h('div', { class: 'fmt' }, h('b', null, FMT[c.fmt].name)),
          h('p', { class: 'q' }, x.q || c.q || c.text.replace('___', '_____')),
          h('p', { class: 'no' }, (multi ? 'You got: ' : 'Your answer: ') + x.given),
          h('p', { class: 'ok' }, (multi ? 'Correct: ' : (c.fmt === 'seq' || c.fmt === 'rank' ? 'Correct order: ' : 'Correct answer: ')) + x.right),
          c.x ? h('p', { class: 'note' }, c.x) : null,
          h('small', null, c.m ? c.m.title + ' · ' + c.m.units[c.u] : 'Revision · Day ' + c.day));
      }),
      btn(mock ? 'Sit another mock' : 'Sit this day again', 'primary', function () { rvStart(day, mock); }), btn('Back to countdown', '', rvHome));
  }

  /* ---------- reader (engine 1.1.0) ----------
     The course's source material as chapters: text that reflows, with pictures, diagrams, charts and tables.
     Read aloud goes block by block and highlights the block it is on; at a picture it reads the written
     description. Descriptions are written when the course is built and checked by the subject expert:
     nothing is generated on the device. Turned on per course with reader: ['reader1', ...] in course.js. */
  var RD = window.COURSE_READER || null;
  var RSIZE = [0.9, 1, 1.15, 1.3, 1.5], RRATE = [0.8, 1, 1.2, 1.4];
  var RLOCK = null; // screen wake lock while reading aloud, where the device allows it
  function rdState() {
    var r = S.reader = S.reader || {};
    r.pos = r.pos || {}; if (r.size == null) r.size = 1; if (r.rate == null) r.rate = 1;
    return r;
  }
  // chapters with mod/unit (engine 1.5.0) are read from the module screen; the rest from the home card
  function rdChapters() { return RD && RD.chapters ? RD.chapters.filter(function (c) { return !c.mod; }) : []; }
  function rdFrac(ch) {
    var p = rdState().pos[ch.id]; if (!p) return 0;
    return p.done ? 1 : Math.min(1, (p.b + 1) / Math.max(1, ch.blocks.length));
  }
  function rdHomeCard() {
    var chs = rdChapters(); if (!chs.length) return null;
    var tot = 0; chs.forEach(function (c) { tot += rdFrac(c); });
    var started = chs.some(function (c) { return rdState().pos[c.id]; });
    return h('button', { class: 'modcard rdcard', type: 'button', onclick: rdContents },
      h('strong', null, RD.title || 'Course material'), h('span', null, RD.subtitle || 'Read the source material, or have it read to you'),
      bar(tot / chs.length), h('small', null, started ? pct(tot / chs.length) + ' read' : 'Not started'));
  }
  function rdContents() {
    var chs = rdChapters(), r = rdState(), last = r.last && chs.filter(function (c) { return c.id === r.last; })[0];
    show(topbar(RD.title || 'Course material', home),
      last && !(r.pos[last.id] || {}).done ? btn('Carry on reading: ' + last.title, 'primary', function () { rdChapter(chs.indexOf(last)); }) : null,
      h('h2', null, 'Contents'),
      chs.map(function (c, k) {
        var f = rdFrac(c), p = r.pos[c.id];
        return h('button', { class: 'modcard', type: 'button', onclick: function () { rdChapter(k); } },
          h('strong', null, c.title), c.source ? h('span', null, c.source) : null,
          bar(f), h('small', null, !p ? 'Not started' : p.done ? 'Read' : pct(f) + ' read'));
      }),
      RD.note ? h('p', { class: 'copy' }, RD.note) : null);
  }
  // the words read aloud for one block (also what a screen reader user would want)
  function rdSpeech(b) {
    if (Array.isArray(b)) {
      var t = b[0], v = b[1];
      if (t === 'ul' || t === 'ol') return v.map(function (x, k) { return sayEnd((t === 'ol' ? (k + 1) + '. ' : '') + x); }).join(' ');
      if (t === 'note') return sayEnd('Note: ' + v);
      return sayEnd(v);
    }
    var lead = rdWord(b); lead = lead.charAt(0).toUpperCase() + lead.slice(1);
    var out = sayEnd(lead + (b.cap ? ': ' + b.cap : ''));
    if (b.desc) out += sayEnd('Description: ' + b.desc);
    else if (b.fig === 'table') out += (b.rows || []).map(function (row, k) {
      return sayEnd('Row ' + (k + 1) + ': ' + row.map(function (cell, j) { return (b.head && b.head[j] ? b.head[j] + ', ' : '') + cell; }).join('; '));
    }).join(' ');
    return out;
  }
  function rdWord(b) { return { table: 'table', chart: 'chart', diagram: 'diagram' }[b.fig] || 'picture'; }
  function rdFigure(b, onDescribe) {
    var media;
    if (b.fig === 'table') {
      media = h('div', { class: 'rtablewrap' }, h('table', { class: 'rtable' },
        b.head ? h('thead', null, h('tr', null, b.head.map(function (x) { return h('th', { scope: 'col' }, x); }))) : null,
        h('tbody', null, (b.rows || []).map(function (row) { return h('tr', null, row.map(function (x) { return h('td', null, x); })); }))));
    } else if (b.svg) {
      media = h('div', { class: 'rmedia', role: 'img', 'aria-label': b.alt || b.cap || 'Figure', html: b.svg });
    } else {
      media = h('img', { class: 'rmedia', src: b.src, alt: b.alt || b.cap || '', loading: 'lazy' });
    }
    var desc = b.desc ? h('div', { class: 'rdesc', hidden: true }, h('b', null, 'Description'), h('p', null, b.desc)) : null;
    var dbtn = b.desc ? h('button', { class: 'btn link rdbtn', type: 'button', 'aria-expanded': 'false', onclick: function () {
      var open = desc.hidden; desc.hidden = !open; dbtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      dbtn.textContent = open ? 'Hide description' : '🔊 Describe this ' + rdWord(b);
      if (open) onDescribe(b);
    } }, '🔊 Describe this ' + rdWord(b)) : null;
    if (b.fig !== 'table') media.addEventListener('click', function () { rdZoom(b); });
    return h('figure', { class: 'rfig' }, media, b.cap ? h('figcaption', null, b.cap) : null, dbtn, desc);
  }
  // full-screen view of one picture: pinch to zoom, description underneath
  function rdZoom(b) {
    var ov = h('div', { class: 'rzoom', role: 'dialog', 'aria-label': b.cap || 'Picture' },
      h('button', { class: 'back rzx', type: 'button', 'aria-label': 'Close', onclick: function () { ov.remove(); } }, '×'),
      b.svg ? h('div', { class: 'rzmedia', html: b.svg }) : h('img', { class: 'rzmedia', src: b.src, alt: b.alt || b.cap || '' }),
      b.cap ? h('p', { class: 'rzcap' }, b.cap) : null, b.desc ? h('p', { class: 'rzdesc' }, b.desc) : null);
    document.body.appendChild(ov);
  }
  function rdWake(on) {
    try {
      if (on && !RLOCK && navigator.wakeLock) navigator.wakeLock.request('screen').then(function (l) { RLOCK = l; }, function () {});
      if (!on && RLOCK) { RLOCK.release(); RLOCK = null; }
    } catch (e) {}
  }
  function rdChapter(k) {
    var chs = rdChapters(), ch = chs[k], r = rdState(), els = [];
    r.last = ch.id; save();
    function setPos(b, done) { var p = r.pos[ch.id] = r.pos[ch.id] || { b: 0 }; p.b = b; if (done) p.done = true; save(); }
    var playBtn, sizeBtns, rateBtn, cur = null;
    var text = h('article', { class: 'rtext', lang: 'en-GB', style: '--rsize:' + RSIZE[r.size] }, h('h1', { class: 'rtitle' }, ch.title),
      ch.source ? h('p', { class: 'rsrc' }, ch.source) : null,
      ch.blocks.map(function (b, i) {
        var el;
        if (Array.isArray(b)) {
          var t = b[0], v = b[1];
          if (t === 'h') el = h('h2', { class: 'rh' }, v);
          else if (t === 'ul' || t === 'ol') el = h(t, { class: 'rlist' }, v.map(function (x) { return h('li', null, x); }));
          else if (t === 'note') el = h('aside', { class: 'rnote' }, v);
          else el = h('p', null, v);
        } else el = rdFigure(b, function (fb) { readFrom(i, true); });
        el.setAttribute('data-b', i); els.push(el); return el;
      }),
      h('p', { class: 'rend' }, 'End of ' + ch.title + '.'));
    function lit(i) {
      els.forEach(function (e) { e.classList.remove('rdon'); });
      if (i < 0) return;
      els[i].classList.add('rdon');
      try { els[i].scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) { els[i].scrollIntoView(); }
    }
    // read block by block from block i; only = just that one block (a picture's Describe button)
    function readFrom(i, only) {
      if (!SAY.ok) return;
      var me = only ? null : playBtn;
      var wasMine = me && SAY.on && SAY.btn === me;
      sayStop(); sayNote('');
      if (wasMine) { lit(-1); rdWake(false); return; }
      var tok = SAY.tok, ss = window.speechSynthesis, started = false;
      SAY.on = true; SAY.btn = me; sayMark(me, true); rdWake(true);
      function done(end) {
        if (tok !== SAY.tok) return;
        SAY.on = false; sayMark(SAY.btn, false); SAY.btn = null; lit(-1); rdWake(false);
        if (end && !only) setPos(ch.blocks.length - 1, true);
      }
      function block(b) {
        if (tok !== SAY.tok) return;
        if (b >= ch.blocks.length || (only && b > i)) return done(true);
        if (!only) { setPos(b); cur = b; }
        var fig = els[b].querySelector('.rdesc'); if (fig && fig.hidden) { var db = els[b].querySelector('.rdbtn'); fig.hidden = false; if (db) { db.textContent = 'Hide description'; db.setAttribute('aria-expanded', 'true'); } }
        lit(b);
        var parts = saySplit(sayClean(rdSpeech(ch.blocks[b])));
        (function next(k, useVoice) {
          if (tok !== SAY.tok) return;
          if (k >= parts.length) return block(b + 1);
          var u = new window.SpeechSynthesisUtterance(parts[k]);
          u.lang = 'en-GB'; u.rate = RRATE[r.rate]; u.pitch = 1; u.volume = 1;
          if (useVoice && SAY.voice) u.voice = SAY.voice;
          u.onstart = function () { started = true; };
          u.onend = function () { if (tok === SAY.tok) next(k + 1, useVoice); };
          u.onerror = function (e) {
            if (tok !== SAY.tok) return;
            var why = e && e.error;
            if (why === 'interrupted' || why === 'canceled') return done(false);
            if (!started && useVoice && SAY.voice) return next(k, false);
            done(false); sayNote('Read aloud stopped (' + (why || 'unknown error') + '). Tap Read aloud to carry on from here.');
          };
          ss.speak(u);
          if (ss.paused) ss.resume();
        })(0, true);
      }
      try { block(i); } catch (e) { done(false); sayNote('Read aloud could not start: ' + e.message); return; }
      setTimeout(function () {
        if (tok === SAY.tok && !started) sayNote('No sound yet? On iPhone and iPad, read aloud is silent when the phone is on Silent: turn Silent off, turn the volume up and tap Read aloud again.');
      }, 2500);
    }
    // first block showing below the top bar: where "Read aloud" starts and where the place is kept
    function firstVisible() {
      var top = (app.querySelector('header.top') || { getBoundingClientRect: function () { return { bottom: 0 }; } }).getBoundingClientRect().bottom;
      for (var i = 0; i < els.length; i++) if (els[i].getBoundingClientRect().bottom > top + 8) return i;
      return els.length - 1;
    }
    // after a stop, carry on from the block that was being read if it is still on screen
    function startAt() {
      var f = firstVisible();
      if (cur != null && cur >= f && els[cur].getBoundingClientRect().top < window.innerHeight) return cur;
      return f;
    }
    playBtn = h('button', { class: 'btn primary rplay', type: 'button', 'aria-pressed': 'false', onclick: function () { readFrom(startAt()); } }, '▶ Read aloud');
    function resize(d) {
      r.size = Math.max(0, Math.min(RSIZE.length - 1, r.size + d)); save();
      text.style.setProperty('--rsize', RSIZE[r.size]);
      sizeBtns[0].disabled = r.size === 0; sizeBtns[1].disabled = r.size === RSIZE.length - 1;
    }
    sizeBtns = [h('button', { class: 'rtool', type: 'button', 'aria-label': 'Smaller text', onclick: function () { resize(-1); } }, 'A−'),
      h('button', { class: 'rtool big', type: 'button', 'aria-label': 'Larger text', onclick: function () { resize(1); } }, 'A+')];
    rateBtn = h('button', { class: 'rtool', type: 'button', 'aria-label': 'Reading speed', onclick: function () {
      r.rate = (r.rate + 1) % RRATE.length; save(); rateBtn.textContent = RRATE[r.rate] + '×';
      if (SAY.on && SAY.btn === playBtn) { readFrom(cur); readFrom(cur); } // stop, then start the same block at the new speed
    } }, RRATE[r.rate] + '×');
    var prev = h('button', { class: 'rtool', type: 'button', 'aria-label': 'Previous chapter', disabled: k === 0, onclick: function () { rdChapter(k - 1); } }, '‹');
    var nxt = h('button', { class: 'rtool', type: 'button', 'aria-label': 'Next chapter', disabled: k === chs.length - 1, onclick: function () { setPos(ch.blocks.length - 1, true); rdChapter(k + 1); } }, '›');
    var dock = h('div', { class: 'rdock' }, prev, sizeBtns[0], sizeBtns[1], SAY.ok ? playBtn : h('span', { class: 'rplay off' }, 'Read aloud not available'), rateBtn, nxt);
    if (!SAY.ok) rateBtn.hidden = true;
    show(topbar(ch.title, rdLeave(rdContents), (k + 1) + ' / ' + chs.length), text, dock);
    app.classList.add('reading');
    sizeBtns[0].disabled = r.size === 0; sizeBtns[1].disabled = r.size === RSIZE.length - 1;
    // back to where the learner left off
    var p = r.pos[ch.id];
    if (p && p.b > 0 && !p.done && els[p.b]) setTimeout(function () { var y = els[p.b].getBoundingClientRect().top + window.pageYOffset - 80; window.scrollTo(0, y); }, 60);
    // a chapter short enough to fit on one screen counts as read once opened
    setTimeout(function () { if (app.contains(text) && document.body.scrollHeight <= window.innerHeight + 40) setPos(ch.blocks.length - 1, true); }, 300);
    var tm = null;
    window.onscroll = function () {
      if (tm || SAY.on) return;
      tm = setTimeout(function () {
        tm = null; if (!app.contains(text)) return;
        var b = firstVisible(), q = r.pos[ch.id];
        if (!q || !q.done || b > 0) setPos(b, (window.innerHeight + window.pageYOffset) >= document.body.scrollHeight - 40);
      }, 400);
    };
  }
  // leaving the reader: stop scroll tracking, wake lock and the reading layout
  function rdLeave(to) { return function () { window.onscroll = null; rdWake(false); app.classList.remove('reading'); to(); }; }

  /* ---------- read the unit / read the module (engine 1.5.0) ----------
     Reader chapters that carry mod and unit (content/readerN.js) belong to one unit of one module.
     The module screen offers them under Train me: one unit chosen = "Read the unit", All units =
     "Read the module" with every unit on one scrolling page under a sticky bar (unit, "3 of 5 in
     Module Three", % read, progress line). Listen reads block by block (each bullet on its own),
     highlights and follows it, carries on unit after unit and stops at the end.
     The place is saved per chapter in S.reader.pos (the same record the chapter reader uses), from
     scrolling and from listening, so Save and Import carry it. It never feeds mastery or exam scores. */
  function rdUnitChs(m) {
    if (!RD || !RD.chapters) return [];
    return RD.chapters.filter(function (c) {
      return c.mod === m.id && c.unit >= 0 && c.unit < m.units.length && (unitFilter < 0 || c.unit === unitFilter) && c.blocks && c.blocks.length;
    }).sort(function (a, b) { return a.unit - b.unit; });
  }
  // furthest block reached; still on the first block = not started (as in the original IFE app)
  function rdUFrac(ch) {
    var p = rdState().pos[ch.id]; if (!p) return 0; if (p.done) return 1;
    var best = Math.max(p.best || 0, p.b || 0);
    return best > 0 ? Math.min(1, (best + 1) / ch.blocks.length) : 0;
  }
  function rdTileSub(m) {
    var chs = rdUnitChs(m);
    if (unitFilter >= 0) {
      var ch = chs[0], p = rdState().pos[ch.id], f = rdUFrac(ch);
      return m.units[unitFilter] + (p && p.done ? ': finished' : f > 0 ? ': ' + pct(f) + ' read, carry on' : SAY.ok ? ': read it or listen' : '');
    }
    var any = chs.some(function (c) { return rdUFrac(c) > 0; });
    return 'Every unit in turn' + (any ? ': pick up where you left off' : SAY.ok ? ': read it or listen' : '');
  }
  function rdModule(m) {
    var chs = rdUnitChs(m), one = unitFilter >= 0, back = function () { modScreen(m); }, r = rdState();
    var title = one ? 'Read the unit' : 'Read the module';
    if (!chs.length) { show(topbar(title, back), h('p', { class: 'lead' }, 'No reading notes for this unit yet.')); return; }
    r.mlast = r.mlast || {};
    var label = h('span', null, chs[0].title), count = h('small', null, '');
    var listen = SAY.ok ? btn('▶ Listen', 'primary', function () { readAloud(); }) : null;
    var prog = bar(0, 'thin rdprog'), stick = h('div', { class: 'rdstick' }, h('div', { class: 'rdnow' }, h('div', { class: 'rdwhere' }, label, count), listen), prog);
    // steps: what is highlighted and read, in page order. k = chapter on the page, b = block it saves as
    var steps = [], secs = [];
    var body = h('div', { class: 'reader rtext', lang: 'en-GB', style: '--rsize:' + RSIZE[r.size] }, chs.map(function (ch, k) {
      var hd = h('h3', { class: 'rdh' }, ch.title); steps.push({ el: hd, k: k, b: 0, t: sayEnd(ch.title) });
      var sec = h('section', { class: 'rdunit' }, hd, ch.blocks.map(function (b, i) {
        var el;
        if (Array.isArray(b)) {
          var t = b[0], v = b[1];
          if (t === 'h') el = h('h4', { class: 'rh' }, v);
          else if (t === 'ul' || t === 'ol') {
            el = h(t, { class: 'rlist' }, v.map(function (x, j) {
              var li = h('li', null, x); steps.push({ el: li, k: k, b: i, t: sayEnd((t === 'ol' ? (j + 1) + '. ' : '') + x) }); return li;
            }));
            return el;
          }
          else if (t === 'note') el = h('aside', { class: 'rnote' }, v);
          else el = h('p', null, v);
        } else el = rdFigure(b, function () { readAloud(stepOf(el)); });
        steps.push({ el: el, k: k, b: i, t: rdSpeech(b) });
        return el;
      }));
      secs.push(sec); return sec;
    }));
    function stepOf(el) { for (var i = 0; i < steps.length; i++) if (steps[i].el === el) return i; return 0; }
    var endText = one ? 'End of ' + chs[0].title + '.' : 'End of ' + m.title + ': all ' + chs.length + ' units.';
    var end = h('div', { class: 'panel rdend' }, h('p', null, h('b', null, endText)),
      h('p', { class: 'hint' }, 'Your reading place is saved for each unit. Reading and listening do not count towards your mastery or exam scores.'),
      btn('Back to module', 'primary', back));
    show(topbar(title, back), stick,
      h('p', { class: 'hint' }, (RD.note ? RD.note + ' ' : '') + (SAY.ok ? 'Tap Listen to hear it; it starts from the top of what is on screen.' : '')),
      body, end);

    var top = app.querySelector('header.top'), raf = 0, saveT = 0, recording = false;
    function place() { stick.style.top = (top ? top.offsetHeight : 0) + 'px'; }
    function flush() { if (saveT) { clearTimeout(saveT); saveT = 0; save(); } }
    // remember block b of chapter k as the place to come back to
    function mark(k, b) {
      if (!recording) return;
      var ch = chs[k], n = ch.blocks.length, p = r.pos[ch.id] = r.pos[ch.id] || { b: 0 };
      p.b = b; p.best = Math.max(p.best || 0, b); if (b >= n - 1) p.done = true;
      r.mlast[m.id] = ch.id;
      if (saveT) clearTimeout(saveT);
      saveT = setTimeout(function () { saveT = 0; save(); }, 800);
    }
    function edge() { return stick.getBoundingClientRect().bottom + 8; }
    function track() {
      raf = 0;
      var e = edge(), k = 0;
      for (var i = 0; i < secs.length; i++) if (secs[i].getBoundingClientRect().top <= e) k = i;
      var max = document.documentElement.scrollHeight - window.innerHeight, atEnd = max > 0 && window.pageYOffset >= max - 4;
      if (!SAY.on) { // while listening, the voice sets the place
        if (atEnd) mark(chs.length - 1, chs[chs.length - 1].blocks.length - 1);
        else for (var j = 0; j < steps.length; j++) if (steps[j].k === k && steps[j].el.getBoundingClientRect().bottom > e) { mark(k, steps[j].b); break; }
      }
      var ch = chs[k], p = r.pos[ch.id], f = rdUFrac(ch), sep = chs.length > 1 ? ' · ' : '';
      label.textContent = ch.title;
      count.textContent = (chs.length > 1 ? (k + 1) + ' of ' + chs.length + ' in ' + m.title : '') +
        (p && p.done ? sep + 'finished' : f > 0 ? sep + pct(f) + ' read' : '');
      prog.firstChild.style.width = (max > 0 ? Math.min(100, Math.round(window.pageYOffset / max * 100)) : 100) + '%';
    }
    // scroll so block b of chapter k sits just under the sticky bars
    function goTo(k, b) {
      var el = secs[k];
      if (b > 0) for (var i = 0; i < steps.length; i++) if (steps[i].k === k && steps[i].b === b) { el = steps[i].el; break; }
      var bars = (top ? top.getBoundingClientRect().height : 0) + stick.getBoundingClientRect().height;
      window.scrollTo(0, Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - bars - 10));
    }
    function resumeAt(ch) { var p = r.pos[ch.id]; return !p || p.done ? 0 : Math.min(p.b || 0, ch.blocks.length - 1); }
    function closeBox() { var bg = document.querySelector('.rdmodal'); if (bg) bg.remove(); }
    function begin(k, b) { closeBox(); goTo(k, b); recording = true; track(); }
    // the dialogue: resume or start again (one unit), or which unit to resume (all units)
    function askResume() {
      var rows, msg, anySaved = chs.some(function (c) { return rdUFrac(c) > 0; });
      if (!anySaved) return begin(0, 0);
      if (one) {
        var ch = chs[0], b = resumeAt(ch);
        if (b === 0) return begin(0, 0);
        var st = steps.filter(function (x) { return x.k === 0 && x.b === b; })[0];
        var wl = (st ? st.el.textContent : '').trim().split(/\s+/), words = wl.length > 10 ? wl.slice(0, 9).join(' ').replace(/[,;:.]$/, '') + '…' : wl.join(' ');
        msg = h('p', null, 'You stopped ' + pct(rdUFrac(ch)) + ' of the way through, at: “' + words + '”');
        rows = [btn('Resume where I left off', 'primary', function () { begin(0, b); }), btn('Start from the beginning', '', function () { begin(0, 0); })];
      } else {
        var lastId = r.mlast[m.id];
        msg = h('p', null, 'Which unit would you like to resume?');
        rows = chs.map(function (c, k) {
          var p = r.pos[c.id], f = rdUFrac(c), st = !f ? 'Not started' : p.done ? 'Finished: starts again from the top' : pct(f) + ' read: resumes where you stopped';
          return h('button', { class: 'rdpick' + (lastId === c.id ? ' last' : ''), type: 'button', onclick: function () { begin(k, resumeAt(c)); } },
            h('strong', null, c.title), h('small', null, st + (lastId === c.id ? ' · last read' : '')));
        }).concat([btn('Start from the beginning of the module', '', function () { begin(0, 0); })]);
      }
      var box = h('div', { class: 'rdbox', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Resume reading' }, h('h3', null, one ? 'Carry on reading?' : 'Pick up where you left off'), msg, rows);
      // on the page body, not inside #app: on laptops #app is a frosted (backdrop-filter) panel, which would
      // make a fixed dialogue centre on the whole page height instead of the window
      document.body.appendChild(h('div', { class: 'rdmodal' }, box));
    }
    window.onscroll = function () { if (!raf) raf = requestAnimationFrame(track); };
    window.onresize = function () { place(); if (!raf) raf = requestAnimationFrame(track); };
    window.addEventListener('pagehide', flush);
    LEAVE = function () {
      window.onresize = null; if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('pagehide', flush); flush(); closeBox(); rdWake(false);
    };
    place(); track(); askResume();

    // read aloud from step `from` (a picture's Describe button), or from the top of what is on screen
    function readAloud(from) {
      if (!SAY.ok) return;
      var only = from != null, wasMine = !only && SAY.on && SAY.btn === listen;
      sayStop(); sayNote(''); lit(-1);
      if (wasMine) { rdWake(false); return; } // second tap stops
      var start = from || 0;
      if (!only && window.pageYOffset > 10) { var e = edge() - 4; for (var i = 0; i < steps.length; i++) if (steps[i].el.getBoundingClientRect().bottom > e) { start = i; break; } }
      var tok = SAY.tok, started = false, ss = window.speechSynthesis;
      SAY.on = true; SAY.btn = only ? null : listen; sayMark(SAY.btn, true); rdWake(true);
      function done(finished) {
        flush();
        if (tok !== SAY.tok) return;
        lit(-1); SAY.on = false; sayMark(SAY.btn, false); SAY.btn = null; rdWake(false);
        if (finished && !only) sayNote(one ? 'Finished: that is the whole of ' + chs[0].title + '.' : 'Finished: you have heard all ' + chs.length + ' units of ' + m.title + '.');
      }
      function step(i, useVoice) {
        if (tok !== SAY.tok) return;
        if (i >= steps.length || (only && i > start)) return done(true);
        var s = steps[i];
        if (!only) { recording = true; mark(s.k, s.b); }
        var fig = s.el.querySelector && s.el.querySelector('.rdesc');
        if (fig && fig.hidden) { var db = s.el.querySelector('.rdbtn'); fig.hidden = false; if (db) { db.textContent = 'Hide description'; db.setAttribute('aria-expanded', 'true'); } }
        lit(i);
        var rc = s.el.getBoundingClientRect();
        if (rc.top < edge() || rc.bottom > window.innerHeight - 20) { try { s.el.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (x) { s.el.scrollIntoView(); } }
        sent(i, saySplit(sayClean(s.t)), 0, useVoice);
      }
      function sent(i, parts, j, useVoice) {
        if (tok !== SAY.tok) return;
        if (j >= parts.length) return step(i + 1, useVoice);
        var u = new window.SpeechSynthesisUtterance(parts[j]);
        u.lang = 'en-GB'; u.rate = RRATE[r.rate]; u.pitch = 1; u.volume = 1;
        if (useVoice && SAY.voice) u.voice = SAY.voice;
        u.onstart = function () { started = true; };
        u.onend = function () { if (tok === SAY.tok) sent(i, parts, j + 1, useVoice); };
        u.onerror = function (ev) {
          if (tok !== SAY.tok) return;
          var why = ev && ev.error;
          if (why === 'interrupted' || why === 'canceled') return done(false);
          if (!started && useVoice && SAY.voice) return sent(i, parts, j, false); // chosen voice failed: device default
          done(false); sayNote('Read aloud stopped (' + (why || 'unknown error') + '). Tap Listen to carry on from here.');
        };
        ss.speak(u);
        if (ss.paused) ss.resume();
      }
      try { step(start, true); } catch (x) { done(false); sayNote('Read aloud could not start: ' + x.message); return; }
      setTimeout(function () {
        if (tok === SAY.tok && !started) sayNote('No sound yet? On iPhone and iPad, read aloud is silent when the phone is on Silent: turn Silent off, turn the volume up and tap Listen again.');
      }, 2500);
    }
    function lit(i) {
      var on = body.querySelector('.rdon'); if (on) on.classList.remove('rdon');
      if (i >= 0) steps[i].el.classList.add('rdon');
    }
  }

  /* ---------- start ---------- */
  if ('serviceWorker' in navigator && /^https?:/.test(location.protocol)) {
    // A new course or engine version means a new sw.js address, so every browser installs the update.
    var hadWorker = !!navigator.serviceWorker.controller, reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      // the new version has taken over: reload once so the screen shows it (not on first install)
      if (hadWorker && !reloaded) { reloaded = true; location.reload(); }
    });
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js?v=' + encodeURIComponent(CFG.version + '-' + window.ENGINE_VERSION), { updateViaCache: 'none' }).catch(function () {});
    });
  }
  if (MODS.length) cover(); else show(h('p', { class: 'lead' }, 'No module content found.'));
})();
