var message = "Hello world";
console.log(message);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('TypeScript');
    };
    return Site;
}());
var obj = new Site();
obj.name();
var arr = [1, 2];
var x = 1;


var Car = /** @class */ (function () {
    // 构造函数
    function Car(engine) {
        this.engine = engine;
    }
    // 方法
    Car.prototype.disp = function () {
        console.log('this is a engine:' + this.engine);
    };
    return Car;
}());


