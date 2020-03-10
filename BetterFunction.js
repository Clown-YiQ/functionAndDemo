// # 通用函数编写
var BetterFunction = {
  // 判断是否为奇数：isOdd
  isOdd: function (n) {
    if (n % 2 == 0) {
      return false
    } else {
      return true;
    }
  },

  // 判断是否为素数
  isPrime: function (n) {
    if (n < 2) {
      return false
    } else {
      for (var i = 2; i < n; i++) {
        if (n % i == 0) {
          return false;
        }
      }
      return true;
    }
  },
  // console.log(isPrime(4));

  // 数组求和：sumOfArray
  sumOfArray: function (arr) {
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);
  },
  // var sum = 0;
  // var array = [1, 2, 3, 4, 5];
  // sumOfArray(array);

  // 取得数组中最大值：maxOfArray
  maxOfArray: function (arr) {
    var max = arr[0];
    for (var i = 1; i <= arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    console.log(max);
  },
  // var array = [12, 3, 45, 7, 8, 9, 60, 6];
  // maxOfArray(array);

  // 取得数组中最小值：minOfArray
  minOfArray: function (arr) {
    var min = arr[0];
    for (var i = 1; i <= arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    console.log(min);
  },
  // var array = [12, 3, 45, 7, 8, 9, 60, 6, 2];
  // minOfArray(array);

  // 判断是否为稀松数组：hasEmptyInArray
  hasEmptyInArray: function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (i in arr) {
        return true;
      }
    }
    return false;
  },
  // var arr1 = new Array(3);
  // var arr2 = [1, 5, 6, 7, 82];
  // console.log(hasEmptyInArray(arr1));
  // console.log(hasEmptyInArray(arr2));

  // 判断是否为闰年：isLeap
  isLeap: function (n) {
    if (n % 4 == 0 && n % 100 !== 0 || n % 400 == 0) {
      return true;
    }
    return false;
  },
  // console.log(isLeap(2000));

  // 拿到某年某月的天数：getDays
  getDays: function (year, month) {
    if (month == 2) {
      var days = this.isLeap(year) ? 29 : 28;
      return days;
    } else if (month < 8 && this.isOdd(month) || month >= 8 && !this.isOdd(month)) {
      return 31;
    } else {
      return 30;
    }
  },
  // console.log(getDays(2000, 5));
  // console.log(getDays(2000, 4));
  // console.log(getDays(2000, 9));
  // console.log(getDays(2000, 10));
  // console.log(getDays(2000, 2));
  // console.log(getDays(2001, 2));


  // 得到数组中出现的次数最多的数：getTopFreqInArray
  getTopFreqInArray: function (arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        obj[arr[i]]++;
      } else {
        obj[arr[i]] = 1;
      }
    }
    var obj2;
    for (var prop in obj) {
      if (!obj2 || obj[prop] > obj2.fre) {
        obj2 = {
          num: prop,
          fre: obj[prop]
        }
      }
    }
    return obj2;
  },
  // console.log(getTopFreqInArray([2, 2, 3, 4, 5, 6, 6, 6, 7, 8, 9, 1, 1, 1, 1, 2]))

  // 任一大于2的偶数都可写成两个质数之和，比如：8 = 3 + 5
  // 让用户输入一个大于2的整数，输出其等于哪两个素数相加
  //哥德巴赫猜想
  geDe: function (n) {
    if (n < 2 || this.isOdd(n)) {
      console.log("输入有误");
    } else {
      for (var i = 2; i <= n - 2; i++) {
        if (this.isPrime(i) && this.isPrime(n - i)) {
          return `${n} = ${i} + ${n - i}`;
        }
      }
      return false;
    }
  },
  // var num = prompt("请输入一个大于2的偶数");
  // console.log(geDe(num))

  // 让用户输入一个年份，输出该年每个月的天数
  getTotalDays: function (n) {
    if (isNaN(n)) {
      console.log("输入有误");
    }
    for (var i = 1; i <= 12; i++) {
      console.log(`${n}年${i}月:${getDays(n, i)}天`);
    }
  },

  // 为数组进行排序：sort
  sort: function (arr, call) {
    if (!call) {
      call = function (a, b) {
        if (a > b) {
          return 1;
        } else if (a === b) {
          return 0;
        } else {
          return -1;
        }
      }
    }
    for (var i = 1; i < arr.length; i++) {
      for (var j = 0; j < arr.length - 1; j++) {
        if (call(arr[j], arr[j + 1]) > 0) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  },

  // 对某个数组进行筛选：filter
  filter: function (arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i], i)) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  // 按照条件查找数组中第一个满足条件的元素：find
  find: function (arr, call) {
    for (var i = 0; i < arr.length; i++) {
      if (call(arr[i], i)) {
        return arr[i]
      }
    }
  },

  // 5. 写一个函数，按照指定的条件，得到某个数组中满足条件的元素数量
  // 按照指定条件，得到数组中满足条件的元素数量：count
  count: function (arr, call) {
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
      if (call(arr[i], i)) {
        num++;
      }
    }
    return num;
  },
  // 随机函数
  getRanDom: function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  },
  deepClone:function (origin, target) {
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = "[object Array]";
    for(var prop in origin) {
      if(origin.hasOwnProperty(prop)) {
        if(origin[prop] !== "null" && typeof(origin[prop]) == 'object') {
          if(toStr.call(origin[prop]) == arrStr) {
            target[prop] = [];
          }else{
            target[prop] = {};
          }
          deepClone(origin[prop], target[prop]);
        }else{
          target[prop] = origin[prop];
        }
      }
    }
    return target;
  }
}

//数组去重
Array.prototype.unique = function () {
  var temp = {},
      arr = [],
      len = this.length;
  for(var i = 0;i < len; i++) {
    if(!temp[this[i]]) {
      temp[this[i]] = 'aaa';
      arr.push(this[i]);
    }
  }
  return arr;
}
// var arr = [1, 5, 6, 7, 1, 23, 4, 5];
// var arr = [{ name: '张三', age: 18, weight: 60 },
// { name: '李四', age: 15, weight: 70 },
// { name: '王五', age: 20, weight: 65 },
// ]
// BetterFunction.sort(arr, function (a, b) {
//   return a.age - b.age;
// })
// console.log(arr);
// var arr = [1, 5, 6, 7, 1, 23, 4, 5, 6, 8, 10];
// var newArr = BetterFunction.filter(arr, function (item) {
//   return BetterFunction.isPrime(item);
// })
// console.log(newArr);
// var arr = [1, 5, 6, 7, 1, 23, 4, 5, 6, 8, 10];
// var newArr = BetterFunction.find(arr, function (item) {
//   return !BetterFunction.isOdd(item);
// })
// console.log(newArr);
// var arr = [1, 5, 6, 7, 1, 23, 4, 5, 6, 8, 10];
// var num = BetterFunction.count(arr, function (item) {
//   return BetterFunction.isOdd(item);
// })
// console.log(num);