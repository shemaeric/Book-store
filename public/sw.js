let chachedData = 'AppV1'

this.addEventListener("install", (event) => {

    event.waitUntil(
        caches.open(chachedData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/static/js/1.chunk.js',
                '/img/book1.jpeg',
                '/use.fontawesome.com/releases/v5.8.1/css/all.css',
                '/fonts.googleapis.com/css?family=Permanent+Marker',
                '/index.html',
                '/'
            ])
        }).catch(err => console.log(err)),
    )
})

this.addEventListener("fetch", (event) => {

    event.respondWith(
        caches.match(event.request).then((resp) => {
            if (resp) {
                return resp
            }
        }).catch((err) => console.log(err))
    )
}) 