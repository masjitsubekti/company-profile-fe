<template>
  <div>
    <ValidationObserver ref="form">
      <form @submit.prevent="submit">
        <div class="mb-3">
          <ValidationProvider name="Nama" rules="required" v-slot="{ errors }">
            <label for="name" class="text-body2">Nama</label>
            <b-form-input id="name" v-model="name" placeholder="Nama Jenis Project" class="input-primary rounded"></b-form-input>
            <span class="text-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="mb-3">
          <ValidationProvider name="Keterangan" rules="required" v-slot="{ errors }">
            <label for="description" class="text-body2">Keterangan</label>
            <b-form-textarea id="description" v-model="description" placeholder="Keterangan" class="input-primary rounded"></b-form-textarea>
            <span class="text-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {
  layananUseCase
} from '~/domain/usecase'

export default {
  name: 'LayananForm',
  props: {
    dataForm: {
      default: () => null
    }
  },
  emits: ['reloadData'],
  data() {
    return {
      id: null,
      name: null,
      description: null
    }
  },
  mounted() {
    this.getDatForm()
  },
  methods: {
    getDatForm() {
      if (this.dataForm) {
        this.id = this.dataForm.id
        this.name = this.dataForm.nama
        this.description = this.dataForm.keterangan
      }
    },
    processSubmit() {
      layananUseCase.submitData(this.id, {
        nama: this.name,
        keterangan: this.description
      }).then(async (response) => {
        if (!response.error) {
          this.$emit('reloadData', response)
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
    submit() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          this.processSubmit()
        }
      })
    }
  }
}
</script>

<style>

</style>
