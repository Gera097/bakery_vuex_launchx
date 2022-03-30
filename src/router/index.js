import { createRouter, createWebHashHistory } from 'vue-router'
import ClienteView from '../views/ClienteView.vue'

const routes = [
  {
    path: '/',
    name: 'cliente',
    component: ClienteView
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PasteleroView.vue')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
