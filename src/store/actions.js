import * as types from './mutation-types'
import Api from 'api'

export const toggleNavCollapse = ({ commit }, payload) => {
  console.log(payload)
  commit(types.TOGGLE_NAV_COLLAPSE, payload)
}

export const login = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    Api.login.doLogin(payload).then(res => {
      commit(types.GET_USER_INFO, res.data)
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}

export const testLogin = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    resolve({
      account: 'admin',
      token: '123'
    })
  })
}

export const testExit = ({ commit }) => {
  return new Promise((resolve, reject) => {
    resolve({})
  })
}

export const exit = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Api.login.doExit().then(res => {
      commit(types.GET_USER_INFO, null)
      commit(types.GET_USER_PERMISSION, null)
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}

export const getUserInfo = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    Api.login.getUserInfo()
      .then(res => {
        let userInfo = res.data
        commit(types.GET_USER_INFO, userInfo)
      })
  })
}

export const getUserPermission = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    commit(types.GET_USER_PERMISSION, {})
    resolve({})
  })
}
