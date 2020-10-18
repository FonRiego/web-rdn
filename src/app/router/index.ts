import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue')
  },
  {
    path: '/myarea',
    name: 'MyArea',
    component: () => import(/* webpackChunkName: "about" */ '../views/myarea/MyArea.vue')
  },
  {
    path: '/myarea/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/myarea/modules/admin/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
