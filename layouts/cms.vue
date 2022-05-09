<template>
  <div class="layout-wrapper">
    <SidebarCms />
    <HeaderCms />
    <div class="layout-main" :class="$store.state.toggleMenuCms ? 'active' : ''" ref="layoutMain">
      <div class="content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarCms from '@/components/cms/panel/SidebarCms.vue'
import HeaderCms from '@/components/cms/panel/HeaderCms.vue'
import {
  // mapGetters,
  mapActions
} from 'vuex'

export default {
  middleware: 'authenticated',
  components: {
    SidebarCms,
    HeaderCms
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
