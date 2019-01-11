const menuItemRoutes = [
  {
    path: '/',
    name: 'HomePage',
    meta: {
      title: '控制台'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/HomePage.vue')
  }
]

export default menuItemRoutes
