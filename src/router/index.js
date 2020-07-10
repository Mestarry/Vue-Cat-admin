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
    redirect: '/welcome',
    children: [
      {
        path: 'welcome',
        component: () => import('@/views/home/Welcome.vue'),
        name: 'Welcome',
        meta: { title: '欢迎页', icon: 'homefill' }
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
  mode: 'history',
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
