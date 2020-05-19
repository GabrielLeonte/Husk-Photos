<template>
  <div style="margin-top: 10vh">
    <div class="container">
      <span class="span">Explore </span>
    </div>
    <div
      class="gallery"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="120"
    >
      <div
        class="gallery-panel filter"
        v-for="(item, index) in photosz"
        :key="index"
      >
        <span class="view" @click="post(item.id)">View</span>
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
  },
  methods: {
    async loadMore() {
      try {
        const data = await this.$axios.post('/feed')
        data.data.forEach(element => {
          this.photosz.push(element)
        })
      } catch (err) {
        if (err) alert(err)
      }
    },
    post(id) {
      this.$router.push("/post/" + id)
    }
  }
}
</script>

<style scoped>
* {
  user-select: none;
}

.span {
  position: relative;
  font-weight: 700;
  margin-left: 5px;
  color: #595959;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 94rem;
  margin: 1rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 100%;
  height: 22vw;
  z-index: 999;
  object-fit: cover;
  border-radius: 0.75rem;
}

.filter:hover {
  filter: grayscale(80%);
  z-index: 999;
}

.filter:hover .view {
  opacity: 1;
}

.view {
  position: relative;
  font-family: 'Rock Salt', cursive;
  font-weight: 700;
  top: 50%;
  left: 40%;
  z-index: 1000;
  transform: translateY(-50%);
  transform: translateX(-50%);
  font-size: 30px;
  color: #ffffff;
  opacity: 0;
}

.view:hover {
  text-decoration: underline;
}
</style>
