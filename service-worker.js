self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('mermas-cache').then(cache => {
      return cache.addAll([
        '/',
        'index.html',
        'LOGO.png',
        'mina-cisterna.png',
        'logo-icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
