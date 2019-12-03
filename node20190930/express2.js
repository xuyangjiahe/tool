var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('get send');
  res.send('get send')
});

app.post('/', function (req, res) {
  console.log('post send');
  res.send('post send')
});

// /del_uer 页面相应
app.get('/del_user', function (req, res) {
  console.log('del_user send');
  res.send('delete user send')
})

var server = app.listen(8082, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(host, port);
})

// 静态文件
app.use('/public', express.static('/public'));

