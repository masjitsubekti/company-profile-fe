<template>
  <section class="cta-area padding-top-115px padding-bottom-90px text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 column-td-half body-card-ser-pro" v-for="(data, index) in listCard" :key="index">
          <div class="bg-image" :style="{backgroundImage: `url(${data.bg})`}">
          </div>
          <div class="bg-text">
            <h2 class="widget-title mt-4 mb-2">{{data.title}}</h2>
            <p v-html="data.subTitle"></p>
          </div><!-- end post-card-content -->
        </div><!-- end col-lg-4 -->
      </div><!-- end row -->
    </div><!-- end container -->
  </section>
</template>

<script>
export default {
  name: 'ServiceProduct',
  data() {
    return {
      listCard: [{
          bg: require('~/static/images/shipt_mekanikal.jpg'),
          title: 'Mechanical',
          subTitle: '<b>Mechanical</b>  work is work related to large machine tools, such as elevators & escalators for large buildings, air conditioning, and installation of water pumps, hydrants, seprinkels, plumbing & other supporting installations. We Serve Work In Large And Medium Scopes Such As In Malls, Hotels, Offices, Warehousing, Factories, Airports, Ports, Housing & Other Work'
        },
        {
          bg: require('~/static/images/shipt_elektrikal_2.jpg'),
          title: 'Mechanical',
          subTitle: '<b>Mechanical</b>  work is work related to large machine tools, such as elevators & escalators for large buildings, air conditioning, and installation of water pumps, hydrants, seprinkels, plumbing & other supporting installations. We Serve Work In Large And Medium Scopes Such As In Malls, Hotels, Offices, Warehousing, Factories, Airports, Ports, Housing & Other Work'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.body-card-ser-pro {
  position: relative;

  .bg-image {
    /* Add the blur effect */
    filter: blur(4px);
    -webkit-filter: blur(4px);

    /* Full height */
    height: 100%;
    min-height: 300px;
    width: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bg-text {
    // border: 3px solid #f1f1f1;
    // background-color: rgb(0, 0, 0);
    /* Fallback color */
    // background-color: rgba(0, 0, 0, 0.4);
    /* Black w/opacity/see-through */
    color: white;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    padding: 20px;
    text-align: center;
  }
}

// .custom-post-card {
//   background-image: url(~/assets/images/shipt-mekanikal.jpg);
// }
</style>
