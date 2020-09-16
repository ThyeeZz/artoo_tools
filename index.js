// 时间格式化函数
const timeFormat = (str, time) => {
  // YY-MM-DD hh:mm:ss
  time = time || +new Date();
  const dateTime = time < 10000000000 ? new Date(time * 1000) : new Date(time)
  const YYYY = dateTime.getFullYear();
  const YY = YYYY.toString().substring(2);

  const MM = dateTime.getMonth() < 9 ? `0${dateTime.getMonth()+ 1}` : `${dateTime.getMonth()+1}`;
  const M = dateTime.getMonth();

  const DD = dateTime.getDate() < 10 ? `0${dateTime.getDate()}` : `${dateTime.getDate()}`;
  const D = dateTime.getDate();

  const hh = dateTime.getHours() < 10 ? `0${dateTime.getHours()}` : `${dateTime.getHours()}`;
  const h = dateTime.getHours();

  const mm = dateTime.getMinutes() < 10 ? `0${dateTime.getMinutes()}` : `${dateTime.getMinutes()}`;
  const m = dateTime.getMinutes();

  const ss = dateTime.getSeconds() < 10 ? `0${dateTime.getSeconds()}` : `${dateTime.getSeconds()}`;
  const s = dateTime.getSeconds();

  const o = {}
  for (let i of str) {
    if (!o[i]) {
      o[i] = 1
    } else {
      o[i] += 1
    }
  }

  let year = o.Y === undefined ? '' : o.Y === 2 ? `${YY}-` : `${YYYY}-`;
  let mounth = o.M === undefined ? '' : o.M === 2 ? `${MM}-` : `${M}-`
  let day = o.D === undefined ? '' : o.D === 2 ? `${DD} ` : `${D} `
  let hour = o.h === undefined ? '' : o.h === 2 ? `${hh}:` : `${h}:`
  let minute = o.m === undefined ? '' : o.m === 2 ? `${mm}:` : `${m}:`
  let second = o.s === undefined ? '' : o.s === 2 ? ss : s

  return `${year}${mounth}${day}${hour}${minute}${second}`

}

// 深度克隆
const deepClone = (origin, target) => {
  target = target || {}, //设置target的默认值，不传值默认为空对象
    toStr = Object.prototype.toString, //原型链方法：判断数值类型
    arrStr = '[object Array]';

  for (let prop in origin) {
    if (origin.hasOwnProperty(prop)) { //判断是否为对象自身属性

      if (origin[prop] !== 'null' && typeof (origin[prop]) === 'object') { //判断需要被克隆的对象的属性是否为原始值
        target[prop] = toStr.call(origin[prop]) === arrStr ? [] : {}; //不是原始值，将其转为数组或对象
        deepClone(origin[prop], target[prop]); //如果不是原始值，继续调用自身，判断该属性的子属性是否为原始值
      } else {
        target[prop] = origin[prop]; //如果是原始值的话，将其复制给克隆对象
      }
    }
  }
  return target
}

// 单例
const singleton = (fn) => {
  let result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  }
}

// 防抖
const debounce = (func, time) => {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
      timer = null
    }
    timer = setTimeout(func, time * 1000)
  }
}

export default {
  timeFormat,
  deepClone,
  singleton,
  debounce
}