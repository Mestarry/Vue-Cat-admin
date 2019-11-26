import Vue from 'vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import ElementUI from 'element-ui' // element-ui
import 'element-ui/lib/theme-chalk/index.css'

import './styles/global.scss' // global css

import App from './App.vue'
import router from './router'
import store from './store'

import './icons' // icon

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
