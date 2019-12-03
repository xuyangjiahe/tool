// donot say too much place show me
class Wue {
  constructor (options) {
    const vm = this;
    vm.$options = options;
    let data = vm._data = vm.$options.data;
    observer(vm._data);
    for (let key in vm._data) {
      proxy(vm, '_data', key)
    }
  }
}

function observer(value) {
  if (!value || typeof value !== 'object') {
    return
  }
  return new observer(value);
}

class Observer {
  constructor (value) {
    this.walk(value);
  }

  walk (obj) {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object') {
        this.walk(obj[key]);

      }
      defineReactive(obj, key, obj[key])
    })
  }
}

let defineReactive = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    set (newVal) {
      if (newVal === value) {
        return
      }
      value = newVal
      // 当设置的属性是个对象，也需要继续继续执行observe
      observer(newVal);
    },
    get () {
      return value
    }

  }) 
}
// 设置代理
proxy (target, sourcekey, key) {
  Object.defineProperty(target, key, {
    configurable: true,
    get: function proxyGetter () {
      return target[sourcekey][key];
    },
    set: function proxySetter(newVal) {
      target[sourceKey][key] = newVal;
    }
  })
}

function bindEvent(eleID, callBack) {
  /**
   * @param {String} eleID 节点id；
   * @param {Function} callBack 绑定的回调事件；
   * */ 
  var $eleId = document.getElementById(eleID);
  $eleId.addEventListener('click', callBack);
}