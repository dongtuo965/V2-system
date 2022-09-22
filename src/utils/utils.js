import {message} from "antd";
//使用的时候可以进行解构

// url格式验证（以http|ftp|https开头）
function checkUrl(url) {
  if (url != "" && url != null) {
    var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
    if (!reg.test(url)) {
      // alert("链接格式有误,请重新输入");
      message.error('链接格式有误,请重新输入');
      return false;
    }
  }
}

//mac地址正则表达式
function macCheck(url){
  var reg_name=/[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}/;
  if(!reg_name.test(url)){
    alert("mac地址格式不正确！mac地址格式为00-24-21-19-BD-E4");
    return false;
  }
  alert('good')
  return true;
}

// 手机号位数验证
function checkPhone(url) {
  if (url != "" && url != null) {
    var reg = /^1[3-9]\d{9}$/
    if (!reg.test(url)) {
      // alert("链接格式有误,请重新输入");
      message.error('手机号格式有误,请重新输入');
      return false;
    }
  }
}

// 手机号脱敏（传入的值位字符串类型 可自定义脱敏位数，三个值固定11位，需要同时修改两或三个数值，3、4、4 或 2、7、2）
const hideMobile = (mobile) => {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2")
}
// 校验数据类型（例如 typeOf('树哥')   string）
const typeOf = function (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
// 防抖(
// methods: {
//   loadList() {
//     debounce(() => {
//       console.log('加载数据')
//     }, 500)
//   }
// })
const debounce = (() => {
  let timer = null
  return (callback, wait = 800) => {
    timer && clearTimeout(timer)
    timer = setTimeout(callback, wait)
  }
})()

// 节流
const throttle = (() => {
  let last = 0
  return (callback, wait = 800) => {
    let now = +new Date()
    if (now - last > wait) {
      callback()
      last = now
    }
  }
})()
// 开启全屏
const launchFullscreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen()
  }
}
// 关闭全屏
const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}

// 大小写转换(str 待转换的字符串  type 1-全大写 2-全小写 3-首字母大写
// turnCase('vue', 1)            VUE
// turnCase('REACT', 2)         react
// turnCase('vue', 3)           Vue)
const turnCase = (str, type) => {
  switch (type) {
    case 1:
      return str.toUpperCase()
    case 2:
      return str.toLowerCase()
    case 3:
      //return str[0].toUpperCase() + str.substr(1).toLowerCase() // substr 已不推荐使用
      return str[0].toUpperCase() + str.substring(1).toLowerCase()
    default:
      return str
  }
}
// 获取浏览器地址栏各个参数(   取值：
// let id = getUrlParam("id")
// console.log(id))
function getUrlParam(key) {
  var url = decodeURI(window.location.href);
  var arr = url.split("?");
  if (arr.length > 1) {
    var paramArr = arr[1].split("&");
    for (var i = 0; i < paramArr.length; i++) {
      var param = paramArr[i];
      if (param.split("=")[0] == key) {
        return param.split("=")[1];
      }
    }
  }
}

// 判断手机是Andoird还是IOS（ 1: ios   2: android  3: 其它）
const getOSType = () => {
  let u = navigator.userAgent, app = navigator.appVersion;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) {
    return 1;
  }
  if (isAndroid) {
    return 2;
  }
  return 3;
}
// 数组对象根据字段去重（arr 要去重的数组  key 根据去重的字段名）
// const responseList = [
//   { id: 1, name: '树哥' },
//   { id: 2, name: '黄老爷' },
//   { id: 3, name: '张麻子' },
//   { id: 1, name: '黄老爷' },
//   { id: 2, name: '张麻子' },
//   { id: 3, name: '树哥' },
//   { id: 1, name: '树哥' },
//   { id: 2, name: '黄老爷' },
//   { id: 3, name: '张麻子' },
// ]
//
// uniqueArrayObject(responseList, 'id')
// [{ id: 1, name: '树哥' },{ id: 2, name: '黄老爷' },{ id: 3, name: '张麻子' }]

const uniqueArrayObject = (arr = [], key = 'id') => {
  if (arr.length === 0) return
  let list = []
  const map = {}
  arr.forEach((item) => {
    if (!map[item[key]]) {
      map[item[key]] = item
    }
  })
  list = Object.values(map)

  return list
}

// 滚动到页面顶部
const scrollToTop = () => {
  const height = document.documentElement.scrollTop || document.body.scrollTop;
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, height - height / 8);
  }
}

// 滚动到元素位置（smoothScroll('#target')  平滑滚动到 ID 为 target 的元素）
const smoothScroll = element => {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
};

// 金额格式化 （{number} number：要格式化的数字
// {number} decimals：保留几位小数
// {string} dec_point：小数点符号
// {string} thousands_sep：千分位符号）
// 示例:   moneyFormat(10000000)    10,000,000.00    moneyFormat(10000000, 3, '.', '-')    10-000-000.000
const moneyFormat = (number, decimals, dec_point, thousands_sep) => {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals)
  const sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep
  const dec = typeof dec_point === 'undefined' ? '.' : dec_point
  let s = ''
  const toFixedFix = function (n, prec) {
    const k = Math.pow(10, prec)
    return '' + Math.ceil(n * k) / k
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}


// 模糊搜索(list 原数组   keyWord 查询的关键词    attribute 数组需要检索属性)
// const list = [ { id: 1, name: '树哥' }, { id: 2, name: '黄老爷' }, { id: 3, name: '张麻子' }, { id: 4, name: '汤师爷' },
//   { id: 5, name: '胡万' }, { id: 6, name: '花姐' }, { id: 7, name: '小梅' } ]
// fuzzyQuery(list, '树', 'name') // [{id: 1, name: '树哥'}]
const fuzzyQuery = (list, keyWord, attribute = 'name') => {
  const reg = new RegExp(keyWord)
  const arr = []
  for (let i = 0; i < list.length; i++) {
    if (reg.test(list[i][attribute])) {
      arr.push(list[i])
    }
  }
  return arr
}

export default {
  checkUrl,
macCheck,
  checkPhone,
  hideMobile,
  typeOf,
  debounce,
  throttle,
  launchFullscreen,
  exitFullscreen,
  turnCase,
  getUrlParam,
  getOSType,
  uniqueArrayObject,
  scrollToTop,
  smoothScroll,
  moneyFormat,
  fuzzyQuery
}


