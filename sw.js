const CACHE_VERSION = 'v1-rupesh';
const ASSETS_TO_CACHE = ['/', '/assets/css/modern-dark.css'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.addAll(ASSETS_TO_CACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_VERSION).map(name => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).then(response => {
      if (!response || response.status !== 200 || response.type === 'error') return response;
      const responseToCache = response.clone();
      caches.open(CACHE_VERSION).then(cache => cache.put(event.request, responseToCache));
      return response;
    }).catch(() => caches.match(event.request))
  );
});
