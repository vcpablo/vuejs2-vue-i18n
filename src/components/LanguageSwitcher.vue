<template>
  <b-nav-item-dropdown :text="currentLocale" right>
    <b-dropdown-item
      :disabled="isCurrentLocale('en')"
      @click="onSetLocale('en')"
    >
      EN
    </b-dropdown-item>
    <b-dropdown-item
      :disabled="isCurrentLocale('es')"
      @click="onSetLocale('es')"
    >
      ES
    </b-dropdown-item>
    <b-dropdown-item
      :disabled="isCurrentLocale('pt-BR')"
      @click="onSetLocale('pt-BR')"
    >
      PT-BR</b-dropdown-item
    >
  </b-nav-item-dropdown>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'LanguageSwitcher',
  computed: {
    ...mapState('locale', ['locale']),
    currentLocale() {
      return this.locale.toUpperCase()
    }
  },
  created() {
    this.$i18n.locale = this.locale
  },
  methods: {
    ...mapMutations('locale', ['setLocale']),
    onSetLocale(locale) {
      this.$i18n.locale = locale
      this.setLocale(locale)
    },
    isCurrentLocale(locale) {
      return this.locale === locale
    }
  }
}
</script>
