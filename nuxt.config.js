export default {
  // https://nuxtjs.org/docs/configuration-glossary/configuration-ssr/
  ssr: true,
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PT. SELARAS HANDASA INTI PERSADA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo-ship.png' }],
    script: [
      { src: 'js/jquery-3.4.1.min.js' },
      { src: 'js/popper.min.js' },
      { src: 'js/bootstrap.min.js' },
      { src: 'js/bootstrap-select.min.js' },
      { src: 'js/owl.carousel.min.js' },
      { src: 'js/isotope.js' },
      { src: 'js/waypoint.min.js' },
      { src: 'js/jquery.counterup.min.js' },
      { src: 'js/particles.min.js' },
      { src: 'js/fancybox.js' },
      { src: 'js/wow.js' },
      { src: 'js/date-time-picker.js' },
      { src: 'js/jquery.filer.min.js' },
      { src: 'js/emojionearea.min.js' },
      { src: 'js/smooth-scrolling.js' },
      { src: 'js/tooltipster.bundle.min.js' },
      { src: 'js/main.js' }
    ]
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-loading
  loading: {
    color: 'DodgerBlue',
    height: '10px',
    // continuous: true,
    // duration: 3000
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/theme/css/bootstrap.min.css',
    '@/assets/theme/css/font-awesome.min.css',
    '@/assets/theme/css/line-awesome.css',
    '@/assets/theme/css/animate.min.css',
    '@/assets/theme/css/owl.carousel.min.css',
    '@/assets/theme/css/owl.theme.default.min.css',
    '@/assets/theme/css/bootstrap-select.min.css',
    '@/assets/theme/css/fancybox.css',
    '@/assets/theme/css/tooltipster.bundle.css',
    '@/assets/theme/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
