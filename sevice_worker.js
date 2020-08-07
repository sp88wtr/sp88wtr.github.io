var CACHE_NAME = "pwa-sample-caches";
var urlsToCashes =[
    '/sp88wtr.github.io',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCashe);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.requset)
            .then(function(response) {
                return response ? response : fetch(event.requset);
            })
    );
});