/* Offline cache, shared by every course. Loaded by each course's sw.js after course.js and version.js.
   The cache name changes when the course version or the engine version changes, so phones fetch the new files. */
var C = self.COURSE;
// prefix 'xrf-' keeps these apart from other apps on the same github.io address (e.g. the old IFE app's 'ife3-v0.10.2')
var PREFIX = 'xrf-' + C.id + '-';
var CACHE = PREFIX + 'v' + C.version + '-e' + self.ENGINE_VERSION;
// reader chapters (engine 1.1.0): load them here too, so every picture they use is cached for offline reading
var READER = (C.reader || []).map(function (r) { return 'content/' + r + '.js'; });
if (READER.length) importScripts.apply(self, READER);
var RFILES = [];
(self.COURSE_READER && self.COURSE_READER.chapters || []).forEach(function (ch) {
  (ch.blocks || []).forEach(function (b) { if (b && b.src && RFILES.indexOf(b.src) < 0) RFILES.push(b.src); });
});
var FILES = ['./', 'index.html', 'course.js', 'manifest.webmanifest', 'brand/icon-180.png', 'brand/icon-192.png', 'brand/icon-512.png',
  '../../engine/version.js', '../../engine/loader.js', '../../engine/app.js', '../../engine/styles.css']
  .concat((C.modules || []).map(function (m) { return 'content/' + m + '.js'; }))
  .concat(C.revision ? ['content/revision.js'] : [])
  .concat(C.why ? ['content/why.js'] : [])
  .concat(C.filter ? ['content/filter.js'] : [])
  .concat(READER).concat(RFILES)
  .concat(C.brand && C.brand.logo ? [C.brand.logo] : [])
  .concat(C.brand && C.brand.bg ? [C.brand.bg] : []);

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  // only clear this course's old caches: other courses on the same site keep theirs
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE && k.indexOf(PREFIX) === 0; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  var path = new URL(e.request.url).pathname;
  // The page and the two version files come from the network when online (cache when offline),
  // so the page always sees the newest version numbers and registers the matching sw.js?v=...
  if (e.request.mode === 'navigate' || /\/course\.js$|\/engine\/version\.js$/.test(path)) {
    var req = e.request.mode === 'navigate' ? e.request : new Request(e.request.url, { cache: 'no-cache' });
    e.respondWith(fetch(req).then(function (r) {
      if (r.ok) { var copy = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); }); }
      return r;
    }).catch(function () {
      return caches.open(CACHE).then(function (c) { return c.match(e.request, { ignoreSearch: true }); });
    }));
    return;
  }
  // everything else: look only in this course's cache: other courses cache the same engine files at other versions.
  // A miss is fetched and stored, so offline use recovers if another app on this address cleared the cache.
  e.respondWith(caches.open(CACHE).then(function (c) {
    return c.match(e.request, { ignoreSearch: true }).then(function (hit) {
      return hit || fetch(e.request).then(function (r) { if (r.ok) c.put(e.request, r.clone()); return r; });
    });
  }));
});
