<template>
  <b-row>
    <b-col>
      <Navbar />
      <b-container>
        <slot />
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'Layout',
  components: {
    Navbar
  }
}
</script>
