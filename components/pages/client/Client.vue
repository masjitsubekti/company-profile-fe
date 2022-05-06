<template>
  <div>
    <b-card class="rounded" border-variant="white">
      <b-card-header header-bg-variant="white" header-border-variant="white">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <h5 class="mr-3">
              Client
            </h5>
            <b-button class="btn-primary rounded " variant="primary" size="sm" @click="addNew()">
              Tambah
            </b-button>
          </div>
          <InputIconRightGrey placeholder="Cari Disini ..." @update:modelValue="(val) => searchInput = val" :canClick="true" @submitInput="searching()" />
        </div>
      </b-card-header>
      <div class="mx-3 my-2">
        <b-table id="table-transition-example" :no-border-collapse="false" :items="data" :fields="fields" head-variant="light" sticky-header responsive :busy="isBusy" sort-icon-left>
          <template #table-busy>
            <SpinnerLoading />
          </template>
          <template #cell(actions)="row">
            <ListEditDel :edit="true" @edit="editData(row.item)" :del="true" @delete="deleteData(row.item)" />
          </template>
        </b-table>
      </div>
      <b-card-footer footer-bg-variant="white" footer-border-variant="white">
      </b-card-footer>
    </b-card>
    <b-modal size="lg" :title="titleModal" scrollable centered v-model="showModal" :no-close-on-backdrop="true">
      <b-container>
        <ClientForm :dataForm="dataForm" ref="refJenisProjectForm" @reloadData="reloadData" />
      </b-container>
      <template #modal-footer>
        <div class="d-flex w-100 justify-content-end">
          <b-button variant="primary" class="btn-primary mr-2" size="sm" @click="submit()">
            Simpan
          </b-button>
          <b-button variant="secondary" size="sm" @click="showModal=false">
            Kembali
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {
  clientUseCase
} from '~/domain/usecase'
import ClientForm from '~/components/pages/client/ClientForm.vue'

export default {
  name: 'Jenis Project',
  components: {
    ClientForm
  },
  data() {
    return {
      data: [],
      dataForm: null,
      showModal: false,
      titleModal: 'Tambah Jenis Project',
      isBusy: false,
      searchInput: '',
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
      clientUseCase.getAll().then((response) => {
        if (!response.error) {
          this.data = response.result.data
        } else {
          this.$bvToast.toast(`${response.message}`, {
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
      clientUseCase.deleteData(val.id).then((response) => {
        if (!response.error) {
          this.reloadData(response)
        } else {
          this.$bvToast.toast(`${response.message}`, {
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
      this.$refs.refJenisProjectForm.submit()
    },
    reloadData(response) {
      this.$bvToast.toast(`${response.result.message}`, {
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
