import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    name: 'Login'
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    name: 'Page404'
  }
]

export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/home/Dashboard'),
        name: 'Dashboard',
        meta: { title: '仪表盘', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/account',
    component: Layout,
    redirect: '/account/center',
    children: [
      {
        path: 'center',
        meta: { title: '账户信息', icon: 'user', roles: ['admin'] },
        component: () => import('@/views/account/index.vue')
      }
    ]
  },
  {
    path: '/error-page',
    component: Layout,
    children: [
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'ErrorPage',
        meta: { title: 'ErrorPage', icon: '404' }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

const createRouter = () => new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
