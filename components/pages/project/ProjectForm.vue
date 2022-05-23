<template>
  <div>
    <b-card class="rounded" border-variant="white">
      <b-card-header header-bg-variant="white" header-border-variant="white">
        <h4>Tambah Project</h4>
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
                    <label for="typePojectId" class="text-body2">Jenis Porject</label>
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
                      v-model="clientId"></v-select>
                    <span class="text-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="mb-3">
                  <ValidationProvider
                    name="Scope"
                    rules="required"
                    v-slot="{ errors }">
                    <label for="scopeId" class="text-body2">Scope</label>
                    <b-form-input
                      id="scopeId"
                      v-model="scope"
                      class="input-primary rounded"></b-form-input>
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
                    name="Tanggal Pengerjaan"
                    rules="required"
                    v-slot="{ errors }">
                    <label for="dateId" class="text-body2">Tanggal Pengerjaan</label>
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
                <div>
                  <label for="isShowId" class="text-body2">Tampilkan</label>
                  <b-form-checkbox
                    id="isShowId"
                    switch
                    size="lg"></b-form-checkbox>
                </div>
              </b-col>
            </b-row>
          </form>
        </ValidationObserver>
        <b-row class="mt-3">
          <b-col
            md="12"
            xl="4"
            class="p-3">
            <div class="d-flex justify-content-start">
              <div class="position-relative" v-if="tempFirstPhoto">
                <div
                  class="container-delete"
                  style="right: 0; top: 0; z-index: 5"
                  @click="tempFirstPhoto = null"
                  v-if="tempFirstPhoto !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <img :src="tempFirstPhoto" class="img-priview" />
              </div>
              <div class="position-relative" v-else>
                <div
                  class="container-delete"
                  style="right: 0; top: 0; z-index: 5"
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
            <div class="d-flex justify-content-start">
              <div class="position-relative" v-if="tempSecondPhoto">
                <div
                  class="container-delete"
                  style="right: 0; top: 0; z-index: 5"
                  @click="tempSecondPhoto = null"
                  v-if="tempSecondPhoto !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <img :src="tempSecondPhoto" class="img-priview" />
              </div>
              <div class="position-relative" v-else>
                <div
                  class="container-delete"
                  style="right: 0; top: 0; z-index: 5"
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
        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import VueUploadComponent from 'vue-upload-component'

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
      },
      tempSecondPhoto: null,
      secondPhoto: {
        src: null,
        name: null,
      },
      tempThirdPhoto: null,
      thirdPhoto: {
        src: null,
        name: null,
      },
      name: null,
      clientId: null,
      clientOptions: [],
      typeProject: null,
      typeProjectOptions: [],
      scope: null,
      address: null,
      date: null,
      description: null
    }
  },
  methods: {
    pushListImage(item, from) {
      console.log('ok from ', from)
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
    },
    onFirstPhoto(newFile, oldFile) {
      console.log('first onupload', newFile)
      this.pushListImage(newFile.file, 'firstPhoto')
    },
    onSecondPhoto(newFile, oldFile) {
      this.pushListImage(newFile.file, 'secondPhoto')
    },
    onThirdPhoto(newFile, oldFile) {
      this.pushListImage(newFile.file, 'thirdPhoto')
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
    },
    submit() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          this.processSubmit()
        }
      })
    }
  },
}
</script>

<style lang="scss">
.img-priview {
  width: 300px;
}

.container-delete {
  display: flex;
  background: #CB0000;
  border-radius: 99px;
  z-index: 2;
  position: absolute;
  cursor: pointer;
  // position: position-relative;
}
</style>
