<template>
  <div>
    <BreadcumbBlog :items="itemsRoute" title="Who We Are" />
    <!-- <CaraouselAbout /> -->
    <VisiMisi />
  </div>
</template>

<script>
import VisiMisi from '~/components/about-us/VisiMisi.vue'
import CaraouselAbout from '~/components/about-us/CaraouselAbout.vue'
import BreadcumbBlog from '~/components/shared-components/breadcumb/BreadcumbBlog.vue'

export default {
  name: 'IndexAbout',
  head() {
    return {
      title: 'About | PT. SELARAS HANDASA INTI PERSADA',
      meta: [{
          hid: 'description',
          name: 'description',
          content: 'you can know all about PT. SELARAS HANDASA INTI PERSADA'
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "About | PT. SELARAS HANDASA INTI PERSADA",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "you can know all about PT. SELARAS HANDASA INTI PERSADA",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `${window.location.href}`
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "About | PT. SELARAS HANDASA INTI PERSADA",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "you can know all about PT. SELARAS HANDASA INTI PERSADA",
        },
      ]
    }
  },
  components: {
    VisiMisi,
    CaraouselAbout,
    BreadcumbBlog
  },
  data() {
    return {
      itemsRoute: [{
        text: 'PT. SHIPT',
        to: {
          name: 'index'
        }
      }, {
        text: 'Who We Are'
      }],
    }
  }
}
</script>
