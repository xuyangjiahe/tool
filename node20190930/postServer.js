var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})

  //解析url 

  console.log('req');
  console.log(req);
  res.write('req:')
  res.write(req.url)
  var params = url.parse(req.url, true).query;
  res.write('name:'+ params.name);
  res.write('\n');
  res.write('name2:'+ params.name2);
  res.end();
}).listen(3000)