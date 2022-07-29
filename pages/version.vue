<template>
  <div>
    <h2>{{version}}</h2>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      version: process.env.VERSION
    }
  }
}
</script>

<style>

</style>
