<template>
  <div>
    <b-card class="rounded" border-variant="white">
      <b-card-header header-bg-variant="white" header-border-variant="white">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <h5 class="mr-3">
              Users
            </h5>
            <b-button
              class="btn-primary rounded "
              variant="primary"
              size="sm"
              @click="addNew()">
              Tambah
            </b-button>
          </div>
        </div>
      </b-card-header>
      <div class="mx-3 my-2">
        <DxDataGrid
          id="table-default-id"
          class="table-default"
          :column-auto-width="true"
          :allow-column-reordering="true"
          :show-column-lines="false"
          :show-row-lines="true"
          :show-borders="true"
          :row-alternation-enabled="false"
          :allow-column-resizing="false"
          :word-wrap-enabled="true"
          :data-source="data"
          key-expr="id"
          no-data-text="Tidak Ada Data">
          <DxPaging :page-size="10" :enabled="true" />
          <DxPager
            :visible="true"
            :allowed-page-sizes="[5, 10, 15, 20, 25]"
            display-mode="full"
            :show-page-size-selector="true"
            :show-info="true"
            :show-navigation-buttons="true" />
          <DxColumn
            data-field="email"
            caption="Email"
            :visible="true" />
          <DxColumn
            data-field="nama"
            caption="Nama"
            :visible="true" />
          <DxColumn
            caption="Action"
            :visible="true"
            :min-width="100"
            cell-template="actionTemplate"
            alignment="left" />
          <template #actionTemplate="{ data }">
            <ListEditDel
              :edit="true"
              @edit="editData(data.data)"
              :del="true"
              @delete="deleteData(data.data)" />
          </template>
          <DxSearchPanel :visible="true" />
        </DxDataGrid>
        <DxLoadPanel
          :close-on-outside-click="false"
          :visible="isBusy"
          :position="position" />
      </div>
      <b-card-footer footer-bg-variant="white" footer-border-variant="white">
      </b-card-footer>
    </b-card>
    <b-modal
      size="lg"
      :title="titleModal"
      scrollable
      centered
      v-model="showModal"
      :no-close-on-backdrop="true">
      <b-container>
        <UsersForm
          :dataForm="dataForm"
          ref="refUsersForm"
          @reloadData="reloadData" />
      </b-container>
      <template #modal-footer>
        <div class="d-flex w-100 justify-content-end">
          <b-button
            variant="primary"
            class="btn-primary mr-2"
            size="sm"
            @click="submit()">
            Simpan
          </b-button>
          <b-button
            variant="secondary"
            size="sm"
            @click="showModal=false">
            Kembali
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {
  usersUseCase
} from '~/domain/usecase'
import UsersForm from '~/components/pages/users/UsersForm.vue'

export default {
  name: 'Users',
  components: {
    UsersForm
  },
  data() {
    return {
      data: [],
      dataForm: null,
      showModal: false,
      titleModal: 'Tambah Users',
      isBusy: false,
      searchInput: '',
      position: {
        of: '#table-default-id'
      },
      noCollapse: false,
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
    this.getAll()
  },
  watch: {
    showModal(newVal) {
      if (!newVal) {
        this.dataForm = null
      }
    }
  },
  methods: {
    getAll() {
      this.isBusy = true
      usersUseCase.getAll().then((response) => {
        console.log('respone', response)
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
    },
    addNew() {
      this.titleModal = 'Tambah'
      this.showModal = true
    },
    searching() {
      console.log('search')
    },
    editData(val) {
      this.titleModal = 'Edit'
      this.dataForm = val
      this.showModal = true
    },
    prosesDelete(val) {
      usersUseCase.deleteData(val.id).then((response) => {
        if (!response.error) {
          this.reloadData(response)
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
      })
    },
    deleteData(val) {
      this.$bvModal.msgBoxConfirm('Apakah anda yakin ingin menghapusnya ?', {
          title: 'Client',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Yes',
          cancelTitle: 'No',
          // footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
        .then((res) => {
          if (res) {
            this.prosesDelete(val)
          }
        })
        .catch(err => {
          // An error occurred
        })
    },
    submit() {
      this.$refs.refUsersForm.submit()
    },
    reloadData(response) {
      this.$root.$bvToast.toast(`${response.result.message}`, {
        title: 'Sukses',
        toaster: 'b-toaster-bottom-center',
        // solid: true,
        autoHideDelay: 3000,
        appendToast: true,
        variant: 'success'
      })
      this.showModal = false
      this.getAll()
    }
  },
}
</script>

<style></style>
