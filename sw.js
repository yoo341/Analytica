var C='analytica-v1',F=['index.html','manifest.json'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}))});
self.addEventListener('fetch',function(e){e.respondWith(fetch(e.request).then(function(r){var x=r.clone();caches.open(C).then(function(c){c.put(e.request,x)});return r}).catch(function(){return caches.match(e.request)}))});