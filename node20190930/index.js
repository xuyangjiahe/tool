var server = require('./server.js');
var router = require('./router.js');

server.start(router.route)
console.log(__filename);