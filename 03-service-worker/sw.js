
// Ciclo de vida del SW

self.addEventListener('install', event => {

     // Descargar assets
     // Creamos un cache
     console.log('SW: Instalando SW');

     // self.skipWaiting();

});


// Cuando el SW toma el control de la aplicación
self.addEventListener('activate', event => {

     // Borrar cache viejo
     console.log('SW: Activo y listo para controlar la app');

});
