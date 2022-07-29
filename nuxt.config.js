export default {
  // https://nuxtjs.org/docs/configuration-glossary/configuration-ssr/
  ssr: false,
  // target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PT. SELARAS HANDASA INTI PERSADA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'PT. SELARAS HANDASA INTI PERSADA is a national private company engaged in construction, particularly in the fields of Mechanical, Electrical, Electronic and Plumbing.' },
      { hid: 'keywords', name: 'keywords', content: 'Mechanical Electrical and HVAC Contractors Indonesia, MEP Contractor Indonesia, kontraktor mekanikal dan elektrikal, kontraktor ME, mekanikal elektrikal, mechanical electrical indonesia, Plumbing, Electrical, Fire Fighting, HVAC System, Electronic, mechanical and electrical consultant, indonesia, surabaya, jakarta, bandung, buildings, hotel, apartments, shopping center, factory' },
      {
        hid: "og:title",
        property: "og:title",
        content: "PT. SELARAS HANDASA INTI PERSADA",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "PT. SELARAS HANDASA INTI PERSADA is a national private company engaged in construction, particularly in the fields of Mechanical, Electrical, Electronic and Plumbing.",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.shiptpt.com"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/logo-ship.png",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "PT. SELARAS HANDASA INTI PERSADA",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "PT. SELARAS HANDASA INTI PERSADA is a national private company engaged in construction, particularly in the fields of Mechanical, Electrical, Electronic and Plumbing.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/logo-ship.png",
      },
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
  loading: {
    color: '#05A027',
    // height: '10px',
    // continuous: true,
    // duration: 3000
  },

  env: {
    API_URL: 'https://api.shiptpt.com/api/v1',
    URL_BASE: 'https://api.shiptpt.com/',
    VERSION: 'V.1.0.0(290722)'
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
    'animate.css/animate.min.css'
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
    '@nuxtjs/google-analytics'
    // '@nuxt/postcss8',
  ],

  googleAnalytics: {
    id: 'G-89BT82XRDJ', // Use as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'G-89BT82XRDJ'
    }
  },

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
    // analyze: {
    //   analyzerMode: 'static'
    // },
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
