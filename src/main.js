import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './assets/reset.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
