<template>
  <div>
    <BreadcumbBlog :items="itemsRoute" title="Project List" />
    <div class="container-project-index px-5 py-3">
      <!-- <div class="d-flex justify-content-center">
      <h1>Tidak Ada Project</h1>
    </div> -->
      <div class="row-filter mb-3" v-if="listTypeProject.length > 0 && dataSource.length > 0">
        <div class="btn-filter" :class="!typeProject ? 'select' : ''" @click="choiceTypeProject(null)">
          <p>{{'Filter All'}}</p>
        </div>
        <div
          class="btn-filter"
          v-for="data in listTypeProject"
          :key="data.id"
          :class="typeProject === data.id ? 'select' : ''"
          @click="choiceTypeProject(data.id)">
          <p>{{data.nama}}</p>
        </div>
      </div>
      <div
        class="d-flex justify-content-center align-items-center"
        style="height: 450px"
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
                <img src="~/assets/images/image-none.jpg" :alt="data.nama" v-if="data.foto == null" />
                <img :src="data.foto" :alt="data.nama" v-else />
                <div class="social-profile">
                  <li>
                    <p class="text-white" style="font-weight: 600">
                      {{ data.nama }}
                    </p>
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
  projectUseCase,
  jenisProjectUseCase
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
          limit: 12,
        },
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
          content: 'you can see the list of projects PT. SELARAS HANDASA INTI PERSADA',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Projects | PT. SELARAS HANDASA INTI PERSADA',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'you can see the list of projects PT. SELARAS HANDASA INTI PERSADA',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${window.location.href}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Projects | PT. SELARAS HANDASA INTI PERSADA',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'you can see the list of projects PT. SELARAS HANDASA INTI PERSADA',
        },
      ],
    }
  },
  data() {
    return {
      dataSource: [],
      isLoading: false,
      itemsRoute: [{
          text: 'PT. SHIPT',
          to: {
            name: 'index',
          },
        },
        {
          text: 'Project',
        },
      ],
      currentPage: 1,
      rows: 0,
      perPage: 12,
      listTypeProject: [],
      typeProject: null
    }
  },
  mounted() {
    this.getProjectType()
    this.getProject()
  },
  methods: {
    cardHover(className) {
      console.log('hover class', className)
    },
    cardLeaveCursor(className) {
      console.log('out leave class', className)
    },
    getProjectType() {
      jenisProjectUseCase.getAllNoAuthor().then((response) => {
        if (!response.error) {
          this.listTypeProject = response.result.data
        }
      })
    },
    getProject() {
      this.isLoading = true
      projectUseCase.getNoAuthor(window.location.search).then((response) => {
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
        this.isLoading = false
      })
    },
    toDetail(prams) {
      this.$router.push({
        name: 'project-detail-id',
        params: {
          id: prams.id,
        },
      })
    },
    choiceTypeProject(prams) {
      this.typeProject = prams
      let query
      if (this.typeProject) {
        query = {
          page: 1,
          limit: this.$route.query.limit,
          idJenisProject: this.typeProject,
        }
      } else {
        query = {
          page: 1,
          limit: this.$route.query.limit,
        }
      }
      this.$router
        .replace({
          query
        })
        .then(() => {
          this.getProject()
        })
        .catch(() => {})
    },
    changePage(prams) {
      this.$router
        .replace({
          // name: 'project',
          query: {
            page: prams,
            limit: this.$route.query.limit,
          },
        })
        .then(() => {
          this.getProject()
        })
        .catch(() => {
          console.log()
        })
    },
  },
  components: {
    Loading,
    BreadcumbBlog,
  },
}
</script>

<style lang="scss">
@import '~/assets/styles/scss/variable.scss';

.container-project-index {
  .hover-card-content {}

  .row-filter {
    display: flex;
    overflow-x: scroll;
    will-change: transform;
    // display: inline-block;
    white-space: nowrap;
    scrollbar-width: none;
    scroll-behavior: smooth;

    .btn-filter {
      padding: 0.25rem 0.5rem 0.25rem 0.5rem;
      margin: 0 15px 0 0;
      border-radius: 9999px;
      cursor: pointer;
          transition: all 0.5s ease;

      background-color: $color-blue-grey-lighten-5;

      p {
        // color: $white;
        color: $color-blue-grey;
        font-weight: 500;
        font-size: 0.875rem;
        /* 14px */
        line-height: 1.25rem;
        /* 20px */
      }
    }

    .btn-filter.select {
      background-color: $primary !important;

      p {
        color: $white;
      }
    }
  }

  .row-filter::-webkit-scrollbar {
    display: none;
    scroll-behavior: smooth;
  }

  .row-filter::-webkit-scrollbar-track {
    background: transparent;
  }

  .row-filter::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
