// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import store from './store'
// import Home from './components/HelloFromVux'
import {
  Group,
  LoadingPlugin,
  ToastPlugin,
  XButton,
  XInput
} from 'vux'
// 注册全局组件
Vue.component('x-input', XInput)
Vue.component('group', Group)
Vue.component('x-button', XButton)

Vue.use(LoadingPlugin)
Vue.use(VueRouter)
Vue.use(ToastPlugin)

const router = new VueRouter({
  routes: routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(to => to.meta.requireAuth)) {
    if (store.state.login.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // store,
  router,
  render: h => h(App)
}).$mount('#app-box')
