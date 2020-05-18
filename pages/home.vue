<template>
  <div class="container" style="margin-top: 10vh;">
    <div
      class="columns is-multiline is-mobile "
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="120"
    >
      <div class="column is-full" v-for="(item, index) in photos" :key="index">
        <div class="post">
          <div class="left">
            <img class="image" width="500" :src="item.urls.regular" />
          </div>
          <div class="right">
            <!-- post title -->
            <div class="post-title">
              {{ capitalize(item.alt_description) }}
            </div>

            <!-- post subtitle -->
            <div class="post-subtitle">
              <span>from {{ item.user.name }} </span>
              <span v-if="item.location.title">
                in {{ item.location.title }}
              </span>
              <span v-if="item.promoted_at">
                on {{ months[new Date(item.promoted_at).getMonth()] }}
                {{ new Date(item.promoted_at).getDay() }},
                {{ new Date(item.promoted_at).getFullYear() }}
              </span>
            </div>

            <!-- post camera -->
            <div class="data-rows">
              <div class="columns is-mobile is-multiline">
                <div class="column object">
                  <span class="obj-title">Camera Make</span>
                  <span class="obj-subtitle">{{ item.exif.make }}</span>
                </div>
                <div class="column object">
                  <span class="obj-title">Camera Model</span>
                  <span class="obj-subtitle">{{ item.exif.model }}</span>
                </div>
                <div class="column object">
                  <span class="obj-title">Focal Lenght</span>
                  <span class="obj-subtitle"
                    >{{ item.exif.focal_length }} mm</span
                  >
                </div>
              </div>

              <!-- second raw -->
              <div class="columns is-mobile is-multiline">
                <div class="column object">
                  <span class="obj-title">Aperture</span>
                  <span class="obj-subtitle">f/{{ item.exif.aperture }}</span>
                </div>
                <div class="column object">
                  <span class="obj-title">Shutter Speed</span>
                  <span class="obj-subtitle">
                    {{ item.exif.exposure_time }}s
                  </span>
                </div>
                <div class="column object">
                  <span class="obj-title">ISO</span>
                  <span class="obj-subtitle">{{ item.exif.iso }} mm</span>
                </div>
              </div>

              <!-- line -->
              <div class="line"></div>

              <!-- last raw -->
              <div class="columns is-multiline is-mobile views">
                <div class="column object">
                  <span class="views-title">Views</span>
                  <span class="views-subtitle">{{ item.views }}</span>
                </div>
                <div class="column object">
                  <span class="views-title">Downloads</span>
                  <span class="views-subtitle"> {{ item.downloads }} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'usernavbar',
  data() {
    return {
      photos: [],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    }
  },
  async mounted() {
    this.photos = (await this.$axios.post('/feed')).data
  },
  methods: {
    capitalize(text) {
      try {
        if (text)
          return text
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
      } catch (err) {
        if (err) alert(err)
      }
    },
    async loadMore() {
      try {
        const data = await this.$axios.post('/feed')
        data.data.forEach(element => {
          this.photos.push(element)
        })
      } catch (err) {
        if (err) alert(err)
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.column {
  width: 100%;
  margin-bottom: 6vh;
}

.right {
  float: center;
  width: 60%;
  display: grid;
}

.post-title {
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  width: 100%;
  font-weight: 700;
  margin-left: 30px;
  color: #515151;
}

.post-subtitle {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #000000;
  margin-left: 35px;
}

.data-rows {
  max-width: 70%;
  margin-top: 5vh;
  margin-left: 5vh;
  float: center;
}

.object {
  display: grid;
}

.obj-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  display: grid;
  color: #595959;
}

.obj-subtitle {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 14px;
  display: grid;
  color: #000000;
}
.line {
  content: '';
  width: 100%;
  border-bottom: solid #a3a3a3 0.5px;
}

.views {
  margin-top: 5vh;
}

.views-title {
  color: #000000;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
}

.views-subtitle {
  color: #595959;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
}

@media screen and (min-width: 900px) {
  .left {
    float: left;
    display: grid;
  }
}

@media screen and (max-width: 1300px) {
  .right {
    float: right;
    right: 0;
    position: absolute;
  }
}

@media screen and (max-width: 900px) {
  * {
    margin: auto 0;
  }

  .right {
    position: relative;
    float: left;
    width: 100%;
  }

  .left:required {
    float: center !important;
    display: grid !important;
  }
  .column {
    display: block;
  }

  .post-title,
  .post-subtitle {
    margin: auto;
  }

  img {
    margin: 0 auto;
  }
}
</style>
