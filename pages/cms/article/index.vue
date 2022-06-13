<template>
  <div>
    <b-card class="rounded mb-4" border-variant="white">
      <div class="d-flex justify-content-between align-items-center rounded bg-white">
        <div class="d-flex align-items-center">
          <h5 class="mr-3">
            Artikel
          </h5>
          <b-button
            class="btn-primary rounded "
            variant="primary"
            size="sm"
            @click="addNew()">
            Tambah
          </b-button>
        </div>
        <div class="d-flex">
          <b-input-group size="sm">
            <b-input-group-prepend is-text class="rounded-left">
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="search"
              class="input-primary rounded-right"
              placeholder="Search..."
              v-model="inputSearch"
              @keypress.enter="submitSearch(inputSearch)"></b-form-input>
          </b-input-group>
        </div>
      </div>
    </b-card>
    <div class="row my-2">
      <div class="col-lg-12">
        <div class="blog-left-sidebar">
          <div class="row">
            <CardArticle
              v-for="(data, index) in dataSource"
              :key="index"
              :data="data"
              @toDetail="goToDetail" />
          </div>
        </div>
      </div><!-- end col-lg-8 -->
    </div><!-- end row -->
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
</template>

<script>
import CardArticle from '~/components/shared-components/card/CardArticle.vue'
import {
  artikelUseCase
} from '~/domain/usecase'
import {
  isEmpty
} from 'lodash'

export default {
  middleware({
    redirect,
    route
  }) {
    if (isEmpty(route.query)) {
      return redirect({
        name: 'cms-article',
        query: {
          page: 1,
          limit: 6
        }
      })
    }
  },
  components: {
    CardArticle
  },
  data() {
    return {
      dataSource: [],
      currentPage: 1,
      rows: 0,
      perPage: 6,
      inputSearch: this.$route.query.q
    }
  },
  mounted() {
    this.getDataArticle()
  },
  methods: {
    getDataArticle() {
      this.$store.dispatch('showLoading')
      artikelUseCase.getAll(window.location.search).then((response) => {
        console.log('repsonse', response)
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
            variant: 'danger'
          })
          this.$router.back()
        }
        this.$store.dispatch('hideLoading')
      })
    },
    changePage(prams) {
      this.$router.replace({
        name: 'cms-article',
        query: {
          page: prams,
          limit: this.$route.query.limit
        }
      }).then(() => {
        this.getDataArticle()
      }).catch(() => {})
    },
    goToDetail(val) {
      // console.log('det', val)
      this.$router.push({
        name: 'cms-article-edit-id',
        params: {
          id: val.id
        }
      })
    },
    addNew() {
      this.$router.push({
        name: 'cms-article-add'
      })
    },
    submitSearch(val) {
      console.log('val =>', val)
      this.$router.replace({
        name: 'cms-article',
        query: {
          page: this.$route.query.page,
          limit: this.$route.query.limit,
          q: this.inputSearch
        }
      }).then(() => {
        this.getDataArticle()
      }).catch(() => {})
    }
  }
}
</script>

<style>

</style>
