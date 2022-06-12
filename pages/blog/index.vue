<template>
  <div>
    <BreadcumbBlog title="News" :items="items" />
    <ListNews />
  </div>
</template>

<script>
import BreadcumbBlog from '~/components/shared-components/breadcumb/BreadcumbBlog.vue'
import ListNews from '~/components/blog/ListNews.vue'

export default {
  name: 'IndexBlog',
  components: {
    BreadcumbBlog,
    ListNews
  },
  data() {
    return {
      items: [{
        text: 'PT. SHIPT',
        to: {
          name: 'index'
        }
      },{
        text: 'News'
      }]
    }
  }
}
</script>

<style>

</style>
