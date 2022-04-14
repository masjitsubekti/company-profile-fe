<template>
  <div class="layout-wrapper">
    <SidebarCms />
    <HeaderCms />
    <div class="layout-main" :class="$store.state.toggleMenuCms ? 'active' : ''" ref="layoutMain">
      <div class="content">
        <p @click="open()">aaaaaaaaaaa</p>
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarCms from '@/components/cms/panel/SidebarCms.vue'
import HeaderCms from '@/components/cms/panel/HeaderCms.vue'

export default {
  components: {
    SidebarCms,
    HeaderCms
  },
  data() {
    return {}
  },
  methods: {
    open() {
      this.$store.dispatch('setToggleMenuCms', true)
    }
  }
}
</script>

<style src="@/assets/styles/scss/layout.scss" lang="scss"></style>
