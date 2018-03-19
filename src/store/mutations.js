import Vue from 'vue'
import * as types from './mutation-types'

export default {

  [types.TOGGLE_NAV_COLLAPSE] (state, flag) {
    console.log(flag)
    state.isCollapse = flag
  },

  [types.GET_USER_INFO] (state, userInfo) {
    if (!userInfo) {
      state.token = ''
      state.userInfo = {}
      return
    }
    state.token = userInfo.token
    state.userInfo = userInfo
  },

  [types.GET_USER_PERMISSION] (state, permission) {
    if (!permission) {
      state.permission = {}
      return
    }
    state.permission = permission
  }

}
