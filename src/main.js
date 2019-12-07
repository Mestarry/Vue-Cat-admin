import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import router from './router'

import 'normalize.css/normalize.css'

import VueStorage from 'vue-ls'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'

import './icons'
import './permission'
import * as filters from './filters'

import './../mock' // 模拟数据

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueStorage, { namespace: 'X-', name: 'ls', storage: 'local' })
Vue.use(ElementUI, { size: 'medium' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
