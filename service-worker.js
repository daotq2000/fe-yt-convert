const CACHE_NAME = 'site-cache-v1';

const FILES_TO_CACHE = [
  '/', // Root index.html
// '/index.html',
// '/download-youtube-video.html',
// '/download-tiktok-video.html',
// '/download-facebook-video.html',
  '/css/animate.css',
  '/css/bootstrap.min.css',
  '/css/font-awesome.css',
  '/css/main.css',
  '/css/responsive.css',
  '/css/shortcodes.css',
  '/css/style.css',
  '/js/bootstrap.min.js',
  '/js/common.js',
  '/js/jquery-3.7.1.min.js',
  '/js/jquery.easing.js',
  '/js/jquery-migrate-3.4.1.min.js',
  '/js/jquery-validate.js',
  '/js/jquery-waypoints.js',
  '/js/main.js',
//   '/fonts/Flaticon.woff2',
//   '/fonts/fontawesome-webfont.woff2',
//   '/fonts/themify.woff',
//   '/images/bg-image/row-bgimage-1.jpg',
//   '/images/bg-image/row-bgimage-2.jpg',
//   '/images/facebook.svg',
//   '/images/footer-logo.png',
//   '/images/logo.png',
//   '/images/vector_page/quick-services-bg.png',
//   '/images/vector_page/ser_bg_shape1.png',
//   '/images/vector_page/ser_bg_shape2.png',
//   '/images/vector_page/vectorpage-banner-01.jpg',
//   '/images/vector_page/vector-row-bg.png',
  '/icon.png',
  '/icon.svg',
  '/ads.txt',
  '/CNAME',
  '/robots.txt',
  '/sitemap.xml',
];

// Install event: Cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching files...');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Fetch event: Serve cached files or fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
