var http = require('http');
var fs = require('fs');
var n = 8;
var url = 'http://pilas-engine.tumblr.com/api/read/json?callback=tumblrBadge().listItems&num=' + n;

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

      fs.writeFile("public/js/datos.js", "window.pilas_log = " + data + ";", function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("Generando el archivo public/js/datos.js");
          console.log("    ");
          console.log("Los últimos posts son:");
          console.log("    " + fbResponse.posts[0]['regular-title']);
          console.log("    " + fbResponse.posts[1]['regular-title']);
          console.log("    (" + fbResponse.posts.length + " post en total)");
          console.log("    ");

        }
      });

  });
}).on('error', function(e) {
  console.log("Got error: ", e);
});
