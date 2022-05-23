<template>
  <!-- <b-dropdown
   variant="link"
   toggle-class="text-decoration-none"
   no-caret
   :no-flip="true">
    <template #button-content>
      <b-icon
        icon="three-dots"
        class="cursor-pointer color-blue-grey"
        font-scale="1"></b-icon>
    </template>
    <b-dropdown-item-button @click="$emit('edit')" v-if="edit">
      <div class="d-flex align-items-center">
        <b-icon
          icon="pencil"
          class="color-blue-grey mr-2"
          font-scale="1"></b-icon>
        <p class="text-sm">Edit</p>
      </div>
    </b-dropdown-item-button>
    <b-dropdown-item-button @click="$emit('delete')" v-if="del">
      <div class="d-flex align-items-center">
        <b-icon
          icon="trash"
          class="text-danger mr-2"
          font-scale="1"></b-icon>
        <p class="text-sm">Hapus</p>
      </div>
    </b-dropdown-item-button>
  </b-dropdown> -->
  <div class="d-flex align-items-center">
    <div class="d-flex align-items-center mr-5 cursor-pointer" @click="$emit('edit')" v-if="edit">
      <b-icon
        icon="pencil"
        class="color-blue-grey mr-2"
        font-scale="1"></b-icon>
      <p class="text-sm color-blue-grey">Edit</p>
    </div>
    <div class="d-flex align-items-center cursor-pointer" @click="$emit('delete')" v-if="del">
      <b-icon
        icon="trash"
        class="text-danger mr-2"
        font-scale="1"></b-icon>
      <p class="text-sm text-danger">Hapus</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    edit: {
      default: () => null
    },
    del: {
      default: () => null
    },
  }
}
</script>

<style>

</style>
