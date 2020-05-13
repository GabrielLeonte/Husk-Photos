<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import navbar from '~/components/navbar'

export default {
  components: {
    navbar
  }
}
</script>

<style scoped>
* {
  margin: 0 auto;
}
</style>
