<template>
  <header class="layout-topbar" :class="$store.state.toggleMenuCms ? 'active' : ''">
    <div class="flex items-center con-layout-topbar">
      <p class="" @click="logout">logout</p>
      <!-- {{$store.state}} -->
      <!-- <Button v-html="$icon.svg.uploadOutlined" class="btn-upload-excel p-button-secondary md:hidden hidden lg:block" @click="showingModal()" />
      <Button v-html="$icon.svg.crossAkarIcons" class="btn-event-panel p-button-secondary p-button-outlined" v-if="$store.state.toggleMenu" @click="emitToggle(false)" />
      <Button v-html="$icon.svg.menuOutlineEva" @click="emitToggle(true)" class="btn-event-panel p-button-secondary p-button-outlined" v-else />
      <div class="content-header flex items-center justify-center pl-2 lg:pl-0 md:pl-0 md:justify-between lg:justify-between flex-auto">
        <h6 class="text-center lg:text-left md:text-left">{{ ($route.meta) ? $route.meta.group : '' }}</h6>
        <div class="icon-header items-center hidden lg:flex md:flex">
          <div class="search-icon mr-4 cursor-pointer" v-html="$icon.svg.searchEva"></div>
          <div class="bell-icon cursor-pointer" v-html="$icon.svg.bellFeather"></div>
        </div>
      </div>
      <div class="lg:right-header md:right-header flex items-center">
        <div class="biodata mr-3 text-right lg:block md:block hidden">
          <p class="name-profile">{{ $store.state.appActiveUser.namaLengkap }}</p>
          <p class="role-profile color-blue-grey text-sm">{{ $store.state.appActiveUser.group.GroupName }}</p>
        </div>
      </div> -->
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('auth/logoutAccount')
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>