<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-card
      class="rounded"
      border-variant="white"
      v-if="isShow">
      <ArticleDetail :data="dataForm" />
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
      dataForm: null,
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
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      this.$store.dispatch('showLoading')
      this.isShow = false
      artikelUseCase.getDataForm(this.$route.params.id).then((res) => {
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
      })
    }
  }
}
</script>

<style>

</style>
