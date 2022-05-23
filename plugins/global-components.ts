import Vue from 'vue'
import SpinnerLoading from '~/components/shared-components/spinner/SpinnerLoading.vue'
import InputIconRightGrey from '~/components/shared-components/input/InputIconRightGrey.vue'
import ListEditDel from '~/components/shared-components/list/ListEditDel.vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

Vue.component('v-select', vSelect)

const components = { SpinnerLoading, InputIconRightGrey, ListEditDel }
   
Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})