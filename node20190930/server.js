// var http = require('http');
// var url = require('url');

// function start(route) {
//   function onRequest(request, response){
//     var pathname = url.parse(request.url).pathname;
//     console.log('Request for ' + pathname + 'received.');

//     route(pathname);

//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('1233333');
//     response.end();
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log('server has started');
// }

// exports.start = start;

// // start();

// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// // 创建服务
// http.createServer(function(request, response) {
//   var pathname = url.parse(request.url).pathname;

//   // 输出请求的文件名
//   console.log('request for' + pathname + 'received');

//   // 从文件系统中读取请求的文件内容
//   fs.readFile(pathname.substr(1), function(err, data) {
//     if(err) {
//       console.log(err);
//       // http status 400 ：not found
//       // 
//       response.writeHead(404, {'Content-Type': 'text/html'});

//     } else {
//       //状态吗200 ok
//       response.writeHead(200, {'Content-Type': 'text/html' });

//       //响应文件内容
//       response.write(data.toString());
//     }

//     // 发送相应数据
//     response.end();
//   });
// }).listen(8080);

// console.log('Server running at http://127.0.0.1:8080/')

// express post send

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.use('pubilc', express.static('public'));

app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + '/' + 'index.html');

})

app.post('/process_post', urlencodedParser, function (req, res) {
  // 输出JSON格式
  console.log(req)
  var response = {
    'first_name': req.body.first_name,
    'last_name': req.body.last_name
  };

  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
})