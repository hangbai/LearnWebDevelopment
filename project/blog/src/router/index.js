import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('@/views/User/SignIn')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/views/User/SignUp')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
