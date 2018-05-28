const login = {
  namespaced: true,
  state: {
    isLogin: '',
    loginName: ''
  },
  getters: {
    isLogin: state => {
      return state.isLogin
    },
    loginName: state => {
      return state.loginName
    }
  },
  mutations: {
    set_isLogin (state, val) {
      state.isLogin = val
    },
    set_loginName (state, val) {
      state.loginName = val
    }
  },
  actions: {}
}
export default login
