<template>
  <div>
    <SliderHome />
    <ScopeOfWork />
    <ServiceProduct />
  </div>
</template>

<script lang="ts">
import ScopeOfWork from '~/components/home/ScopeOfWork.vue'
import ServiceProduct from '~/components/home/ServiceProduct.vue'
import SliderHome from '~/components/home/SliderHome.vue'

export default {
  name: 'IndexPage',
  // layout: 'default',
  components: {
    ScopeOfWork,
    ServiceProduct,
    SliderHome,
  },
  // beforeCreate() {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start()
  //     // setTimeout(() => this.$nuxt.$loading.finish(), 2000)
  //   })

  // },
  // created() {},

  // mounted() {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.finish()
  //     // setTimeout(() => this.$nuxt.$loading.finish(), 2000)
  //   })
  // }
}
</script>
