// import Vue from 'vue'
// import Router from 'vue-router'
// import login from '@/components/login'
const index = () => import('@/page/index').then(m => m.default)
const login = () => import('@/page/login').then(m => m.default)
// Vue.use(Router)

/*
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
*/
/**/
const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]
export default routes
