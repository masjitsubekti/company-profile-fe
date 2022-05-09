<template>
  <header class="layout-topbar" :class="$store.state.toggleMenuCms ? 'active' : ''">
    <div class="con-layout-topbar">
      <b-button size="sm" @click="showHide()">
        <b-icon icon="x" aria-hidden="true" font-scale="1.5" v-if="$store.state.toggleMenuCms"></b-icon>
        <b-icon icon="list" aria-hidden="true" font-scale="1.5" v-if="!$store.state.toggleMenuCms"></b-icon>
      </b-button>
      <div class="d-flex align-items-center">
        <p class="mr-1" v-if="$store.state.auth.dataUser">{{ $store.state.auth.dataUser.nama }}</p>
        <p class="mr-1" v-else>Admin</p>
        <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
          <template #button-content>
            <b-avatar size="md" :text="$store.state.auth.dataUser.nama.charAt(0)" v-if="$store.state.auth.dataUser"></b-avatar>
            <b-avatar size="md" text="A" v-else></b-avatar>
          </template>
          <b-dropdown-item @click="logout()">Logout</b-dropdown-item>
          <!-- <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here...</b-dropdown-item> -->
        </b-dropdown>
      </div>
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
import {
  BAvatar,
  BDropdown
} from 'bootstrap-vue'
import {
  authUseCase
} from '~/domain/usecase'

export default {
  components: {
    BAvatar,
    BDropdown,
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logoutAccount').then(() => {
        this.$router.push({
          name: 'login',
        })
      }).catch((err) => {
        console.log(err)
      })
    },
    showHide() {
      this.$store.dispatch('setToggleMenuCms', !this.$store.state.toggleMenuCms)
    },
  },
}
</script>
