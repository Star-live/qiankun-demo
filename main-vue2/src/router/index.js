import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Vue3 from '@/views/Vue3'
import React16 from '@/views/React16'
import React17 from '@/views/React17'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/vue2',
    name: 'vue2'
  },
  {
    path: '/vue3',
    name: 'vue3',
    component: Vue3
  },
  {
    path: '/react16',
    name: 'react16',
    component: React16
  },
  {
    path: '/react17',
    name: 'react17',
    component: React17
  },
  {
    path: '/',
    redirect: '/home'
  }
]

export default new Router({
  mode: 'history',
  routes
})
