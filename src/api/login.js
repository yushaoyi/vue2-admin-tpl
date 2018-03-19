import Util from 'util'

export function doLogin (params) {
  return Util.postServer('/api/user/login', params)
}

export function doExit () {
  return Util.postServer('/api/user/logout')
}

export function getUserInfo () {
  return Util.getServer('/api/user/current')
}

export function getUserPermission () {
  return Util.getServer('/api/user/current')
}
