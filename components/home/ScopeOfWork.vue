<template>
  <section class="category-area padding-bottom-90px">
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <div class="section-heading">
            <!-- <h5 class="section__meta">Categories</h5> -->
            <h2 class="section__title">Our Scope Of Work</h2>
            <span class="section-divider"></span>
          </div><!-- end section-heading -->
        </div><!-- end col-lg-9 -->
      </div><!-- end row -->
      <div class="category-wrapper margin-top-28px">
        <div class="row">
          <div class="col-lg-4 column-td-half" v-for="(data, index) in listCard" :key="index">
            <div class="category-item">
              <img :src="data.bg" alt="">
              <div class="category-content">
                <div class="category-inner">
                  <h3 class="cat__title">{{data.title}}</h3>
                  <p class="cat__meta"></p>
                  <a class="theme-btn"></a>
                </div>
              </div><!-- end category-content -->
            </div><!-- end category-item -->
          </div><!-- end col-lg-4 -->
        </div><!-- end row -->
      </div><!-- end category-wrapper -->
    </div><!-- end container -->
  </section><!-- end category-area -->
</template>

<script>
export default {
  name: 'ScopeOfWork',
  data() {
    return {
      listCard: [{
          title: 'Fire Fighting Hydrant System',
          bg: require('~/static/images/fire-fighting-hydrant-system.jpg')
        },
        {
          title: 'Electronic Instalation',
          bg: require('~/static/images/electronic-instalation.jpg')
        },
        {
          title: 'Electrical System Panel Genset',
          bg: require('~/static/images/electrical-system-panel-genset.jpg')
        },
        {
          title: 'Air Conditioner System',
          bg: require('~/static/images/air-conditioner-system.jpg')
        },
        {
          title: 'Plumbing System',
          bg: require('~/static/images/plumbing-system.jpg')
        },
        {
          title: 'Fire Alarm System',
          bg: require('~/static/images/fire-alarm-system.jpg')
        }
      ]
    }
  }
}
</script>
