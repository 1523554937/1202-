import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[ {
      path: 'first1',
      name: 'first1',
      component: () => import('../views/First1.vue')
    },
    {
      path: 'first2',
      name: 'first2',
      component: () => import('../views/First2.vue')
    }
    
  ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
