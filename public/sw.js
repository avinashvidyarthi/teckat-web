const dynamicContentNames = 'dynamic-contents-v1-beta-4';

const staticContentNames = 'static-contents-v1-beta-4';
const staticStyleNames = 'static-styles-v1-beta-4';
const staticScriptNames = 'static-scripts-v1-beta-4';
const staticImageNames = 'static-images-v1-beta-4';

const libStyleNames = 'lib-styles-v1-beta-4';
const libScriptNames = 'lib-scripts-v1-beta-4';
const libGoogleFontNames = 'lib-google-fonts-v1-beta-4';
const libFontAwesomeFontNames = 'lib-fontawesome-fonts-v1-beta-4';

// assets
const staticContentAssets = [
  '/',
  '/fallback',
  '/about',
  '/contact',
  '/team',
  '/services',
];

const staticStyleAssets = [
  '/css/styles.min.css',
  '/css/bootstrap/bootstrap.min.css',
];

const staticScriptAssets = [
  '/js/script.min.js',
  '/js/app.min.js',
  'js/proper/popper.min.js',
  '/js/bootstrap/bootstrap.min.js',
];

const staticImageAssets = ['/favicon.ico', '/images/home/welcome.webp'];

const libStyleAssets = [
  'https://fonts.googleapis.com/css?family=Roboto|Spectral|Timmana',
  'https://use.fontawesome.com/releases/v5.6.1/css/all.css',
];

const libScriptAssets = [];

const libGoogleFontAssets = [
  'https://fonts.gstatic.com/s/timmana/v3/6xKvdShfL9yK-rvpOmzRKQ.woff2',
  'https://fonts.gstatic.com/s/spectral/v5/rnCr-xNNww_2s0amA9M5kng.woff2',
  'https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxK.woff2',
];

const libFontAwesomeFontAssets = [
  'https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-solid-900.woff2',
  // 'https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-regular-400.woff20',
  'https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-brands-400.woff2',
];

// install event
self.addEventListener('install', (evt) => {
  console.log('service worker installed');
  // staticContentNames
  evt.waitUntil(
    caches.open(staticContentNames).then((cache) => {
      console.log('caching static staticContentNames');
      cache.addAll(staticContentAssets);
    })
  );

  // staticStyleNames
  evt.waitUntil(
    caches.open(staticStyleNames).then((cache) => {
      console.log('caching static staticStyleNames');
      cache.addAll(staticStyleAssets);
    })
  );

  // staticScriptNames
  evt.waitUntil(
    caches.open(staticScriptNames).then((cache) => {
      console.log('caching static staticScriptNames');
      cache.addAll(staticScriptAssets);
    })
  );

  // staticImageNames
  evt.waitUntil(
    caches.open(staticImageNames).then((cache) => {
      console.log('caching static staticImageNames');
      cache.addAll(staticImageAssets);
    })
  );

  // libStyleNames
  evt.waitUntil(
    caches.open(libStyleNames).then((cache) => {
      console.log('caching static libStyleNames');
      cache.addAll(libStyleAssets);
    })
  );

  // libScriptNames
  evt.waitUntil(
    caches.open(libScriptNames).then((cache) => {
      console.log('caching static libScriptNames');
      cache.addAll(libScriptAssets);
    })
  );

  // libFontAwesomeFontNames
  // TODO: solve this not caching all url
  evt.waitUntil(
    caches.open(libFontAwesomeFontNames).then((cache) => {
      console.log('caching static libFontAwesomeFontNames');
      cache.addAll(libFontAwesomeFontAssets);
    })
  );

  // libGoogleFontNames
  evt.waitUntil(
    caches.open(libGoogleFontNames).then((cache) => {
      console.log('caching static libGoogleFontNames');
      cache.addAll(libGoogleFontAssets);
    })
  );
});

// activate event
self.addEventListener('activate', (evt) => {
  console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then((keys) => {
      //console.log(keys);
      return Promise.all(
        keys
          .filter(
            (key) =>
              key !== staticContentNames &&
              key !== staticStyleNames &&
              key !== staticScriptNames &&
              key !== staticImageNames &&
              key !== libStyleNames &&
              key !== libScriptNames &&
              key !== libGoogleFontNames &&
              key !== libFontAwesomeFontNames &&
              key !== dynamicContentNames
          )
          .map((key) => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', (evt) => {
  // console.log('fetch event', evt);
  evt.respondWith(
    caches
      .match(evt.request)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(evt.request).then((fetchRes) => {
            return caches.open(dynamicContentNames).then((cache) => {
              cache.put(evt.request.url, fetchRes.clone());
              // check cached items size
              limitCacheSize(dynamicContentNames, 15);
              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        // if (evt.request.url.indexOf('.html') > -1) {
        return caches.match('/fallback');
        // }
      })
  );
});

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// console.log(`i am from sw.js`);
