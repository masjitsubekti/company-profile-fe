<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <transition
      name="load-transition"
      enter-active-class="animate__animated animate__fast animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut animate__faster">
      <div
        class=""
        v-if="$store.state.loading"
        style="background: rgba(0, 0, 0, 0.2); z-index: 1049; position: fixed; top: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        <Loading />
      </div>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/panel/Header.vue'
import Footer from '@/components/panel/Footer.vue'
import Loading from '~/components/shared-components/loading/Loading.vue'
// import TheFooter from '@/components/Layouts/Footer.vue'

export default {
  components: {
    Header,
    Footer,
    Loading
  },
}
</script>
