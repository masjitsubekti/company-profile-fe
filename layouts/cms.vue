<template>
  <div class="layout-wrapper">
    <SidebarCms />
    <HeaderCms />
    <div class="layout-main">
      aaaaaaaaaaa
      <Nuxt />
    </div>
    goog
  </div>
</template>

<script>
import SidebarCms from '@/components/cms/panel/SidebarCms.vue'
import HeaderCms from '@/components/cms/panel/HeaderCms.vue'

export default {
  components: {
    SidebarCms,
    HeaderCms
  }
}
</script>

<style src="@/assets/styles/scss/layout.scss" lang="scss"></style>
