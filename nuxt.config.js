export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'compro-sipt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: '/assets/theme/js/jquery-3.4.1.min.js' },
      { src: '/assets/theme/js/popper.min.js' },
      { src: '/assets/theme/js/bootstrap.min.js' },
      { src: '/assets/theme/js/bootstrap-select.min.js' },
      { src: '/assets/theme/js/owl.carousel.min.js' },
      { src: '/assets/theme/js/isotope.js' },
      { src: '/assets/theme/js/waypoint.min.js' },
      { src: '/assets/theme/js/jquery.counterup.min.js' },
      { src: '/assets/theme/js/particles.min.js' },
      { src: '/assets/theme/js/fancybox.js' },
      { src: '/assets/theme/js/wow.js' },
      { src: '/assets/theme/js/date-time-picker.js' },
      { src: '/assets/theme/js/jquery.filer.min.js' },
      { src: '/assets/theme/js/emojionearea.min.js' },
      { src: '/assets/theme/js/smooth-scrolling.js' },
      { src: '/assets/theme/js/tooltipster.bundle.min.js' },
      { src: '/assets/theme/js/main.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/theme/css/bootstrap.min.css',
    '@/assets/theme/css/font-awesome.min.css',
    '@/assets/theme/css/line-awesome.css',
    '@/assets/theme/css/animate.min.css',
    // '@/assets/theme/css/owl.carousel.min.css',
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
