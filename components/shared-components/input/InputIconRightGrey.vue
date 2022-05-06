<template>
  <div>
    <b-input-group>
      <b-form-input class="input-primary" :value="modelValue" @input="input($event)" :placeholder="placeholder"></b-form-input>
      <b-input-group-append @click="submit()">
        <b-button size="sm" text="Button" variant="primary" class="btn-primary">
          <b-icon :icon="iconBtn" aria-hidden="true" font-scale="1"></b-icon>
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import {
  BInputGroup
} from 'bootstrap-vue'

export default {
  name: 'InputIconRightGrey',
  components: {
    BInputGroup,
  },
  props: {
    placeholder: {
      type: String,
      required: false,
      default: () => ''
    },
    modelValue: {
      default: () => null,
    },
    canClick: {
      type: Boolean,
      default: () => false
    },
    iconBtn: {
      default: () => 'search'
    }
  },
  emits: ['update:modelValue', 'submitInput'],
  methods: {
    submit() {
      if (this.canClick) {
        this.$emit('submitInput')
      }
    },
    input(event) {
      this.$emit('update:modelValue', event)
    }
  },
}
</script>

<style></style>
