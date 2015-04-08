var http = require('http');
var fs = require('fs');


function guardar_en_archivo(url, destino, nombre) {
  http.get(url, function(res) {
    var body = '';

    res.on('data', function(chunk) {
      body += chunk;
    });

    res.on('end', function() {
      body = body.replace('tumblrBadge.listItems(', '');

        body = body.replace(/\);/g, '');

        var fbResponse = JSON.parse(body)
        var data = JSON.stringify(fbResponse, null, 4);

        fs.writeFile(destino, "window.photos_" + nombre + " = " + data + ";", function(err) {
          if(err) {
            console.log(err);
          } else {
            console.log("generando el archivo " + destino);
          }
        });

    });
  }).on('error', function(e) {
    console.log("Got error: ", e);
  });

};


guardar_en_archivo('http://picasaweb.google.com/data/feed/api/user/hugoruscitti/album/PilasEngineEjemplos?kind=photo&alt=json&imgmax=d&thumbsize=128u,320&_=1423777307120', "public/js/photos-ejemplos.js", 'ejemplos');
guardar_en_archivo('http://picasaweb.google.com/data/feed/api/user/hugoruscitti/album/PilasEngineEquipos?kind=photo&alt=json&imgmax=d&thumbsize=128u,640&_=1423793291562', "public/js/photos-equipos.js", "equipos");
guardar_en_archivo('http://picasaweb.google.com/data/feed/api/user/hugoruscitti/album/PilasEngineSistema?kind=photo&alt=json&imgmax=d&thumbsize=128u,640&_=1423793291559', "public/js/photos-sistemas.js", "sistemas");
guardar_en_archivo('http://picasaweb.google.com/data/feed/api/user/hugoruscitti/album/PilasEngineEventos?kind=photo&alt=json&imgmax=d&thumbsize=128u,640&_=1423793291552', "public/js/photos-eventos.js", "eventos");
