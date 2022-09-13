// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {registerMicroApps, start} from 'qiankun'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 主应用中注册微应用
registerMicroApps([
  {
    name: 'vue2',
    entry: '//localhost:8100',
    container: '#content',
    activeRule: '/vue2'
  },
  {
    name: 'vue3',
    entry: '//localhost:8200',
    container: '#content',
    activeRule: '/vue3'
  },
  {
    name: 'react16',
    entry: '//localhost:8300',
    container: '#content',
    activeRule: '/react16'
  },
  {
    name: 'react17',
    entry: '//localhost:8400',
    container: '#content',
    activeRule: '/react17'
  }
])
// 启动qiankun
start()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
