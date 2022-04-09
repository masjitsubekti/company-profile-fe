<template>
  <div>
    <BreadcumbBlog />
    <ListNews />
  </div>
</template>

<script>
import BreadcumbBlog from '~/components/blog/BreadcumbBlog.vue'
import ListNews from '~/components/blog/ListNews.vue'

export default {
  name: 'IndexBlog',
  components: {
    BreadcumbBlog,
    ListNews
  }
}
</script>

<style>

</style>
