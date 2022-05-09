<template>
  <div>
    <b-sidebar
      class="left-panel"
      no-header
      shadow
      :no-close-on-route-change="true"
      v-model="showPanel"
    >
      <div class="list-menu">
        <div class="px-3 py-2 mb-3">
          <div class="header d-flex justify-content-center align-items-center">
            <img
              src="~/assets/images/logo/logo-ship.png"
              alt="logo"
              style="height: 50px; object-fit: cover"
            />
            <!-- <b-icon icon="x" style="font-size: 3rem;" font-scale="2" class="cursor-pointer" @click="hide()"></b-icon> -->
          </div>
        </div>
        <div>
          <div class="px-3">
            <NuxtLink
              :to="{ name: data.routeName }"
              v-for="(data, i) in listMenus"
              :key="i"
              class="d-flex align-items-center py-2 item-menu cursor-pointer"
              :class="activeClass(data)"
            >
              <b-icon
                :icon="data.icon"
                aria-hidden="true"
                font-scale="1.5"
                class="mr-2 icon"
              ></b-icon>
              <h6>{{ data.title }}</h6>
            </NuxtLink>
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
import { BSidebar } from 'bootstrap-vue'

export default {
  name: 'SidebarCms',
  components: {
    BSidebar,
  },
  data() {
    return {
      // showPanel: true,
      listMenus: [
        {
          routeName: 'cms-dashboard',
          title: 'Dashboard',
          icon: ''
        },
        // {
        //   routeName: 'cms-layanan',
        //   title: 'Layanan'
        // },
        {
          routeName: 'cms-client',
          title: 'Client',
          icon: 'people-fill'
        },
        {
          routeName: 'cms-jenis-project',
          title: 'Jenis Project',
        },
      ],
    }
  },
  computed: {
    showPanel: {
      get() {
        return this.$store.state.toggleMenuCms
      },
      set(newValue) {
        this.$store.dispatch('setToggleMenuCms', newValue)
      },
    },
  },
  methods: {
    hide() {
      this.$store.dispatch('setToggleMenuCms', false)
    },
    activeClass(val) {
      if (val.routeName == this.$route.name) {
        return 'active'
      }
      return ''
    },
  },
  // mounted() {
  //   console.log('this', this.$route)
  // }
}
</script>
