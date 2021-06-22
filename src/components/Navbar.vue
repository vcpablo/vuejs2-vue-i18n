<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand>VueJS vue-i18n</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home' }">
          {{ $t('navbar.home') }}
        </b-nav-item>
        <b-nav-item :to="{ name: 'About' }">
          {{ $t('navbar.about') }}
        </b-nav-item>
        <b-nav-item :to="{ name: 'Contact' }">
          {{ $t('navbar.contact') }}
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <LanguageSwitcher />
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher'

export default {
  name: 'Navbar',
  components: {
    LanguageSwitcher
  }
}
</script>
