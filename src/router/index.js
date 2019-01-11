import Vue from 'vue'
import Router from 'vue-router'
import firstRoutes from './routes'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: firstRoutes
})

router.beforeEach((to, from, next) => {
  // 通过title动态添加浏览器title
  function setSessionStorage (params) {
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const element = params[key]
        sessionStorage.setItem(key, element)
      }
    }
  }
  setSessionStorage(to.params)
  setSessionStorage(to.query)
  if (to.meta.title) {
    document.title = to.meta.title
    next()
  }
  // 判断是否需要登录权限;
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否存在token或是token是否为空
    if (localStorage.getItem('token') !== 'null' && localStorage.getItem('token') !== '') {
      // 为空执行
      next('/login')
    } else {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
