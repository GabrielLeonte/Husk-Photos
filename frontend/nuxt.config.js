export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Husk Photos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBGPbcjK6YkzO_cYdiOUSDpfGF2j-a0TGw',
          authDomain: 'husk-photos.firebaseapp.com',
          databaseURL: 'https://husk-photos.firebaseio.com',
          projectId: 'husk-photos',
          storageBucket: 'husk-photos.appspot.com',
          messagingSenderId: '478326428604',
          appId: '1:478326428604:web:c2485a6b6edadd44f311b9',
          measurementId: 'G-1FMYJYS64P'
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],
  axios: {},
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend(config, ctx) {}
  }
}
