/* Course loader. Runs after course.js and version.js.
   Sets the page name and colours from course.js, then loads the content files and the app in order.
   The content list lives only in course.js (sw-core.js reads the same list for offline use). */
(function () {
  'use strict';
  var C = self.COURSE;
  if (!C) { document.getElementById('app').textContent = 'No course.js found.'; return; }
  var here = document.currentScript.src, engine = here.slice(0, here.lastIndexOf('/') + 1);

  // page name and theme colour
  document.title = C.name;
  function meta(n, v) { var m = document.querySelector('meta[name="' + n + '"]'); if (m) m.setAttribute('content', v); }
  meta('apple-mobile-web-app-title', C.shortName || C.name);
  if (C.theme && C.theme.themeColor) meta('theme-color', C.theme.themeColor);

  // colours: theme keys become CSS variables. The background picture is made absolute so the CSS finds it.
  var css = '', th = C.theme || {};
  function vars(o) { var s = '', k; for (k in o || {}) s += '--' + k + ':' + o[k] + ';'; return s; }
  var bg = C.brand && C.brand.bg ? '--bgimg:url("' + new URL(C.brand.bg, location.href).href + '");' : '';
  css += ':root{' + vars(th.light) + bg + '}';
  if (th.dark) css += '@media (prefers-color-scheme: dark){:root{' + vars(th.dark) + '}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // content files then the app, run in this order
  var files = (C.modules || []).map(function (m) { return 'content/' + m + '.js'; });
  if (C.revision) files.push('content/revision.js');
  (C.reader || []).forEach(function (r) { files.push('content/' + r + '.js'); }); // reader chapters (engine 1.1.0)
  files.push(engine + 'app.js');
  files.forEach(function (f) { var s = document.createElement('script'); s.src = f; s.async = false; document.body.appendChild(s); });
})();
