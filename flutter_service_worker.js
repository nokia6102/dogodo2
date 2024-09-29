'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6a9009e7f113d8d8b5805d90156e4a72",
"version.json": "15235b5108d6a877ef74fe3317a96bf7",
"index.html": "30ada4a40f501ddaff5f812bd2906425",
"/": "30ada4a40f501ddaff5f812bd2906425",
"main.dart.js": "8fe7309dc46be6c7cdf4c30bf5f2c7af",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd091ea5bc8f3ccc10f74bd67179fb6a",
".git/config": "aebf33c1268c4b4b989a7097367c93a5",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/6e05d920a317eedee81106a00b45747fc61de9": "8037ca10b208707e2d0808bf6972828f",
".git/objects/33/38f10d6a27b2672f8dc6fd04d8a70d8ee61bf2": "d5acab8e81ae6a54127751d4c55018ad",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a5/145e1a31968e521e5e97e0650a7f3ad6d52697": "d1ec8bd13de8d66bd524c9fbda657523",
".git/objects/a5/bef065a6fc8dbb2ac9042755e7a98c8372d8dc": "0212262cb203a9420b4cda0e38d1badd",
".git/objects/bd/86cdc86b6f78771cba10eb96a6edd934cdf6e7": "fac1b3981b99a92b0a9bef71577e380c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/dab8c719ec25240304fbf30f3f755edc43dd32": "2f4518b6883039364c770cc95f08f3b7",
".git/objects/ca/bc7eb3badfb86071356374979b904d8914cefa": "e08b5a83121013c9d02ce94ee23d29b0",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/f62aa9d109884b789d55263b31e32d688a7730": "e68b60e8ac8b8aa72e72f3c45fb8a53f",
".git/objects/e4/b89648137930d9fa9ed2559fce994df7163291": "b85dc8f9eac70e869a5728ae150f3253",
".git/objects/fe/cec027231f9656bdb548dbaca82b237b26084e": "7eeea95aa3aaa26f555ce7434a162dc3",
".git/objects/ec/a503a099a40c17e6d4b01049b52d45b55c3071": "f6d238038b75b2a85d659e3a7ddbde09",
".git/objects/27/cc5fb714043b30f94b399664d141da4206813f": "41862b2d654833a79554c5d046de5164",
".git/objects/4b/97e705d57233f9c41ac7bd302039ff1054e81f": "99a8d3fcde326e264d97ad48a322bb71",
".git/objects/11/f854ff00741b681ddf8e6270a30f76bcfed749": "5fb71210acc872943a4b3a48780a7a11",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/0fd0718f7e49306ac030afb570fd81e29b59fd": "c4985cc6b150c811ddf5ffa1e1644c13",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/cb25a2a7ad2042220bf2b8f332b5a0a6eabbf1": "349eb27f2b324db244c056a6a6e5cbca",
".git/objects/17/9919b13f1565a76bc805e602003084b9b1a99a": "be6a6b411d6a257a9a112683d1537927",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/10f387369cc893af8713da37905b80c5e370c2": "87eb9b4ff88a22ff96ffb3a5694359b3",
".git/objects/4c/12587285ff90665667765d6cae349197747263": "3684b9db6878fe27fb3d8829e567b416",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/43/d08f619e6da9384b4b2057c191ed76b5d24187": "938a58750b17856f1d1b3c09b9dc0367",
".git/objects/43/22eb7c988fe8a37c2584ca62df5514de6bc490": "560cace7a4ca00a1b949fe250b52d04d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/c2abeee37d9b43e39f307734457f75aa8066e6": "c039b05944005454756436d35341654a",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/ac62153a88317157dac1947fbfa7b616c5d21e": "7a88004ecb23e5652527c9228a402689",
".git/objects/08/39254fe4223d695a0946e4bf1f4e8d533b18b5": "88f887fbb58e890b2b5ffc5992e37402",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6c/acee3e7e8cb5ce6424b7b51e5701de6a80be49": "1fb2514dfdfcb147a4423033508f459e",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/5796fe47ccb658b0a4ce9e1e548504aad2c208": "d359fe4a965b9b33abb746f24c334ee3",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/42b6b35ce186352cadb478eab982a76cf3b976": "04c8e061629abc0371d5c84c20a9d987",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/2592d93c7d9fd2f978ad6b07a0fd13ed6ff7c2": "4373c003774930b82c50618cdba042a4",
".git/objects/f1/0e67bac5266545527574d732e170a82bc3c210": "2a1ec6891829edbf9198a1cdc621ace4",
".git/objects/f8/06fbbced177bd3379105a074c56f7e0ad55736": "8bc6153cb7f87c475739270bb53a0f60",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/c61f5e5d028b1d31238e702ec655654e33ed42": "d8015e20dddb0f6a04e2d72def4f9498",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/53cfdf8869e0bdbcab346543e1d4bb83947dcf": "1be36eb7bc07dc489fe126634f0ad4d4",
".git/objects/85/0d31a88b8d411a2ab37fdcb6c41491c41bfc01": "9c56b9010bd32e4860102f1bc5ffb873",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/82/28cb763439c474c96f9f127cf4d924ff925cb2": "2b0fbdd919749f24bc1992b6937cef8a",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2e/156f49536f39e785e6bf753f36695d9d5179dc": "c626117240118e8efd2d1f6b33d89a1e",
".git/objects/8b/892fb348b07a4f2f6a9b66edb50d684da22d69": "1824010ec9bbf5339bf07888a6033325",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1fb348bf413591da3ee431057238159a",
".git/logs/refs/heads/main": "1fb348bf413591da3ee431057238159a",
".git/logs/refs/remotes/origin/main": "097f61b019d9c683026c5a97998c3505",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c1bcaed9b2b2f5e5774b1c9a3af7d114",
".git/refs/remotes/origin/main": "c1bcaed9b2b2f5e5774b1c9a3af7d114",
".git/index": "5ed8a35b89e60f98f43984417ae208d1",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "59ad2aa580b1cafd81847181ae5df078",
".git/FETCH_HEAD": "cd61eaf113e59346df6694e3776356aa",
".git/sourcetreeconfig": "a655fd03f8b381eed93a55f3344108c5",
"assets/AssetManifest.json": "7effe7fdae8469535f403ba748c79a22",
"assets/NOTICES": "f14b87e5daf7fbd057ef17fa72ded8bd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e5dc65e4b4906eca0d4fc6f80db209bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c096a058ac79889bde5e4cd9ef8545ac",
"assets/fonts/MaterialIcons-Regular.otf": "7490893e97bd0c2f91b26145d3238ed7",
"assets/assets/images/bo.png": "d1109f84a173b3dcd3e894439c78e657",
"assets/assets/images/woodfish.png": "29e6516880270d9919b26c80b854b872",
"assets/assets/audio/woodfish_sound.mp3": "e574c7098daef530c7caf82dd0a1f764",
"assets/assets/audio/bo.mp3": "db8bd80e2a4e603b940f89c89e1cddb6",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
