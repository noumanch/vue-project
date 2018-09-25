import Vue from 'vue'
import Router from 'vue-router'
import Senator from './views/Senator.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/senator',
      name: 'senator',
      component: Senator
    },
    {
      path: '/congress',
      name: 'Congress',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Congress.vue')
    }
    // {
    //   path: '/navi',
    //   name: '/navi',
    //   component: () => import(':/views/Navi.vue')
    // }
  ]
})
