import * as types from '../types'

export default {
  namespaced: true,
  state: {
    user: {},
    token: null
  },
  getters: {
    [types.LOGIN]: state => {
      return state.token
    }
  },
  mutations: {
    [types.LOGIN] (state, val) {
      localStorage.token = val
      state.token = val
    }
  },
  actions: {}
}
