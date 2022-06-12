<template>
  <div class="layout-wrapper">
    <SidebarCms />
    <HeaderCms />
    <div
      class="layout-main"
      :class="$store.state.toggleMenuCms ? 'active' : ''"
      ref="layoutMain">
      <div class="content">
        <Nuxt />
      </div>
    </div>
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
import SidebarCms from '@/components/cms/panel/SidebarCms.vue'
import HeaderCms from '@/components/cms/panel/HeaderCms.vue'
import {
  // mapGetters,
  mapActions
} from 'vuex'
import Loading from '~/components/shared-components/loading/Loading.vue'

export default {
  middleware: 'authenticated',
  components: {
    SidebarCms,
    HeaderCms,
    Loading
  },
  data() {
    return {}
  },
  methods: {
    toggleMenu() {
      this.setSlider(!this.sliderMenu)
    },
    ...mapActions({
      setSlider: 'setToggleMenuCms'
    }),
  },
  mounted() {
    this.$store.dispatch('setWidth')
    this.$store.dispatch('initResize')
  },
  onmounted() {
    this.$store.dispatch('destroyResize')
  }
}
</script>

<style src="@/assets/styles/scss/layout.scss" lang="scss"></style>
