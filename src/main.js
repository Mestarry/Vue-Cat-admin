import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import router from './router'

import 'normalize.css/normalize.css' // 标准化CSS样式

import VueStorage from 'vue-ls' // 本地存储
import ElementUI from 'element-ui' // element-ui组件库
import 'element-ui/lib/theme-chalk/index.css'

import VeLine from 'v-charts/lib/line.common' // v-charts图表

import '@/styles/index.scss' // 全局样式

import './icons' // icon图标
import './permission' // 权限控制
import * as filters from './filters'

import './../mock' // 模拟数据

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueStorage, { namespace: 'X-', name: 'ls', storage: 'local' })
Vue.use(ElementUI, { size: 'medium' })
Vue.component(VeLine.name, VeLine)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
