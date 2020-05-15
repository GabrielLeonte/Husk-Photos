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
  plugins: [
    { src: './plugins/notifications.js', ssr: false },
    { src: './plugins/infinite-scroll.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/bulma', '@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/auth'],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'token' },
          user: { url: 'me', method: 'post', propertyName: 'data' },
          logout: false
        }
      }
    }
  },
  axios: {
    baseURL: 'http://192.168.0.103:3001'
  },
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
