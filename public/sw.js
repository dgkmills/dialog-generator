// Define a name for the cache
const CACHE_NAME = 'dialogue-generator-cache-v3';
// List the files to be cached for offline use
const urlsToCache = [
  '/',
  '/index.html',
  '/QRDGTool.jpeg' // Caching your QR code image
];

// Install event: fires when the service worker is first installed
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching files');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: fires for every network request made by the page
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // If the request is in the cache, return the cached version
        if (response) {
          return response;
        }
        // Otherwise, fetch the request from the network
        return fetch(event.request);
      })
  );
});

