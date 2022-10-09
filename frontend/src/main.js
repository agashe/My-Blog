import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import '@/assets/css/style.css'

Vue.config.productionTip = false
Vue.prototype.$appName = 'AGASHE'

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')