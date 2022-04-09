<template>
  <div>
    <CaraouselAbout />
    <VisiMisi />
  </div>
</template>

<script>
import VisiMisi from '~/components/about-us/VisiMisi.vue'
import CaraouselAbout from '~/components/about-us/CaraouselAbout.vue'
export default {
  name: 'IndexAbout',
  components: {
    VisiMisi,
    CaraouselAbout
  }
}
</script>
