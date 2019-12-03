var http = require('http');

// 用于请求的选项
var options = {
  host: '127.0.0.1',
  port: '8080',
  path: '/index.html'
};

var callback = function(response) { 
  // 不断更新数据
  var body = '';

  response.on('data', function(data) {
    body += data;
  });

  response.on('end', function() {
    // 数据接收完成
    console.log(body);
  });
}

var req = http.request(options, callback);
req.end();
