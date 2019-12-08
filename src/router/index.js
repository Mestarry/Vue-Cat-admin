import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/404',
    name: 'Page404',
    component: () => import('@/views/error-page/404')
  }
]

export const asyncRoutes = [
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { title: '仪表盘', icon: 'dashboard', affix: true },
        component: () => import('@/views/home/Dashboard')
      }
    ]
  },
  {
    path: '/account',
    name: 'Account',
    component: layout,
    redirect: '/account/center',
    meta: { title: '个人信息', icon: 'user', affix: true, roles: ['admin'] },
    children: [
      {
        path: '/account/center',
        name: 'UserCenter',
        meta: { title: '个人中心', affix: true },
        component: () => import('@/views/account/center/index.vue')
      },
      {
        path: '/account/settings',
        name: 'UserSettings',
        meta: { title: '个人设置', affix: true },
        component: () => import('@/views/account/settings/index')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const createRouter = () => new VueRouter({
  mode: 'history', // require service support
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
