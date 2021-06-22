<template>
  <Layout>
    <h1>{{ $t('navbar.home') }}</h1>
  </Layout>
</template>

<script>
import Layout from './Layout'

export default {
  name: 'HomeView',
  components: {
    Layout
  }
}
</script>
