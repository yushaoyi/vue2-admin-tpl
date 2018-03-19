import Api from 'api'

const state = {
  homeList: []
}

const getters = {
  homeList: state => state.homeList
}

const actions = {
  // todo 可以考虑使用async 和await，在不使用promise的情况下
  getHomeList ({commit}) {
    return new Promise((resolve, reject) => {
      Api.home.getPaymentInfo()
        .then(res => {
          commit('SET_HOME_LIST', res.data)
        }, err => {
        })
    })
  }
}

const mutations = {
  SET_HOME_LIST (state, list) {
    state.homeList = list
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
