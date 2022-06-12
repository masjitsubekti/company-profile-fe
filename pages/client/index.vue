<template>
  <div class="">
    <BreadcumbBlog :items="itemsRoute" title="Our Clients" />
    <div class="d-flex justify-content-center">
      <div class="container-table-client">
        <DxDataGrid
          id="table-default-id"
          class="table-client"
          :column-auto-width="true"
          :allow-column-reordering="true"
          :show-column-lines="false"
          :show-row-lines="true"
          :show-borders="true"
          :row-alternation-enabled="true"
          :allow-column-resizing="false"
          :hover-state-enabled="true"
          :word-wrap-enabled="true"
          :data-source="data"
          key-expr="id"
          no-data-text="Tidak Ada Data">
          <DxPaging :page-size="10" :enabled="true" />
          <!-- <DxFilterRow :visible="true" /> -->
          <DxHeaderFilter :visible="true" />
          <!-- <DxColumnChooser
            :enabled="true"
            mode="select"
            title="Pilih Kolom"
            :allow-search="true" /> -->
          <DxPager
            :visible="true"
            :allowed-page-sizes="[5, 10, 15, 20, 25]"
            display-mode="full"
            :show-page-size-selector="true"
            :show-info="true"
            :show-navigation-buttons="true" />
          <DxColumn
            data-field="tanggal"
            data-type="date"
            format="yyyy"
            caption="YEAR"
            :width="100"
            :visible="true" />
          <DxColumn
            data-field="nama_client"
            caption="CLIENT"
            :visible="true" />
          <DxColumn
            data-field="nama"
            caption="PROJECT"
            :visible="true" />
          <DxColumn
            data-field="alamat"
            caption="ADDRESS"
            :allow-filtering="false"
            :visible="true" />
          <DxColumn
            data-field="scope"
            caption="SCOPE"
            :allow-filtering="false"
            :visible="true" />
          <DxSearchPanel :visible="true" :width="200" />
        </DxDataGrid>
        <DxLoadPanel
          :close-on-outside-click="false"
          :visible="isBusy"
          :position="position" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  projectUseCase
} from '~/domain/usecase'
import BreadcumbBlog from '~/components/shared-components/breadcumb/BreadcumbBlog.vue'

export default {
  name: 'ClientPages',
  components: {
    BreadcumbBlog
  },
  data() {
    return {
      itemsRoute: [{
        text: 'PT. SHIPT',
        to: {
          name: 'index'
        }
      }, {
        text: 'Our Clients'
      }],
      data: [],
      isBusy: false,
      position: {
        of: '#table-default-id'
      },
      fields: [{
          key: 'nama',
          label: 'Nama',
          sortable: true,
          sortDirection: 'asc'
        },
        {
          key: 'actions',
          label: 'Actions'
        }
      ],
    }
  },
  mounted() {
    this.getClient()
  },
  methods: {
    getClient() {
      this.isBusy = true
      projectUseCase.getAllNoAuthor().then((response) => {
        if (!response.error) {
          this.data = response.result.data
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
        this.isBusy = false
      })
    }
  }
}
</script>

<style lang="scss">
.container-table-client {
  width: 60%;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
