import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import '@/assets/css/style.css'
import axios from "axios"

Vue.config.productionTip = false
Vue.prototype.$appName = 'AGASHE'

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
