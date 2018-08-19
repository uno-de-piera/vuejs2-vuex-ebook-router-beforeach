import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/Home.vue'),
        meta: {Auth: false} //pública
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {Auth: false} //pública
    },
    {
      path: '/secret',
      name: 'secret',
      component: () => import('./views/Secret.vue'),
      meta: {Auth: true} //privada
    }
  ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.Auth && !store.state.userIsLogged) {
        next({ path: '/login' })
    } else {
        next()
    }
})

export default router
