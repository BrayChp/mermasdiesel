const CACHE_NAME = 'merma-diesel-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/images/LOGO.png',
  '/assets/images/mina-cisterna.png',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png'
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