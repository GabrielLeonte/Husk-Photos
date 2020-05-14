<template>
  <div>
    <navbar />
    <nuxt />
    <client-only>
      <notifications group="foo" />
    </client-only>
  </div>
</template>

<script>
import navbar from "../components/usernavbar"
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
