import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './i18n'

import '@/theme/custom.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
