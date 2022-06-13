<template>
  <div>
    <b-card class="rounded" border-variant="white">
      <b-card-header header-bg-variant="white" header-border-variant="white">
        <h4>{{title}}</h4>
      </b-card-header>
      <div class="mx-4 my-2">
        <ValidationObserver ref="form">
          <form @submit.prevent="submit">
            <b-row class="">
              <b-col
                md="12"
                xl="6"
                class="p-3">
                <div class="mb-3">
                  <ValidationProvider
                    name="Nama"
                    rules="required"
                    v-slot="{ errors }">
                    <label for="name" class="text-body2">Nama</label>
                    <b-form-input
                      id="name"
                      v-model="name"
                      placeholder="Nama Project"
                      class="input-primary rounded"></b-form-input>
                    <span class="text-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="mb-3">
                  <ValidationProvider
                    name="Jenis Project"
                    rules="required"
                    v-slot="{ errors }">
                    <label for="typePojectId" class="text-body2">Jenis Project</label>
                    <v-select
                      label="nama"
                      id="typePojectId"
                      :options="typeProjectOptions"
                      :reduce="country => country.id"
                      v-model="typeProject"></v-select>
                    <span class="text-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="mb-3">
                  <ValidationProvider
                    name="Client"
                    rules="required"
                    v-slot="{ errors }">
                    <label for="clientId" class="text-body2">Client</label>
                    <v-select
                      label="nama"
                      id="clientId"
                      :options="clientOptions"
                      :reduce="country => country.id"
                      v-model="client"></v-select>
                    <span class="text-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="mb-3">
                  <ValidationProvider
                    name="Scope"
                    rules="required|max:30"
                    v-slot="{ errors }">
                    <label for="scopeId" class="text-body2">Scope</label>
                    <b-form-input
                      id="scopeId"
                      v-model="scope"
                      class="input-primary rounded"
                      max="30"></b-form-input>
                    <span class="text-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </b-col>
              <b-col
                md="12"
                xl="6"
                class="p-3">
                <div class="mb-3">
                  <ValidationProvider
                    name="Tanggal Selesai Project"
                    rules="required"
                    v-slot="{ errors }">
                    <label for="dateId" class="text-body2">Tanggal Selesai Project</label>
                    <b-form-datepicker
                      id="dateId"
                      v-model="date"
                      class="input-primary rounded"></b-form-datepicker>
                    <span class="text-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="mb-3">
                  <label for="addressId" class="text-body2">Alamat Project</label>
                  <b-form-textarea
                    id="addressId"
                    v-model="address"
                    class="input-primary rounded"
                    rows="2"></b-form-textarea>

                </div>
                <div class="mb-3">
                  <label for="descriptionId" class="text-body2">Keterangan</label>
                  <b-form-textarea
                    id="descriptionId"
                    v-model="description"
                    class="input-primary rounded"
                    rows="2"></b-form-textarea>

                </div>
                <!-- <div>
                  <label for="isShowId" class="text-body2">Tampilkan</label>
                  <b-form-checkbox
                    id="isShowId"
                    switch
                    v-model="isShow"
                    size="lg"></b-form-checkbox>
                </div> -->
              </b-col>
            </b-row>
          </form>
        </ValidationObserver>
        <b-row class="mt-3">
          <b-col
            md="12"
            xl="4"
            class="p-3">
            <div class="d-flex justify-content-center w-100">
              <div class="position-relative p-2" v-if="tempFirstPhoto">
                <div
                  class="container-delete"
                  style=""
                  @click="removeImgFromDb('firstPhoto')"
                  v-if="tempFirstPhoto !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <img :src="tempFirstPhoto.foto" class="img-priview" />
              </div>
              <div class="position-relative p-2" v-else>
                <div
                  class="container-delete"
                  style=""
                  @click="removeImage('firstPhoto')"
                  v-if="firstPhoto.src !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <file-upload
                  ref="refFirstPhoto"
                  input-id="idFirstPhoto"
                  @input-file="onFirstPhoto"
                  accept="image/*">
                  <img v-if="firstPhoto.src === null" class="img-priview" src="~/assets/images/add-image.svg" :alt="firstPhoto.name" />
                  <img v-else class="img-priview" :src="firstPhoto.src" :alt="firstPhoto.name" />
                </file-upload>
              </div>
            </div>
          </b-col>
          <b-col
            md="12"
            xl="4"
            class="p-3">
            <div class="d-flex justify-content-center w-100">
              <div class="position-relative p-2" v-if="tempSecondPhoto">
                <div
                  class="container-delete"
                  style=""
                  @click="removeImgFromDb('secondPhoto')"
                  v-if="tempSecondPhoto !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <img :src="tempSecondPhoto.foto" class="img-priview" />
              </div>
              <div class="position-relative p-2" v-else>
                <div
                  class="container-delete"
                  style=""
                  @click="removeImage('secondPhoto')"
                  v-if="secondPhoto.src !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <file-upload
                  ref="refSecondPhoto"
                  input-id="idSecondPhoto"
                  @input-file="onSecondPhoto"
                  accept="image/*">
                  <img v-if="secondPhoto.src === null" class="img-priview" src="~/assets/images/add-image.svg" :alt="secondPhoto.name" />
                  <img v-else class="img-priview" :src="secondPhoto.src" :alt="secondPhoto.name" />
                </file-upload>
              </div>
            </div>
          </b-col>
          <b-col
            md="12"
            xl="4"
            class="p-3">
            <div class="d-flex justify-content-center w-100">
              <div class="position-relative p-2" v-if="tempThirdPhoto">
                <div
                  class="container-delete"
                  style=""
                  @click="removeImgFromDb('thirdPhoto')"
                  v-if="tempThirdPhoto !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <img :src="tempThirdPhoto.foto" class="img-priview" />
              </div>
              <div class="position-relative p-2" v-else>
                <div
                  class="container-delete"
                  style=""
                  @click="removeImage('thirdPhoto')"
                  v-if="thirdPhoto.src !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <file-upload
                  ref="refThirdPhoto"
                  input-id="idThirdPhoto"
                  @input-file="onThirdPhoto"
                  accept="image/*">
                  <img v-if="thirdPhoto.src === null" class="img-priview" src="~/assets/images/add-image.svg" :alt="thirdPhoto.name" />
                  <img v-else class="img-priview" :src="thirdPhoto.src" :alt="thirdPhoto.name" />
                </file-upload>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col
            md="12"
            xl="4"
            class="p-3">
            <div class="d-flex justify-content-center w-100">
              <div class="position-relative p-2" v-if="tempFourthPhoto">
                <div
                  class="container-delete"
                  style=""
                  @click="removeImgFromDb('fourthPhoto')"
                  v-if="tempFourthPhoto !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <img :src="tempFourthPhoto.foto" class="img-priview" />
              </div>
              <div class="position-relative p-2" v-else>
                <div
                  class="container-delete"
                  style=""
                  @click="removeImage('fourthPhoto')"
                  v-if="fourthPhoto.src !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <file-upload
                  ref="refFourthPhoto"
                  input-id="idFourthPhoto"
                  @input-file="onFourthPhoto"
                  accept="image/*">
                  <img v-if="fourthPhoto.src === null" class="img-priview" src="~/assets/images/add-image.svg" :alt="fourthPhoto.name" />
                  <img v-else class="img-priview" :src="fourthPhoto.src" :alt="fourthPhoto.name" />
                </file-upload>
              </div>
            </div>
          </b-col>
          <b-col
            md="12"
            xl="4"
            class="p-3">
            <div class="d-flex justify-content-center w-100">
              <div class="position-relative p-2" v-if="tempFifthPhoto">
                <div
                  class="container-delete"
                  style=""
                  @click="removeImgFromDb('fifthPhoto')"
                  v-if="tempFifthPhoto !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <img :src="tempFifthPhoto.foto" class="img-priview" />
              </div>
              <div class="position-relative p-2" v-else>
                <div
                  class="container-delete"
                  style=""
                  @click="removeImage('fifthPhoto')"
                  v-if="fifthPhoto.src !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <file-upload
                  ref="reFfifthPhoto"
                  input-id="idFifthPhoto"
                  @input-file="onFifthPhoto"
                  accept="image/*">
                  <img v-if="fifthPhoto.src === null" class="img-priview" src="~/assets/images/add-image.svg" :alt="fifthPhoto.name" />
                  <img v-else class="img-priview" :src="fifthPhoto.src" :alt="fifthPhoto.name" />
                </file-upload>
              </div>
            </div>
          </b-col>
          <b-col
            md="12"
            xl="4"
            class="p-3">
            <div class="d-flex justify-content-center w-100">
              <div class="position-relative p-2" v-if="tempSixthPhoto">
                <div
                  class="container-delete"
                  style=""
                  @click="removeImgFromDb('sixthPhoto')"
                  v-if="tempSixthPhoto !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <img :src="tempSixthPhoto.foto" class="img-priview" />
              </div>
              <div class="position-relative p-2" v-else>
                <div
                  class="container-delete"
                  style=""
                  @click="removeImage('sixthPhoto')"
                  v-if="sixthPhoto.src !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <file-upload
                  ref="refSixthPhoto"
                  input-id="idSixthPhoto"
                  @input-file="onSixthPhoto"
                  accept="image/*">
                  <img v-if="sixthPhoto.src === null" class="img-priview" src="~/assets/images/add-image.svg" :alt="sixthPhoto.name" />
                  <img v-else class="img-priview" :src="sixthPhoto.src" :alt="sixthPhoto.name" />
                </file-upload>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <b-card-footer footer-bg-variant="white" footer-border-variant="white">
        <div class="d-flex justify-content-end">
          <b-button
            variant="primary"
            class="btn-primary mr-2"
            @click="submit()">
            Simpan
          </b-button>
          <b-button variant="secondary" @click="$router.push({
            name: 'cms-project'
          })">
            Kembali
          </b-button>
        </div>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
