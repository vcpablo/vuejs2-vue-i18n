export default {
  namespaced: true,
  state: {
    locale: 'en'
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale
    }
  }
}
