import Vue from 'vue'
import Vuex from 'vuex'
import MENU_INFO from '@/common/const.menu'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

// biz vuex module
import homeModule from '@/views/homeManage/vuex'

Vue.use(Vuex)

const state = {
  isCollapse: false, // 左侧导航的折叠状态
  headMenuList: MENU_INFO.HEAD, // 顶部导航菜单列表
  leftMenuList: MENU_INFO.ASIDE, // 左侧导航菜单列表
  userInfo: {}, // 用户信息
  token: '', // token
  permission: {} // 用户权限
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    homeModule
  },
  strict: debug
})
