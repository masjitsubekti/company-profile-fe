<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <!-- {{dataForm}} -->
    <b-card
      class="rounded"
      border-variant="white"
      v-if="isShow">
      <!-- <ArticleDetail :data="dataForm" /> -->
      <div class="article-detail">
        <h1 class="header-title">{{dataForm.title}}</h1>
        <p class="date-upload">Tanggal&nbsp;:&nbsp;{{$moment(dataForm.created_at).format('DD MMMM YYYY')}}</p>
        <div class="img-poster">
          <img :src="dataForm.image" :alt="dataForm.title" />
        </div>
        <div class="deskripsi" v-html="dataForm.deskripsi"></div>
      </div>
    </b-card>
  </div>
</template>

<script>
import ArticleDetail from '~/components/pages/article/ArticleDetail.vue'
import {
  artikelUseCase
} from '~/domain/usecase'

export default {
  name: 'ArticleDetail',
  components: {
    ArticleDetail
  },
  data() {
    return {
      dataForm: {},
      isShow: false,
      items: [{
          text: 'Artikel',
          to: {
            name: 'cms-article'
          }
        },
        {
          text: 'Detail Artikel',
          active: true
        }
      ]
    }
  },
  // created() {

  //   },
  mounted() {
    this.getDetail()
  },
  methods: {
    async getDetail() {
      this.$store.dispatch('showLoading')
      this.isShow = false
      const res = await artikelUseCase.getDataForm(this.$route.params.id)
      if (res.data) {
        if (!res.data.error) {
          const result = res.data.result.data
          this.dataForm = result
          this.isShow = true
        } else {
          this.$root.$bvToast.toast(`${res.data.message}`, {
            title: 'Error',
            toaster: 'b-toaster-bottom-center',
            // solid: true,
            autoHideDelay: 3000,
            appendToast: true,
            variant: 'danger'
          })
          this.$router.back()
        }
      }
      this.$store.dispatch('hideLoading')
    }
  }
}
</script>

<style>

</style>
