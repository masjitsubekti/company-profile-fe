<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/panel/Header.vue'
import Footer from '@/components/panel/Footer.vue'
// import TheFooter from '@/components/Layouts/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
}
</script>
