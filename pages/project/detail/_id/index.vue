<template>
  <div>
    <breadcumb-blog :title="dataSource.nama" class="breadcumb-index" />
    <div class="px-5 py-3">
      <b-breadcrumb :items="items" class="breadcumb-index"></b-breadcrumb>
      <div class="mb-5">
        <swiper
          :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
          :spaceBetween="10"
          :navigation="false"
          :thumbs="{ swiper: thumbsSwiper }"
          class="mySwiper2">
          <swiper-slide v-for="value in dataSource.project_image" :key="value.id"><img :src="value.foto" /></swiper-slide>
        </swiper>
        <swiper
          @swiper="setThumbsSwiper"
          :spaceBetween="10"
          :slidesPerView="4"
          :freeMode="true"
          :watchSlidesProgress="true"
          class="mySwiper">
          <swiper-slide v-for="value in dataSource.project_image" :key="value.id"><img :src="value.foto" /></swiper-slide>
        </swiper>
      </div>
      <div>
        <div class="mb-3">
          <h4 class="font-weight-bold text-dark">Description</h4>
          <span class="section-divider m-0 p-0"></span>
        </div>
        <div>
          <span class="text-description mb-1">
            <p class="title">Project Name :&nbsp;</p>
            <p class="sub-title">{{dataSource.nama}}</p>
          </span>
          <span class="text-description mb-1">
            <p class="title">Client :&nbsp;</p>
            <p class="sub-title">{{dataSource.nama}}</p>
          </span>
          <span class="text-description mb-1">
            <p class="title">Location :&nbsp;</p>
            <p class="sub-title">{{dataSource.alamat}}</p>
          </span>
          <span class="text-description mb-1">
            <p class="title">Scope :&nbsp;</p>
            <p class="sub-title">{{dataSource.scope}}</p>
          </span>
          <span class="text-description mb-1">
            <p class="title">Status :&nbsp;</p>
            <p class="sub-title">{{dataSource.status_project}}</p>
          </span>
          <span class="text-description mb-1">
            <p class="title">Year Completed :&nbsp;</p>
            <p class="sub-title">{{dataSource.tanggal}}</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Thumbs
} from 'swiper';

import {
  SwiperCore,
  Swiper,
  SwiperSlide
} from 'swiper-vue2'

SwiperCore.use([Thumbs])

import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'
import 'swiper/components/thumbs/thumbs.min.css'
import {
  projectUseCase
} from '~/domain/usecase';
import Loading from '~/components/shared-components/loading/Loading.vue';
import BreadcumbBlog from '~/components/shared-components/breadcumb/BreadcumbBlog.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    Loading,
    BreadcumbBlog
  },
  head() {
    return {
      title: this.dataSource.nama,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.dataSource.nama
      },
      {
        hid: "og:title",
        property: "og:title",
        content: this.dataSource.nama,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: this.dataSource.nama,
      },
      {
        hid: "og:url",
        property: "og:url",
        content: `${window.location.href}`
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: this.dataSource.nama,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: this.dataSource.nama,
      }
    ]
  }
},
async asyncData({
    params,
    store
  }) {
    store.dispatch('showLoading')
    const response = await projectUseCase.getOneNoAuthor(params.id)
    let dataSource
    if (!response.error) {
      dataSource = response.result.data
    }
    store.dispatch('hideLoading')
    return {
      response,
      dataSource,
      items: [{
          text: 'PT. SHIPT',
          to: {
            name: 'index'
          }
        }, {
          text: 'Project',
          to: {
            name: 'project'
          },
        },
        {
          text: dataSource.nama
        }
      ]
    }
  },
  data() {
    return {
      thumbsSwiper: null,
      modules: [Thumbs],
      isLoading: false,
    }
  },
  fetch() {},
  mounted() {
    // console.log('mounted', this.dataSource)
    // this.getDetailProject()
    // this.setThumbsSwiper()
  },
  methods: {
    setThumbsSwiper(swipper) {
      // console.log('click thumbs', swipper)
      this.thumbsSwiper = swipper
    },
    // getDetailProject() {
    //   // this.isLoading = true
    //   this.$store.dispatch('showLoading')
    //   projectUseCase.getOneNoAuthor(this.$route.params.id).then((response) => {
    //     if (!response.error) {
    //       this.dataSource = response.result.data
    //       console.log('async data', this.dataSource)
    //     }
    //   this.$store.dispatch('hideLoading')
    //   })
    // }
  }
}
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 100%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-description {
  display: flex;

  .title {
    color: #777777;
    font-weight: 700 !important;
  }

  .sub-title {
    color: #777777;
    font-weight: 400 !important;
  }
}
</style>
