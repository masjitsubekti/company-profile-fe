<template>
  <!-- eslint-disable -->
  <div>
    <b-card class="rounded" border-variant="white">
      <b-card-header header-bg-variant="white" header-border-variant="white">
        <h4>{{titlePage}}</h4>
      </b-card-header>
      <div class="mx-4 my-2">
        <ValidationObserver ref="form">
          <form @submit.prevent="submit">
            <div class="mb-3">
              <ValidationProvider
                name="Judul"
                rules="required"
                v-slot="{ errors }">
                <label for="idTitle" class="text-body2">Judul</label>
                <b-form-input
                  id="idTitle"
                  v-model="title"
                  placeholder="Judul Artikel"
                  class="input-primary rounded"></b-form-input>
                <span class="text-error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="">
              <p class="text-body2">Upload Foto</p>
              <div class="position-relative p-2 d-inline-block" v-if="tempFirstPhoto">
                <div
                  class="container-delete"
                  style=""
                  @click="tempFirstPhoto = null"
                  v-if="tempFirstPhoto !== null">
                  <b-icon
                    icon="x"
                    class="text-white"
                    font-scale="2"></b-icon>
                </div>
                <img :src="tempFirstPhoto" class="img-priview-article" />
              </div>
              <div class="position-relative p-2 d-inline-block" v-else>
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
                  <img v-if="firstPhoto.src === null" class="img-priview-article" src="~/assets/images/add-image.svg" :alt="firstPhoto.name" />
                  <img v-else class="img-priview-article" :src="firstPhoto.src" :alt="firstPhoto.name" />
                </file-upload>
              </div>
            </div>
            <div class="mb-3">
              <ValidationProvider
                name="Keterangan"
                rules="required"
                v-slot="{ errors }">
                <label for="idDesc" class="text-body2">Keterangan</label>
                <DxHtmlEditor v-model:value="description" height="700px">
                  <DxMediaResizing :enabled="true" />
                  <DxToolbar :multiline="isMultiline">
                    <DxItem name="undo" />
                    <DxItem name="redo" />
                    <DxItem name="separator" />
                    <DxItem :accepted-values="sizeValues" name="size" />
                    <!-- <DxItem :accepted-values="fontValues" name="font" /> -->
                    <DxItem name="separator" />
                    <DxItem name="bold" />
                    <DxItem name="italic" />
                    <DxItem name="strike" />
                    <DxItem name="underline" />
                    <DxItem name="separator" />
                    <DxItem name="alignLeft" />
                    <DxItem name="alignCenter" />
                    <DxItem name="alignRight" />
                    <DxItem name="alignJustify" />
                    <DxItem name="separator" />
                    <DxItem name="orderedList" />
                    <DxItem name="bulletList" />
                    <DxItem name="separator" />
                    <DxItem :accepted-values="headerValues" name="header" />
                    <DxItem name="separator" />
                    <DxItem name="color" />
                    <DxItem name="background" />
                    <DxItem name="separator" />
                    <DxItem name="link" />
                    <DxItem name="image" />
                    <DxItem name="separator" />
                    <DxItem name="clear" />
                    <DxItem name="codeBlock" />
                    <DxItem name="blockquote" />
                    <DxItem name="separator" />
                    <DxItem name="insertTable" />
                    <DxItem name="deleteTable" />
                    <DxItem name="insertRowAbove" />
                    <DxItem name="insertRowBelow" />
                    <DxItem name="deleteRow" />
                    <DxItem name="insertColumnLeft" />
                    <DxItem name="insertColumnRight" />
                    <DxItem name="deleteColumn" />
                  </DxToolbar>
                </DxHtmlEditor>
                <span class="text-error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="mb-3">
              <label for="isShowId" class="text-body2">Publish</label>
              <b-form-checkbox
                id="isShowId"
                switch
                v-model="isShow"
                size="lg"></b-form-checkbox>
            </div>
          </form>
        </ValidationObserver>
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
            name: 'cms-article'
          })">
            Kembali
          </b-button>
        </div>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
import {
  DxHtmlEditor,
  DxToolbar,
  DxMediaResizing,
  DxItem,
} from 'devextreme-vue/html-editor'
import VueUploadComponent from 'vue-upload-component'
import {
  isBoolean,
  isString
} from 'lodash'
import {
  artikelUseCase
} from '~/domain/usecase'

export default {
  name: 'ArticleForm',
  components: {
    FileUpload: VueUploadComponent,
    DxHtmlEditor,
    DxToolbar,
    DxMediaResizing,
    DxItem,
  },
  data() {
    return {
      title: null,
      titlePage: null,
      tempFirstPhoto: null,
      firstPhoto: {
        src: null,
        name: null,
        image: null
      },
      description: null,
      sizeValues: ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'],
      fontValues: ['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana'],
      headerValues: [false, 1, 2, 3, 4, 5],
      isMultiline: true,
      isShow: false,
      id: null,
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      this.$store.dispatch('showLoading')
      artikelUseCase.getDataForm(this.$route.params.id).then((res) => {
        this.titlePage = res.title
        if (res.data) {
          if (!res.data.error) {
            const result = res.data.result.data
            this.title = result.title
            this.tempFirstPhoto = `${result.image}`
            this.description = result.deskripsi
            this.isShow = this.publishOrArchive(result.is_publish)
          }
        }
        this.$store.dispatch('hideLoading')
      })
    },
    publishOrArchive(value) {
      if (isBoolean(value)) {
        if (value === true) {
          return 'PUBLISHED'
        } else {
          return 'ARCHIVED'
        }
      }
      if (isString(value)) {
        if (value === 'PUBLISHED') {
          return true
        } else if (value === 'ARCHIVED') {
          return false
        }
      }
    },
    removeImage() {
      this.firstPhoto.src = null
      this.firstPhoto.image = null
    },
    onFirstPhoto(newFile, oldFile) {
      const file = newFile.file
      this.firstPhoto.src = URL.createObjectURL(file)
      this.firstPhoto.image = file
    },
    processSubmit() {
      // {
      //   image: this.firstPhoto.image,
      //   title: this.title,
      //   is_publish: this.publishOrArchive(this.isShow),
      //   deskripsi: this.description
      // }
      const formData = new FormData()
      formData.append('image', this.firstPhoto.image)
      formData.append('title', this.title)
      formData.append('is_publish', this.publishOrArchive(this.isShow))
      formData.append('deskripsi', this.description)
      artikelUseCase.submitData(this.id, formData).then((response) => {
        if (!response.error) {
          this.$root.$bvToast.toast(`${response.result.message}`, {
            title: 'Sukses',
            toaster: 'b-toaster-bottom-center',
            // solid: true,
            autoHideDelay: 3000,
            appendToast: true,
            variant: 'success'
          })
          this.$router.push({
            name: 'cms-article'
          })
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

<style lang="scss">
.img-priview-article {
  width: 300px;
  // height: 200px;
}
</style>
