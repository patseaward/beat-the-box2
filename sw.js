const CACHE_NAME = 'btb-cache-v1';
const ASSETS = ['/', '/index.html', '/manifest.json', '/icon-192.png', '/icon-512.png', '/icon-256-maskable.png', '/apple-touch-icon.png'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)).then(self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k!==CACHE_NAME && caches.delete(k)))).then(self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    if (url.pathname === '/' || url.pathname.endsWith('/index.html')) {
      e.respondWith(fetch(e.request).catch(() => caches.match('/index.html')));
      return;
    }
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
  }
});