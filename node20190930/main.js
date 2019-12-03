// var fs = require("fs");
// // 访问本地文件
// fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
//     console.log(data);
// });

// console.log("程序执行结束!");
// console.log('************ event loops *************');
// /**
//  * 

// // 引入events 模块
// var events = require('events');
// // 创建eventEmitter对象
// var eventEmitter = new events.EventEmitter();

// // 创建事件处理程序
// var connectHandler = function connectd() {
//   console.log('连接成功');
//   // 触发事件
//   eventEmitter.emit('data_received');
// }

// //

// // 绑定事件以及事件处理程序
// eventEmitter.on('eventName', connectHandler);
// // 使用匿名函数绑定data_received事件
// eventEmitter.on('data_received', function() {
//   console.log('数据接收成功');
// });

// // 触发事件
// eventEmitter.emit('eventName');

// console.log('event loop over')

// eventEmitter.on('connection', function(data){
//   console.log('注册一个监听器')
// })
// eventEmitter.once('connection', function(data) {
//   console.log('注册一个单次监听器，即最多会触发 一次，');
// })
// eventEmitter.emit()
//  * 
// */

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// // 监听器1
// var  listener1 = function listener1() {
//   console.log('running listener1');
// }
// // 监听器2
// var listener2 = function listener2() {
//   console.log('running listener2');
// }

// // 绑定connection事件，处理函数为 listener1
// eventEmitter.addListener('connection', listener1);

// // 绑定connection事件，处理函数为 listener2
// eventEmitter.addListener('connection', listener2);
// var eventListeners = eventEmitter.listenerCount('connection');
// console.log(eventListeners + '个监听器链接事件。');

// // 处理connection事件
// eventEmitter.emit('connection');

// // 移除绑定的 listener1函数，
// eventEmitter.removeListener('connection', listener1);

// console.log('listener1 不再受监听');

// // 触发链接事件
// eventEmitter.emit('connection');

// eventListeners = eventEmitter.listenerCount('connection');
// console.log(eventListeners + '个监听器连接事件');

// console.log('程序执行完毕');


// /**
//  * Stream
//  * 
// */

// var fs = require('fs');
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('input.txt');

// // 设置编码
// readerStream.setEncoding('UTF8');

// // 处理流事件 => data, end, and err,
// readerStream.on('data', function(chunk) {
//   data += chunk;
// });

// readerStream.on('end', function() {
//   console.log(data);
// })

// readerStream.on('error', function(err) {
//   console.log(err.stack);
// })

// console.log('complication is end');
// 写入文件流
// var fs = require('fs');

// var data = 'This is a new text.'

// // 创建一个可以写入的流，写入到文件中
// var writerStream = fs.createWriteStream('outPut.txt');

// // 使用utf8编码写入数据
// writerStream.write(data, 'UTF8');

// // 标记文件末尾
// writerStream.end();

// // 处理事件流 data, end, and err
// writerStream.on('finish', function() {
//   console.log('写入完流');
// });

// writerStream.on('error', function(err) {
//   console.log(err.stack);
// });

// console.log('执行完成');

/**
 * 管道流
 * 
*/
var fs = require('fs');
// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('outPut.text');

// 管道读写操作
// 读取input.txt文件内容，并将内容写到output

readerStream.pipe(writerStream);

console.log('管道流完成');
