const menuItemRoutes = [
  {
    path: '/',
    name: 'Console',
    meta: {
      title: '控制台',
      keepAlive: true,
      icon: 'md-desktop'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/Console/index.vue')
  },
  {
    path: '/UserManagement',
    name: 'UserManagement',
    meta: {
      title: '用户管理',
      keepAlive: true,
      icon: 'md-desktop'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/UserManagement/index.vue')
  },
  {
    path: '/DeviceManagement',
    name: 'DeviceManagement',
    meta: {
      title: '设备管理',
      keepAlive: true,
      icon: 'md-desktop'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/DeviceManagement/index.vue')
  },
  {
    path: '/PhotoManagement',
    name: 'PhotoManagement',
    meta: {
      title: '图片管理',
      keepAlive: true,
      icon: 'md-desktop'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/PhotoManagement/index.vue')
  },
  {
    path: '/VideoManagement',
    name: 'VideoManagement',
    meta: {
      title: '视频管理',
      keepAlive: true,
      icon: 'md-desktop'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/VideoManagement/index.vue')
  },
  {
    path: '/AlarmManagement',
    name: 'AlarmManagement',
    meta: {
      title: '报警管理',
      keepAlive: true,
      icon: 'md-desktop'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/AlarmManagement/index.vue')
  }
]

export default menuItemRoutes
