import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// bootstrap4
import 'popper.js'
import 'bootstrap'

// jquery
window.$ = window.jQuery = require('jquery')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
