const CACHE_NAME = 'studystream-web-v1';
const ASSETS = [
  'index.html',
  'intro.html',
  'login.html',
  'welcome.html',
  'style.css',
  'manifest.json',
  'icon.png',
  'images/home-bg.jpg',
  'images/intro-character.jpg'
];

// Install and Cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch from Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
