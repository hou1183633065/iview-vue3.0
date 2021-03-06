import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './utils/prototype.fun'
import './utils/storage.fun'

import 'iview/dist/styles/iview.css'

import './mock/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
