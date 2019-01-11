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
    component: Layout,
    meta: {
      // requireAuth: true
    },
    children: menuItemRoutes
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login/index.vue')
  },
  {
    path: '/home1',
    name: 'home1',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
  }
]

export default firstRoutes
