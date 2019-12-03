var message:string = "Hello world";
console.log(message);

class Site {
  name(): void{
    console.log('TypeScript');
  }
}

var obj = new Site();
obj.name();

let arr: number[] = [1, 2];

let x: any = 1; 

class Car {
  engine: string;
  // 构造函数
  constructor(engine:string) {
    this.engine = engine;
  }

  // 方法
  disp():void {
    console.log('this is a engine:' + this.engine);
  }
}