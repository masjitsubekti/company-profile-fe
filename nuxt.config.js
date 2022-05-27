export default {
  // https://nuxtjs.org/docs/configuration-glossary/configuration-ssr/
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PT. SELARAS HANDASA INTI PERSADA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'PT. SELARAS HANDASA INTI PERSADA is a national private company engaged in construction, particularly in the fields of Mechanical, Electrical, Electronic and Plumbing.' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo-ship.png' }],
    script: [
      { src: 'js/jquery-3.4.1.min.js', type: 'text/javascript' },
      { src: 'js/popper.min.js', type: 'text/javascript' },
      { src: 'js/bootstrap.min.js', type: 'text/javascript' },
      { src: 'js/bootstrap-select.min.js', type: 'text/javascript' },
      { src: 'js/owl.carousel.min.js', type: 'text/javascript' },
      { src: 'js/isotope.js', type: 'text/javascript' },
      { src: 'js/waypoint.min.js', type: 'text/javascript' },
      { src: 'js/jquery.counterup.min.js', type: 'text/javascript' },
      { src: 'js/particles.min.js', type: 'text/javascript' },
      { src: 'js/fancybox.js', type: 'text/javascript' },
      { src: 'js/wow.js', type: 'text/javascript' },
      { src: 'js/date-time-picker.js', type: 'text/javascript' },
      { src: 'js/jquery.filer.min.js', type: 'text/javascript' },
      { src: 'js/emojionearea.min.js', type: 'text/javascript' },
      { src: 'js/smooth-scrolling.js', type: 'text/javascript' },
      { src: 'js/tooltipster.bundle.min.js', type: 'text/javascript' },
      { src: 'js/main.js', type: 'text/javascript' }
    ]
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-loading
  // loading: {
  //   color: 'DodgerBlue',
  //   height: '10px',
  //   // continuous: true,
  //   // duration: 3000
  // },

  env: {
    API_URL: 'http://localhost:8000/api/v1',
    URL_BASE: 'http://localhost:8000/'
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
    '@/assets/theme/css/style.css',
    '@/assets/styles/scss/main.scss',
    // '@/assets/styles/css/base.css'
    // '@/assets/styles/css/tailwind.css'
  ],

  // router: {
  //   middleware: ['authenticated'],
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vee-validate.ts',
    '~/plugins/bootstrap.ts',
    '~/plugins/global-components.ts',
    '~/plugins/dev-extreme.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/@nuxtjs/moment
    '@nuxtjs/moment',
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
  build: {
    analyze: {
      analyzerMode: 'static'
    },
    transpile: [
      'vee-validate/dist/rules'
    ],
    // postcss: {
    //   plugins: {
    //     tailwindcss: {},
    //     autoprefixer: {},
    //   },
    // },
  },
}
