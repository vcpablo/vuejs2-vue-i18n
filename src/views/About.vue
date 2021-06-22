<template>
  <Layout>
    <h1>{{ $t('navbar.about') }}</h1>
  </Layout>
</template>

<script>
import Layout from './Layout'

export default {
  name: 'AboutView',
  components: {
    Layout
  }
}
</script>
