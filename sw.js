const CACHE_NAME = 'studystream-v1';
const ASSETS = [
  'index.html',
  'style.css',
  'manifest.json',
  'icon.png'
];

// Install the service worker and cache basic files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch files from cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});