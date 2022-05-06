<template>
  <div>
    <ValidationObserver ref="form">
      <form @submit.prevent="submit">
        <div class="mb-5">
          <ValidationProvider name="Nama" rules="required" v-slot="{ errors }">
            <label for="name" class="text-body2">Nama</label>
            <b-form-input id="name" v-model="name" placeholder="Nama Jenis Project" class="input-primary rounded"></b-form-input>
            <span class="text-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {
  jenisProjectUseCase
} from '~/domain/usecase'

export default {
  name: 'JenisProjectForm',
  props: {
    dataForm: {
      default: () => null
    }
  },
  emits: ['reloadData'],
  data() {
    return {
      id: null,
      name: null
    }
  },
  mounted() {
    this.getDatForm()
  },
  methods: {
    getDatForm() {
      console.log()
      if (this.dataForm) {
        this.id = this.dataForm.id
        this.name = this.dataForm.nama
      }
    },
    processSubmit() {
      jenisProjectUseCase.submitData(this.id, {
        nama: this.name
      }).then(async (response) => {
        if (!response.error) {
          this.$emit('reloadData', response)
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
    submit() {
      // jenisProjectUseCase.submitData()
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
