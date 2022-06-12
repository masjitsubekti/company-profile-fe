<template>
  <div>
    <BreadcumbBlog :items="itemsRoute" title="Project List" />
    <div class="container-project-index px-5 py-3">
      <!-- <div class="d-flex justify-content-center">
      <h1>Tidak Ada Project</h1>
    </div> -->
      <div
        class="d-flex justify-content-center align-items-center"
        style="height: 450px;"
        v-if="isLoading">
        <Loading class="m-auto" />
      </div>
      <div class="" v-else>
        <b-row class="">
          <b-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            class="p-3"
            v-for="data in dataSource"
            :key="data.id">
            <div class="team-item" @click="toDetail(data)">
              <div class="team-img-box">
                <img src="~/assets/images/image-none.jpg" :alt="data.nama" v-if="data.foto == null">
                <img :src="data.foto" :alt="data.nama" v-else>
                <div class="social-profile">
                  <li>
                    <p class="text-white" style="font-weight: 600;">{{data.nama}}</p>
                  </li>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
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
    </div>
  </div>
</template>

<script>
import {
  projectUseCase
} from '~/domain/usecase'
import Loading from '~/components/shared-components/loading/Loading.vue'
import BreadcumbBlog from '~/components/shared-components/breadcumb/BreadcumbBlog.vue'
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
        name: 'project',
        query: {
          page: 1,
          limit: 12
        }
      })
    }
  },
  name: 'IndexProject',
  head() {
    return {
      title: 'Projects | PT. SELARAS HANDASA INTI PERSADA',
      meta: [{
          hid: 'description',
          name: 'description',
          content: 'you can see the list of projects PT. SELARAS HANDASA INTI PERSADA'
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Projects | PT. SELARAS HANDASA INTI PERSADA",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "you can see the list of projects PT. SELARAS HANDASA INTI PERSADA",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `${window.location.href}`
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Projects | PT. SELARAS HANDASA INTI PERSADA",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "you can see the list of projects PT. SELARAS HANDASA INTI PERSADA",
        },
      ]
    }
  },
  data() {
    return {
      dataSource: [],
      isLoading: false,
      itemsRoute: [{
        text: 'PT. SHIPT',
        to: {
          name: 'index'
        }
      }, {
        text: 'Project'
      }],
      currentPage: 1,
      rows: 0,
      perPage: 12
    };
  },
  mounted() {
    this.getProject();
  },
  methods: {

    cardHover(className) {
      console.log("hover class", className);
    },
    cardLeaveCursor(className) {
      console.log("out leave class", className);
    },
    getProject() {
      this.isLoading = true
      projectUseCase.getNoAuthor(window.location.search).then((response) => {
        if (!response.error) {
          this.dataSource = response.result.data;
          this.rows = response.result.meta.total;
        } else {
          this.$root.$bvToast.toast(`${response.message}`, {
            title: 'Error',
            toaster: 'b-toaster-bottom-center',
            // solid: true,
            autoHideDelay: 3000,
            appendToast: true,
            variant: 'danger'
          })
        }
        this.isLoading = false
      })
    },
    toDetail(prams) {
      this.$router.push({
        name: 'project-detail-id',
        params: {
          id: prams.id
        }
      })
    },
    changePage(prams) {
      console.log('parmas', prams)
      this.$router.replace({
        name: 'project',
        query: {
          page: prams,
          limit: this.$route.query.limit
        }
      }).then(() => {
        this.getProject()
      }).catch(() => {})
    }
  },
  components: {
    Loading,
    BreadcumbBlog
  }
}
</script>

<style lang="scss">
.container-project-index {
  .hover-card-content {}
}
</style>
