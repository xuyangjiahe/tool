console.log('test node process。');

var http = require('http');

http.createServer((request, response) => {
  // 发送请求头
  // 内容类型 text/plain
  response.writeHead(200,{'Content-Type': 'text/plain'});

  // 相应数据
  response.end('Hello world');

}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');