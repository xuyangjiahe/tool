var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World $$$');
  console.log('req.hostname');
  console.log(req.hostname);
  console.log(req.ip);
})

var server = app.listen(8088, function () {
  var host = server.address().address;
  var port = server.address().port;
  

  console.log( host, port)
})