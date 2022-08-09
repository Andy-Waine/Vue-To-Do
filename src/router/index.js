import { createRouter, createWebHashHistory } from 'vue-router'
import Options from '../views/Options.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Options
  },
  {
    path: '/composition',
    name: 'Composition',
    // route level code-splitting
    // this generates a separate chunk (Composition.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Composition" */ '../views/Composition.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
