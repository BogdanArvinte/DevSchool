const cacheName = 'pwa-cache';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/css/style.css',
  '/assets/images/world.png'
];

self.addEventListener('install', event => {
  console.info('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.info('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', event => {
  console.info('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== cacheName) {
          console.info('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  )
});

self.addEventListener('fetch', event => {
  console.info('[ServiceWorker] Fetch', event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});