import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import locale from './modules/locale'

const persistedState = createPersistedState({
  key: 'vuejs-vue-i18n',
  paths: ['locale']
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    locale
  },
  plugins: [persistedState]
})
