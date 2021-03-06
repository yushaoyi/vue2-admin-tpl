
export function checkPhone (num) {
  let reg = /^1(3|4|5|7|8|9)\d{9}$/
  return reg.test(num)
}

export function checkImage (type) {
  let reg = /\.(jpg|jpeg|png|JPG|PNG)$/
  return reg.test(type)
}
