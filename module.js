// 创建原生模块
function codeModule () {
  var obj = {'key1': 'value1'};
  var arr = [1,2,3,4];

  function getObj() {
    console.log(obj);
  }
  function getArr() {
    console.log(arr.join('$'));
  }

  return {
    getObj: getObj,
    getArr: getArr
  }
}

var foo = codeModule();

foo.getArr();

var myModules = (function Manager() {
  var modules = [];

  function define(name, deps,impl) {
    for (var i=0;i<deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }

  function get(name) {
    return modules[name];
  }
  
  return {
    define: define,
    get: get
  }
})();

myModules.define('bar', [], function() {
  function Hello(hello) {
    return 'let me introduce' + hello
  }

  return {
    Hello: Hello
  };

})

var bar = myModules.get('bar')