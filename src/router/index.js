import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('../components/business.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/about.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../components/faq.vue')
    },
    {
      path: '/location',
      name: 'loaction',
      
    }
  ]
})

export default router
