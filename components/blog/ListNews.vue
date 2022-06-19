<template>
  <div>
    <section class="blog-grid section-padding">
      <div class="container">
        <div class="sidebar-widget">
          <h3 class="widget-title">Search</h3>
          <span class="section-divider"></span>
          <div class="contact-form-action">
            <div class="form-group">
              <input class="form-control" name="search" placeholder="Search here..." @keypress.enter="submitSearch(inputSearch)" v-model="inputSearch" />
              <button type="button" class="search-icon">
                <span class="la la-search" @click="submitSearch(inputSearch)"></span>
              </button>
            </div>
          </div>
        </div>
        <!-- end sidebar-widget -->
        <div class="row">
          <div class="col-lg-12">
            <div class="blog-left-sidebar">
              <div class="row">
                <!-- eslint-disable -->
                <CardArticle
                  v-for="(data, index) in dataSource"
                  :key="index"
                  :data="data"
                  @toDetail="goToDetail"
                  v-if="dataSource.length > 0" />
                <h5 class="mx-auto mt-5 mb-5" v-else>Belum ada artikel</h5>
              </div>
            </div>
          </div>
          <!-- end col-lg-8 -->
        </div>
        <!-- end row -->
        <div class="d-flex justify-content-center" v-if="dataSource.length > 0">
          <b-pagination
            class="pagination-primary"
            v-model="currentPage"
            @change="changePage"
            pills
            :total-rows="rows"
            :per-page="perPage"></b-pagination>
        </div>
      </div>
      <!-- end container -->
    </section>
  </div>
</template>

<script>
import CardArticle from '~/components/shared-components/card/CardArticle.vue'
import {
  artikelUseCase
} from '~/domain/usecase'

export default {
  name: 'ListNews',
  components: {
    CardArticle,
  },
  data() {
    return {
      dataSource: [],
      currentPage: 1,
      rows: 0,
      perPage: 6,
      inputSearch: this.$route.query.q,
    }
  },
  mounted() {
    this.getDataArticle()
  },
  methods: {
    getDataArticle() {
      this.$store.dispatch('showLoading')
      artikelUseCase.getNoAuthor(window.location.search).then((response) => {
        // console.log('repsonse', response)
        if (!response.error) {
          this.dataSource = response.result.data
          this.rows = response.result.meta.total
        } else {
          this.$root.$bvToast.toast(`${response.message}`, {
            title: 'Error',
            toaster: 'b-toaster-bottom-center',
            // solid: true,
            autoHideDelay: 3000,
            appendToast: true,
            variant: 'danger',
          })
        }
        this.$store.dispatch('hideLoading')
      })
    },
    changePage(prams) {
      this.$router
        .replace({
          name: 'blog',
          query: {
            page: prams,
            limit: this.$route.query.limit,
          },
        })
        .then(() => {
          this.getDataArticle()
        })
        .catch(() => {})
    },
    goToDetail(val) {
      // console.log('det', val)
      this.$router.push({
        name: 'blog-detail-id',
        params: {
          id: val.id,
        },
      })
    },
    submitSearch(val) {
      this.$router
        .replace({
          // name: 'blog',
          query: {
            page: this.$route.query.page,
            limit: this.$route.query.limit,
            q: val,
          },
        })
        .then(() => {
          this.getDataArticle()
        })
        .catch(() => {})
    },
  },
}
</script>

<style></style>
