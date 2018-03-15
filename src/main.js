import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/static/css/normalize.css'
import '@/static/css/font.css'

import '@/assets/scss/style.scss'



// import 'http://at.alicdn.com/t/font_589099_b2t6jpbs8s4np14i.css'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')