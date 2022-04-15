<template>
  <section class="slider-area">
    <b-carousel id="carousel-1" v-model="slide" :interval="5000" controls indicators background="#ababab" img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <b-carousel-slide img-src="~/static/images/pt.png">
        <div class="container-slot-caraousel" style="">
          <div>
            <h1 class="color-green-secondary mb-3">PT. SELARAS HANDASA INTI PERSADA</h1>
            <h3 class="text-white">Our Team Has More Experience
              In Mechanical And Electrical Field For More Than 10 Years</h3>
          </div>
        </div>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="~/static/images/mekanikal.png">
        <div class="container-slot-caraousel" style="">
          <div>
            <h2 class="text-white mb-2">Mechanical</h2>
            <p><b>Mechanical</b> work is work related to large machine tools, such as elevators & escalators for large buildings, air conditioning, and installation of water pumps, hydrants, seprinkels, plumbing & other supporting installations. We Serve Work In Large And Medium Scopes Such As In Malls, Hotels, Offices, Warehousing, Factories, Airports, Ports, Housing & Other Work</p>
          </div>
        </div>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="~/static/images/elektrikal.png" alt="elektrikal">
        </template>
        <div class="container-slot-caraousel" style="">
          <div>
            <h2 class="text-white mb-2">Electrical</h2>
            <p><b>Electrical</b> work is work related to electrical installations. This work includes TM & Transformer panels, medium voltage power cables, low voltage electrical panels, distribution box boxes, electric power cables, low voltage, lighting lamp armatures, switches, socket and key tags, lighting installation cables, socket installation, and lightning protection system.</p>
          </div>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </section>
</template>

<script>
import {
  BCarousel
} from 'bootstrap-vue'

export default {
  name: 'SliderHome',
  components: {
    BCarousel
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss">
.container-slot-caraousel {
  top: 50%;
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
