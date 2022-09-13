// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import { Button, Dialog } from 'element-ui'
import store from './store'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Dialog)

let router = null
let instance = null

function render (props = {}) {
  const { container } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue2/' : '/',
    mode: 'history',
    routes
  })
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

function storeTest (props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true
    )
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name
      }
    })
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}

export async function mount (props) {
  console.log('[vue] props from main framework', props)
  storeTest(props)
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
