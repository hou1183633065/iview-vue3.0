// import HomePage from '@/views/HomePage.vue'
import Layout from '@/layout/index'
import menuItemRoutes from './menuItemRoutes'
const firstRoutes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Layout,
    meta: {
      requireAuth: true,
      keepAlive: true
    },
    children: menuItemRoutes
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
  }
]

export default firstRoutes
