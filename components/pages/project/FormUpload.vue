<template>
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
            @click="tempSecondPhoto = null"
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
            @click="tempThirdPhoto = null"
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
</template>

<script>
export default {
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
    }
  }
}
</script>

<style>

</style>
