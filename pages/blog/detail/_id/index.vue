<template>
  <div>
    <div class="container-article">
      <article class="article-detail">
        <h1 class="header-title">{{dataForm.title}}</h1>
        <p class="date-upload">Tanggal&nbsp;:&nbsp;{{$moment(dataForm.created_at).format('DD MMMM YYYY')}}</p>
        <div class="img-poster">
          <img :src="dataForm.image" :alt="dataForm.title" />
        </div>
        <div class="deskripsi" v-html="dataForm.deskripsi"></div>
      </article>
    </div>
  </div>
</template>

<script>
import {
  artikelUseCase
} from '~/domain/usecase'
// import ArticleDetail from '~/components/pages/article/ArticleDetail.vue'

export default {
  name: 'ArticleDetail',
  // components: {
  //   ArticleDetail
  // },
  head() {
    return {
      title: this.dataForm.title,
      meta: [{
          hid: 'description',
          name: 'description',
          content: this.dataForm.title
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.dataForm.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.dataForm.title,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.dataForm.image
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `${window.location.href}`
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.dataForm.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.dataForm.title,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.dataForm.image
        },

      ]
    }
  },
  async asyncData({
    params,
    store
  }) {
    store.dispatch('showLoading')
    let dataForm
    const response = await artikelUseCase.getOneNoAuthor(params.id)
    // console.log('response', response)
    if (!response.error) {
      dataForm = response.result.data
    } else {
      this.$root.$bvToast.toast(`${response.data.message}`, {
        title: 'Error',
        toaster: 'b-toaster-bottom-center',
        // solid: true,
        autoHideDelay: 3000,
        appendToast: true,
        variant: 'danger'
      })
    }
    store.dispatch('hideLoading')
    return {
      dataForm
      // isShow
    }
  },
  methods: {
    async setData() {
      this.dataSource = await this.dataForm
      // this.isShow = true

      console.log('kllklk', this.dataSource)

    },
    getDetail() {
      this.$store.dispatch('showLoading')
      this.isShow = false
      artikelUseCase.getOneNoAuthor(this.$route.params.id).then((res) => {
        console.log('res akakak', res)
        // if (!res.error) {
        //   const result = res.result.data
        //   this.dataForm = result
        //   this.isShow = true
        // }
        // else {
        //   this.$root.$bvToast.toast(`${res.data.message}`, {
        //     title: 'Error',
        //     toaster: 'b-toaster-bottom-center',
        //     // solid: true,
        //     autoHideDelay: 3000,
        //     appendToast: true,
        //     variant: 'danger'
        //   })
        //   // this.$router.back()
        // }
        this.$store.dispatch('hideLoading')
      })
    }
  }
}
</script>

<style lang="scss">
.container-article {
  overflow-x: hidden;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

@media screen and (max-width: 768px) {
  .container-article {
    width: 80%;
  }
}
</style>