import VueUploadComponent from 'vue-upload-component'
import {
  jenisProjectUseCase,
  clientUseCase,
  projectUseCase
} from '~/domain/usecase'

export default {
  name: 'ProjectForm',
  components: {
    FileUpload: VueUploadComponent,
  },
  data() {
    return {
      tempFirstPhoto: null,
      firstPhoto: {
        src: null,
        name: null,
        image: null
      },
      tempSecondPhoto: null,
      secondPhoto: {
        src: null,
        name: null,
        image: null
      },
      tempThirdPhoto: null,
      thirdPhoto: {
        src: null,
        name: null,
        image: null
      },
      tempFourthPhoto: null,
      fourthPhoto: {
        src: null,
        name: null,
        image: null
      },
      tempFifthPhoto: null,
      fifthPhoto: {
        src: null,
        name: null,
        image: null
      },
      tempSixthPhoto: null,
      sixthPhoto: {
        src: null,
        name: null,
        image: null
      },
      name: null,
      client: null,
      clientOptions: [],
      typeProject: null,
      typeProjectOptions: [],
      scope: null,
      address: null,
      date: null,
      description: null,
      isShow: false,
      id: null,
      title: null,
      listImgFix: []
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  mounted() {
    this.getDetail()
    this.getClient()
    this.getTypeProject()
  },
  methods: {
    getDetail() {
      this.$store.dispatch('showLoading')
      projectUseCase.getDataForm(this.$route.params.id).then((res) => {
        this.title = res.title
        if (res.data) {
          if (!res.data.error) {
            const result = res.data.result.data
            this.name = result.nama
            this.client = result.id_client
            this.typeProject = result.id_jenis_project
            this.scope = result.scope
            this.address = result.alamat
            this.date = result.tanggal
            this.isShow = result.status_project
            this.description = result.keterangan
            if (result.project_image.length > 0) {
              this.tempFirstPhoto = result.project_image[0]
              this.tempSecondPhoto = result.project_image[1]
              this.tempThirdPhoto = result.project_image[2]
              this.tempFourthPhoto = result.project_image[3]
              this.tempFifthPhoto = result.project_image[4]
              this.tempSixthPhoto = result.project_image[5]
            }
          } else {
            this.$root.$bvToast.toast(`${res.data.message}`, {
              title: 'Error',
              toaster: 'b-toaster-bottom-center',
              // solid: true,
              autoHideDelay: 3000,
              appendToast: true,
              variant: 'danger'
            })
            this.$router.back()
          }
        }
        this.$store.dispatch('hideLoading')
      })
    },
    pushListImage(item, from) {
      let file = item
      if (from === 'firstPhoto') {
        this.firstPhoto.src = URL.createObjectURL(item)
        this.firstPhoto.image = file
      }
      if (from === 'secondPhoto') {
        this.secondPhoto.src = URL.createObjectURL(item)
        this.secondPhoto.image = file
      }
      if (from === 'thirdPhoto') {
        this.thirdPhoto.src = URL.createObjectURL(item)
        this.thirdPhoto.image = file
      }
      if (from === 'fourthPhoto') {
        this.fourthPhoto.src = URL.createObjectURL(item)
        this.fourthPhoto.image = file
      }
      if (from === 'fifthPhoto') {
        this.fifthPhoto.src = URL.createObjectURL(item)
        this.fifthPhoto.image = file
      }
      if (from === 'sixthPhoto') {
        this.sixthPhoto.src = URL.createObjectURL(item)
        this.sixthPhoto.image = file
      }
    },
    onFirstPhoto(newFile, oldFile) {
      this.pushListImage(newFile.file, 'firstPhoto')
    },
    onSecondPhoto(newFile, oldFile) {
      this.pushListImage(newFile.file, 'secondPhoto')
    },
    onThirdPhoto(newFile, oldFile) {
      this.pushListImage(newFile.file, 'thirdPhoto')
    },
    onFourthPhoto(newFile, oldFile) {
      this.pushListImage(newFile.file, 'fourthPhoto')
    },
    onFifthPhoto(newFile, oldFile) {
      this.pushListImage(newFile.file, 'fifthPhoto')
    },
    onSixthPhoto(newFile, oldFile) {
      this.pushListImage(newFile.file, 'sixthPhoto')
    },
    removeImage(from) {
      if (from === 'firstPhoto') {
        this.firstPhoto.src = null
        this.firstPhoto.image = null
      }
      if (from === 'secondPhoto') {
        this.secondPhoto.src = null
        this.secondPhoto.image = null
      }
      if (from === 'thirdPhoto') {
        this.thirdPhoto.src = null
        this.thirdPhoto.image = null
      }
      if (from === 'fifthPhoto') {
        this.fifthPhoto.src = null
        this.fifthPhoto.image = null
      }
      if (from === 'fourthPhoto') {
        this.fourthPhoto.src = null
        this.fourthPhoto.image = null
      }
      if (from === 'sixthPhoto') {
        this.sixthPhoto.src = null
        this.sixthPhoto.image = null
      }
    },
    processUploadImage() {
      if (this.listImgFix.length > 0) {
        projectUseCase.uploadPhotoMultiple(this.id, this.listImgFix).then((res) => {
          console.log('after upload', res)
        })
      }
    },
    processSubmit() {
      const dataSend = {
        nama: this.name,
        id_jenis_project: this.typeProject,
        id_client: this.client,
        tanggal: this.date,
        alamat: this.address,
        scope: this.scope,
        keterangan: this.address,
        status_project: this.isShow
      }
      this.$store.dispatch('showLoading')
      projectUseCase.submitData(this.id, dataSend).then(async (res) => {
        // console.log('wowowo', res)
        if (!res.error) {
          this.id = await res.result.data.id
          await this.processUploadImage()
          this.$root.$bvToast.toast(`${res.result.message}`, {
            title: 'Sukses',
            toaster: 'b-toaster-bottom-center',
            // solid: true,
            autoHideDelay: 3000,
            appendToast: true,
            variant: 'success'
          })
          this.$router.push({
            name: 'cms-project'
          })
        } else {
          this.$root.$bvToast.toast(`${res.message}`, {
            title: 'Error',
            toaster: 'b-toaster-bottom-center',
            // solid: true,
            autoHideDelay: 3000,
            appendToast: true,
            variant: 'danger'
          })
        }
        this.$store.dispatch('hideLoading')
      })
    },
    processPushImg() {
      if (this.firstPhoto.src !== null) {
        this.listImgFix.push(this.firstPhoto)
      }
      if (this.secondPhoto.src !== null) {
        this.listImgFix.push(this.secondPhoto)
      }
      if (this.thirdPhoto.src !== null) {
        this.listImgFix.push(this.thirdPhoto)
      }
      if (this.fourthPhoto.src !== null) {
        this.listImgFix.push(this.fourthPhoto)
      }
      if (this.fifthPhoto.src !== null) {
        this.listImgFix.push(this.fifthPhoto)
      }
      if (this.sixthPhoto.src !== null) {
        this.listImgFix.push(this.sixthPhoto)
      }
    },
    submit() {
      this.$refs.form.validate().then((success) => {
        // console.log('isValidate', success)
        if (success) {
          this.processSubmit()
          this.processPushImg()
        }
      })
    },
    getClient() {
      clientUseCase.getAll().then((res) => {
        if (!res.error) {
          this.clientOptions = res.result.data
        }
      })
    },
    getTypeProject() {
      jenisProjectUseCase.getAll().then((res) => {
        if (!res.error) {
          this.typeProjectOptions = res.result.data
        }
      })
    },
    processRemoveImg(idPhoto) {
      this.$store.dispatch('showLoading')
      projectUseCase.deletePhoto(idPhoto).then((res) => {
        if (!res.error) {
          this.$root.$bvToast.toast(`${res.result.message}`, {
            title: 'Sukses',
            toaster: 'b-toaster-bottom-center',
            // solid: true,
            autoHideDelay: 3000,
            appendToast: true,
            variant: 'success'
          })
        } else {
          this.$root.$bvToast.toast(`${res.message}`, {
            title: 'Error',
            toaster: 'b-toaster-bottom-center',
            // solid: true,
            autoHideDelay: 3000,
            appendToast: true,
            variant: 'danger'
          })
        }
        this.$store.dispatch('hideLoading')
      })
    },
    removeImgFromDb(comment) {
      this.$bvModal.msgBoxConfirm('Apakah anda yakin ingin menghapus foto ini? foto yang sudah dihapus akan hilang', {
          title: 'Foto Project',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Yes',
          cancelTitle: 'No',
          // footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
        .then(async (res) => {
          if (res) {
            switch (comment) {
              case 'firstPhoto':
                await this.processRemoveImg(this.tempFirstPhoto.id)
                this.tempFirstPhoto = null
                break;
              case 'secondPhoto':
                await this.processRemoveImg(this.tempSecondPhoto.id)
                this.tempSecondPhoto = null
                break;
              case 'thirdPhoto':
                await this.processRemoveImg(this.tempThirdPhoto.id)
                this.tempThirdPhoto = null
                break;
              case 'fourthPhoto':
                await this.processRemoveImg(this.tempFourthPhoto.id)
                this.tempFourthPhoto = null
                break;
              case 'fifthPhoto':
                await this.processRemoveImg(this.tempFifthPhoto.id)
                this.tempFifthPhoto = null
                break;
              case 'sixthPhoto':
                await this.processRemoveImg(this.tempSixthPhoto.id)
                this.tempSixthPhoto = null
                break;
            }
          }
        })
        .catch(err => {
          // An error occurred
        })
    }
  },
}
</script>

<style lang="scss">
.img-priview {
  width: 300px;
  cursor: pointer;
}

.container-delete {
  display: flex;
  background: #CB0000;
  border-radius: 99px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
  // z-index: 5;
  // position: position-relative p-2;
}
</style>
