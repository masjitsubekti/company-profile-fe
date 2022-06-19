<template>
  <div>
    <ValidationObserver ref="form">
      <form @submit.prevent="submit">
        <div class="mb-3">
          <ValidationProvider
            name="Nama"
            rules="required"
            v-slot="{ errors }">
            <label for="name" class="text-body2">Nama</label>
            <b-form-input
              id="name"
              v-model="name"
              placeholder="Nama"
              class="input-primary rounded"></b-form-input>
            <span class="text-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="mb-3">
          <ValidationProvider
            name="Email"
            rules="required|email"
            v-slot="{ errors }">
            <label for="email" class="text-body2">Email</label>
            <b-form-input
              id="email"
              v-model="email"
              placeholder="xxx@shipt.com"
              class="input-primary rounded"></b-form-input>
            <span class="text-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="mb-3">
          <ValidationProvider
            name="Username"
            rules="required|min:6"
            v-slot="{ errors }">
            <label for="username" class="text-body2">Username</label>
            <b-form-input
              id="username"
              v-model="username"
              placeholder="username"
              class="input-primary rounded"></b-form-input>
            <span class="text-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="mb-5">
          <ValidationProvider
            name="Password"
            rules="required|min:6"
            v-slot="{ errors }">
            <label for="password" class="text-body2">Password</label>
            <b-input-group>
              <template #append>
                <b-input-group-text>
                  <b-icon
                    class="cursor-pointer"
                    icon="eye"
                    aria-hidden="true"
                    font-scale="1"
                    @click="showPass = true"
                    v-if="!showPass"></b-icon>
                  <b-icon
                    class="cursor-pointer"
                    icon="eye-slash"
                    aria-hidden="true"
                    font-scale="1"
                    @click="showPass = false"
                    v-else></b-icon>
                </b-input-group-text>
              </template>
              <b-form-input
                id="password"
                :type="showPass ? 'text' : 'password'"
                v-model="password"
                placeholder="password"
                class="input-primary rounded"></b-form-input>
            </b-input-group>
            <span class="text-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {
  usersUseCase
} from '~/domain/usecase'

export default {
  name: 'UsersForm',
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
      email: null,
      username: null,
      password: null,
      showPass: false,
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
        this.email = this.dataForm.email
        this.username = this.dataForm.username
      }
    },
    processSubmit() {
      usersUseCase.submitData(this.id, {
        nama: this.name,
        username: this.username,
        email: this.email,
        password: this.password
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
