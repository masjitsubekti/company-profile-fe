<template>
  <div>
    <b-sidebar class="left-panel" no-header shadow v-model="showPanel">
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
      <template #footer>
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">Footer</strong>
          <b-button size="sm" @click="showPanel = false">Close</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import {
  BSidebar
} from 'bootstrap-vue'
import Cookies from 'js-cookie'

export default {
  name: 'SidebarCms',
  components: {
    BSidebar
  },
  data() {
    return {
      // showPanel: true,
    }
  },
  mounted() {
    // console.log('Cookies', Cookies.get('SIPT'))
    // console.log('mount', this.$store)
  },
  computed: {
    showPanel: {
      get() {
        return this.$store.state.toggleMenuCms
      },
      set(newValue) {
        console.log('set', newValue)
        this.$store.dispatch('setToggleMenuCms', newValue)
      }
    }
  },
  // methods: {
  //   hide() {
  //     this.$store.dispatch('setToggleMenuCms', false)
  //   }
  // }
}
</script>
