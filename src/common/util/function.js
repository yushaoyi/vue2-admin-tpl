
export function parseGetParams (url, obj) {
  let i = 0
  let hasParam = false
  if (url.indexOf('?') != -1) {
    hasParam = true
  }
  for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
      continue
    }
    if (i == 0 && !hasParam) {
      url += '?' + encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
    } else {
      url += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
    }
    i++
  }
  return url
}

export function getSgObj (key) {
  let obj = window.sessionStorage.getItem(key)
  return JSON.parse(obj)
}

export function setSgObj (key, value) {
  return window.sessionStorage.setItem(key, JSON.stringify(value))
}

export function getSg (key) {
  return window.sessionStorage.getItem(key)
}

export function setSg (key, value) {
  window.sessionStorage.setItem(key, value)
}

export function removeSg (key) {
  window.sessionStorage.removeItem(key)
}

export function getLgObj (key) {
  let obj = window.localStorage.getItem(key)
  return JSON.parse(obj)
}

export function setLgObj (key, value) {
  return window.localStorage.setItem(key, JSON.stringify(value))
}

export function getLg (key) {
  return window.localStorage.getItem(key)
}

export function setLg(key, value) {
  return window.localStorage.setItem(key, value)
}

export function removeLg (key) {
  return window.localStorage.removeItem(key)
}
/**
 *
 * @param num 当前周的前n个周(n为负数)或后n个周(n为正数)或0
 * @returns {Date}
 */
export function getWeekStartDate (num) {
  num = num || 0
  let now = new Date(); // 当前日期
  let nowDayOfWeek = now.getDay(); // 今天本周的第几天
  let nowDay = now.getDate(); // 当前日
  let nowMonth = now.getMonth(); // 当前月
  let nowYear = now.getFullYear(); // 当前年
  let weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 1 + 7 * num);
  return weekStartDate;
}

// 获取当前周的结束时间
export function getWeekEndDate (num) {
  num = num || 0
  let now = new Date(); // 当前日期
  let nowDayOfWeek = now.getDay(); // 今天本周的第几天
  let nowDay = now.getDate(); // 当前日
  let nowMonth = now.getMonth(); // 当前月
  let nowYear = now.getFullYear(); // 当前年
  let weekStartDate = new Date(nowYear, nowMonth, nowDay + (7 - nowDayOfWeek) + 7 * num);
  return weekStartDate;
}

/**
 *
 * @param num 当前月的前n个月(n为负数)或后n个月(n为正数)或0
 * @returns {Date}
 */
export function getMonthStartDate (num) {
  num = num || 0
  let now = new Date()
  let nowMonth = now.getMonth(); // 当前月
  let nowYear = now.getFullYear(); // 当前年
  let date = new Date(nowYear, nowMonth + num, 1);
  return date
}
/**
 *
 * @param num 当前月的前n个月(n为负数)或后n个月(n为正数)或0
 * @returns {Date}
 */
// 获取当前月的最后一天
export function getMonthEndDate (num) {
  num = num || 0
  let now = new Date()
  let nowMonth = now.getMonth(); // 当前月
  let nowYear = now.getFullYear(); // 当前年
  let date = new Date(new Date(nowYear, nowMonth + num + 1, 1).getTime() - 1 * 24 * 3600 * 1000)
  return date
}
