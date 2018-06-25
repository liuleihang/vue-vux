// import * as types from '../types'

export default {
  namespaced: true,
  state: {
    user: {},
    token: null
  },
  getters: {
    token: state => {
      return state.token
    }
  },
  mutations: {
    setToken (state, val) {
      localStorage.token = val
      state.token = val
    }
  },
  actions: {}
}
