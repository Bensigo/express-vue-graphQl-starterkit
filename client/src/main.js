// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import './stylus'
import {apolloProvider} from './apolloProvider'
Vue.config.productionTip = false
Vue.use(Vuetify)
const userId = localStorage.getItem('user_id')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  router,
  data: {
    user: userId,
    username: ''
  },
  template: '<App/>',
  components: { App }
})
