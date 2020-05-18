<template>
  <div class="container" style="margin-top: 10vh">
    <div><span>Your personal feed</span></div>
    <div class="gallery">
      <div class="gallery-panel" v-for="(item, index) in photosz" :key="index">
        <img :src="item.urls.regular" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'usernavbar',
  data() {
    return { photosz: [] }
  },
  async mounted() {
    this.photosz = (await this.$axios.post('/feed')).data
  }
}
</script>

<style scoped>
* {
    user-select: none;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
</style>
