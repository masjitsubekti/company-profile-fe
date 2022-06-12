<template>
  <section>
    <div class="section-video">
      <video autoplay loop muted>
        <source src="~/assets/videos/about-video.mp4" type="video/mp4">
        <!-- <source src="<?=URL?>public/videos/vid.webm" type="video/webm"> -->
      </video>
    </div>
  </section><!-- end breadcrumb-area -->
</template>

<script>
export default {
  name: 'CaraouselAbout'
}
</script>

<style lang="scss">
.section-video {
  width: 100%;
}

.section-video video {
  width: 100%;
  min-height: 100%;
}

// @media screen and (max-width: 1300px) {

// }

// @media screen and (max-width: 900px) {

// }

// @media screen and (max-width: 650px) {

// }

// @media screen and (max-width: 450px) {
// }

</style>
