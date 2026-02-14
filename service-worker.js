const CACHE_NAME = 'finance-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Установка
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Получение ресурсов
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});