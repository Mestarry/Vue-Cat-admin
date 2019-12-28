import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import router from './router'
import VueStorage from 'vue-ls' // 本地存储

import 'normalize.css/normalize.css' // 标准化CSS样式
import '@/styles/index.scss' // 全局样式
import '@/lazy_use/index' // Element-ui和v-charts按需引入
import './icons' // icon图标
import './permission' // 权限控制
import * as filters from './filters'

import './../mock' // 模拟数据

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueStorage, { namespace: 'X-', name: 'ls', storage: 'local' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
