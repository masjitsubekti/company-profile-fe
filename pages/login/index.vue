<template>
  <div class="login-page">
    <div class="card">
      <div class="header">
        <img src="~/assets/images/logo/logo-ship.png" />
      </div>
      <div class="content">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(submit)">
            <div class="mb-3">
              <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                <label for="email" class="text-body2">Email</label>
                <b-form-input id="email" v-model="email" placeholder="Email" class="input-primary rounded"></b-form-input>
                <span class="text-error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="mb-5">
              <ValidationProvider name="Password" rules="required|min:6" v-slot="{ errors }">
                <label for="password" class="text-body2">Password</label>
                <b-form-input id="password" v-model="password" placeholder="Password" class="input-primary rounded"></b-form-input>
                <span class="text-error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="d-flex justify-content-center">
              <!-- <b-spinner variant="primary" label="Spinning"></b-spinner> -->
              <b-button type="submit" class="btn-primary rounded d-flex align-items-center" style=" gap: 0.5rem; padding: 0.5rem 1.25rem 0.5rem 1.25rem; " variant="primary" :disabled="showLoading">
                <b-spinner small variant="light" v-if="showLoading"></b-spinner>Masuk
              </b-button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BFormInput,
  BButton,
  BSpinner
} from 'bootstrap-vue'
import {
  authUseCase
} from '~/domain/usecase'
import moment from 'moment'

export default {
  layout: 'auth',
  // middleware: ['authenticated'],
  components: {
    BFormInput,
    BButton,
    BSpinner
  },
  data() {
    return {
      email: 'admin@gmail.com',
      password: '123456',
      showLoading: false
    }
  },
  methods: {
    fetchDataUser() {
      authUseCase.getDetailUser(this.$store.state.auth.token).then((response) => {
        if (!response.error) {
          this.$store.dispatch('auth/setAuthDataUser', response.result.user)
          this.$store.dispatch('auth/setIsAuthAuthenticated', true)
          this.$router.push({
            // name: 'cms-dashboard'
            path: '/cms/dashboard'
          })
        }
      })
    },
    async processLogin() {
      this.showLoading = true
      authUseCase.loginProcess(this.email, this.password).then(async (response) => {
        if (!response.error) {
          await this.$store.dispatch('auth/setDateAuthAuthenticated', moment().format())
          await this.$store.dispatch('auth/setTokenAuth', response.result.token)
          this.fetchDataUser()
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
        this.showLoading = false
      })
    },

    submit() {
      this.processLogin()
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/scss/variable.scss';

.login-page {
  min-height: 100vh;
  background: $color-background;
  display: flex;

  .card {
    width: 40%;
    margin: auto;
    border-radius: 1rem;
    padding: 1rem 1.5rem 1rem 1.5rem;
    // min-height: $height-form;
    align-items: stretch;

    .header {
      display: flex;
      justify-content: center;

      img {
        height: 50px;
      }
    }
  }
}
</style>
