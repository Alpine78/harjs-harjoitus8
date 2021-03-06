import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'

Vue.config.productionTip = false
moment.locale('fi');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
