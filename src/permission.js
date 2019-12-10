import Vue from 'vue'
import router from './router'
import store from './store'
import { X_TOKEN } from './store/mutation-types'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist
const defaultRoutePath = '/home'

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  document.title = getPageTitle(to.meta.title)
  const hastoken = Vue.ls.get(X_TOKEN)
  if (hastoken) {
    if (to.path === '/login') {
      next({ path: defaultRoutePath })
      NProgress.done()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        const { roles } = await store.dispatch('GetInfo')
        const accessRoutes = await store.dispatch('GenerateRoutes', roles)
        router.addRoutes(accessRoutes)
        next({ ...to, replace: true })
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
