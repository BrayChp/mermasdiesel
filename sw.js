const CACHE_NAME = 'merma-diesel-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/LOGO.png',
  '/mina-cisterna.png',
  '/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});