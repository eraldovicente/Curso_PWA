

self.addEventListener('fetch', event => {
     
     
     const resp = fetch( event.resquest )
          .then( resp => {

               return resp.ok ? resp : fetch('img/main.jpg');

          });
          
     event.respondWith(resp);
     
     
});