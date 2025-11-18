'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "58bea3b86e9ad5a354e9aeed21a38fa2",
"index.html": "39b094d687f7972e7f425910637a6075",
"/": "39b094d687f7972e7f425910637a6075",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "4e1a8bda1cac318f8dab8aa92c55d928",
"assets/assets/images/%25EA%25B0%2581%25EC%259E%2590%25EC%259D%2598%25EB%2594%2594%25EB%258D%25B0%25EC%259D%25B46.png": "983d1eb63e8e52f9065cfc0b26746ded",
"assets/assets/images/%25EA%25B0%2581%25EC%259E%2590%25EC%259D%2598%25EB%2594%2594%25EB%258D%25B0%25EC%259D%25B44.png": "3bf79b74ae1ed19d5cd39097f7a42771",
"assets/assets/images/%25EA%25B0%2581%25EC%259E%2590%25EC%259D%2598%25EB%2594%2594%25EB%258D%25B0%25EC%259D%25B42.png": "cca88fa63225c27cd36efaa34badb86d",
"assets/assets/images/%25EB%25B0%2594%25EB%25B0%2594%25EB%25A6%25AC%25EC%2595%2588%25EC%2598%2581%25EC%2595%25A05.png": "12bf7985ea46e12a46bf854a9675caaf",
"assets/assets/images/%25EB%25B0%2594%25EB%25B0%2594%25EB%25A6%25AC%25EC%2595%2588%25EC%2598%2581%25EC%2595%25A08.png": "9f6bfff7735b8f9032135623a406bd31",
"assets/assets/images/%25EA%25B0%2581%25EC%259E%2590%25EC%259D%2598%25EB%2594%2594%25EB%258D%25B0%25EC%259D%25B45.png": "cc930a7c9cf872c1df61ab228c87779c",
"assets/assets/images/%25EB%25B0%2594%25EB%25B0%2594%25EB%25A6%25AC%25EC%2595%2588%25EC%2598%2581%25EC%2595%25A01.png": "a05ac604f583d0242c530a2fe502e77a",
"assets/assets/images/%25EA%25B0%2581%25EC%259E%2590%25EC%259D%2598%25EB%2594%2594%25EB%258D%25B0%25EC%259D%25B43.png": "9837087568d8668129b1a975dbda29ac",
"assets/assets/images/%25EB%25B0%2594%25EB%25B0%2594%25EB%25A6%25AC%25EC%2595%2588%25EC%2598%2581%25EC%2595%25A07.png": "4041fe8d04e1505618d0fe1cdc7be4d2",
"assets/assets/images/%25EB%25B0%2594%25EB%25B0%2594%25EB%25A6%25AC%25EC%2595%2588%25EC%2598%2581%25EC%2595%25A06.png": "a6d85263d76ac9f0eccae54995a41b0f",
"assets/assets/images/%25EB%25B0%2594%25EB%25B0%2594%25EB%25A6%25AC%25EC%2595%2588%25EC%2598%2581%25EC%2595%25A04.png": "c3b34d2d53d7acbc6bdc61ecd14cbab7",
"assets/assets/images/%25EB%25B0%2594%25EB%25B0%2594%25EB%25A6%25AC%25EC%2595%2588%25EC%2598%2581%25EC%2595%25A03.png": "32443b02d4eb744da2a0dbbd5a073d31",
"assets/assets/images/%25EB%25B0%2594%25EB%25B0%2594%25EB%25A6%25AC%25EC%2595%2588%25EC%2598%2581%25EC%2595%25A02.png": "17005b003e29591e3a437b502f70bc4f",
"assets/assets/images/%25EA%25B0%2581%25EC%259E%2590%25EC%259D%2598%25EB%2594%2594%25EB%258D%25B0%25EC%259D%25B41.png": "84c42f583102b07b1af910ea052fe5e1",
"assets/assets/images/%25EA%25B0%2581%25EC%259E%2590%25EC%259D%2598%25EB%2594%2594%25EB%258D%25B0%25EC%259D%25B47.png": "813ab744307f326bf31b7b874321db82",
"assets/fonts/MaterialIcons-Regular.otf": "2c22b386fd3365a289251c0eeee4efaf",
"assets/NOTICES": "0a85a3fbd2bc99f296b82e2f4d8c73a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "b637bfc7be16cc1c94d13bd8079a778c",
"assets/AssetManifest.json": "62247d461a108e2b8213648f70c13cd7",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "dbb839c1e7da90d11be9dabe670763ee",
"version.json": "a8b9aff5d63fcdb7a5d60ecb5b69f958",
"main.dart.js": "00bbfa602f2d3345958a3949c28fb410"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
