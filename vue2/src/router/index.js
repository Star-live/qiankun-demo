import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import('@/views/Dialog.vue')
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('@/views/Location.vue')
  },
  {
    path: '/state',
    name: 'State',
    component: () => import('@/views/State.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  }
]

export default routes
