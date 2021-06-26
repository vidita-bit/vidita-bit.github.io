'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8bd17c89886aa3ea42f17d2264dad9fc",
"assets/AssetManifest.json": "05758cb367dc2b21545c2cd122c0b438",
"assets/assets/images/objective.png": "37debe75c627ce8cd746ef7e2660e21b",
"assets/assets/images/mine.jpg": "3845b552cdcd03d15e6507982bafe645",
"assets/assets/images/skills.jpg": "4710c4d0245d6a6ccf99a8b2a74e53ea",
"assets/assets/images/experience/attaboy.jpg": "eaead3e55ab04e1d07e0084507fedb85",
"assets/assets/images/experience/dgtlmart.png": "4c3ee8f98801a5e13e74f9b7b38bc3ab",
"assets/assets/images/experience/attaboy.png": "df60fda3f48638f414a9aafbcd8ce515",
"assets/assets/images/experience/iPixelate.png": "65d7d0c6eec70f926b9eac56f810d53e",
"assets/assets/images/projects.png": "6d5e590e71386de966232be0e54a21ce",
"assets/assets/images/linkedin.png": "875240de52813b1e338c42fda7bb8aee",
"assets/assets/images/twitter.png": "1e7ca7c19a86c40157afd215961ca77b",
"assets/assets/images/status.png": "47f2b1d2170ee20ea96347e9c0b17973",
"assets/assets/images/experience.png": "6ba30bc372d44b30bf161e76b8c4f16f",
"assets/assets/images/github.png": "1fbf1eeb622038a1ea2e62036d33788a",
"assets/assets/images/skills/postgresql.jpg": "94e59e6411535d5cb2c92cf41ddcc83f",
"assets/assets/images/skills/linux.png": "99421018e1b499f5078c8f1a3586d67c",
"assets/assets/images/skills/filmora.png": "c99a953335b6ed621468309e302fbcf0",
"assets/assets/images/skills/database.png": "aba5eab4c141d31a4bc8fd713c6882d0",
"assets/assets/images/skills/figma.png": "c7d3a3f19c2890780654f15d5dcddfcd",
"assets/assets/images/skills/firestore.jpg": "604005fc0f416146a6c1a074ab1f88e5",
"assets/assets/images/skills/restapi.png": "8cce0d7a79aae03228884b5254b0e35a",
"assets/assets/images/skills/postgresql.png": "8e0e3b78baef143611c5387f6fc41bc7",
"assets/assets/images/skills/websocket.png": "5938feb7b437ca5f743723d8a66f5dfe",
"assets/assets/images/skills/proteus.png": "b68d069da319d14a9a6d35477b6a9e0a",
"assets/assets/images/skills/database.jpg": "4034fed60b23abbf2168285e98623a21",
"assets/assets/images/skills/flutter.png": "6e09bc66895689cc368e11fa88503004",
"assets/assets/images/skills/php.png": "90b5a74b2825fc210ddf0aabbcea53e0",
"assets/assets/images/skills/lucidchart.png": "7a682556af51c9e9e16532ff7d91ac27",
"assets/assets/images/skills/eagle.png": "5c3371730b02234b4f5f0d807b615e1b",
"assets/assets/images/skills/eagle.jpg": "efe1ea5fe7eb666486e3d5935e8fe00e",
"assets/assets/images/skills/canva.png": "85610b142c04d37b8ebad31f349ae660",
"assets/assets/images/skills/rails.png": "20454487ecf87598610e756116c03eb2",
"assets/assets/images/skills/laravel.png": "a7c2da9ab728b7bc17d6fb8f72db0d03",
"assets/assets/images/skills/html.png": "031de673d24bbb48bf774d7d8a0db461",
"assets/assets/images/skills/git.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/images/projects/modern_1.png": "c5313ca8442ea397d85d2f3446d81dbb",
"assets/assets/images/projects/modern_5.png": "87d813806a07e9b4e61b7837958b2acd",
"assets/assets/images/projects/modern_2.png": "885194a011eba589cb140d786b681a13",
"assets/assets/images/projects/modern_3.png": "d4f9ba2b76f4977721b162216a8775b7",
"assets/assets/images/projects/tree_3.png": "87d9cd2ce676035a0681d727ad7416d4",
"assets/assets/images/projects/tree_4.png": "760f2c628fa4ce91383db574807cbf39",
"assets/assets/images/projects/tpanel_3.png": "0719e92997d79b1f75ce08e78e62f842",
"assets/assets/images/projects/modern_4.png": "431433b23caad2aadb793111a43a2015",
"assets/assets/images/projects/tpanel_2.png": "c0c1c84ad51f85d212addaa22a149400",
"assets/assets/images/projects/tree_1.png": "ec375248411ae7f61dc262936ce317e9",
"assets/assets/images/projects/tpanel_1.png": "9ed95a67d81496c53211071457b4b9a8",
"assets/assets/images/projects/tree_2.png": "b1ccbdb730dac20820b66e530c6384a1",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "53ac079f0294109d531a6feadf55b9f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "b020075bf7103d0ce671dd49f52f25cf",
"manifest.json": "8d19bbccfe385d70e1af5cea8d4d2457",
"index.html": "cfc6986bb32a63fd465f07682e1068a3",
"/": "cfc6986bb32a63fd465f07682e1068a3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
