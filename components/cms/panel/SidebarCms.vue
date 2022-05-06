<template>
  <div>
    <b-sidebar class="left-panel" no-header shadow v-model="showPanel">
      <div class="px-3 py-2 mb-2">
        <div class="header d-flex justify-content-center align-items-center">
          <img src="~/assets/images/logo/logo-ship.png" alt="logo" style="height: 50px; object-fit: cover;" />
          <!-- <b-icon icon="x" style="font-size: 3rem;" font-scale="2" class="cursor-pointer" @click="hide()"></b-icon> -->
        </div>
      </div>
      <div>
        <div class="px-3">
          <div v-for="(data, i) in listMenus" :key="i" class="d-flex align-items-center">
            <b-icon icon="x" aria-hidden="true" font-scale="1.5" class="mr-2"></b-icon>
            <p>{{data.title}}</p>
          </div>
        </div>
      </div>
      <!-- <template #footer>
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">Footer</strong>
          <b-button size="sm" @click="showPanel = false">Close</b-button>
        </div>
      </template> -->
    </b-sidebar>
  </div>
</template>

<script>
import {
  BSidebar,
} from 'bootstrap-vue'

export default {
  name: 'SidebarCms',
  components: {
    BSidebar,
  },
  data() {
    return {
      // showPanel: true,
      listMenus: [{
        routeName: 'cms-dashboard',
        title: 'Dashboard'
      }]
    }
  },
  computed: {
    showPanel: {
      get() {
        return this.$store.state.toggleMenuCms
      },
      set(newValue) {
        this.$store.dispatch('setToggleMenuCms', newValue)
      }
    }
  },
  methods: {
    hide() {
      this.$store.dispatch('setToggleMenuCms', false)
    }
  }
}
</script>
