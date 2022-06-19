<template>
  <div>
    <BreadcumbBlog title="News" :items="items" />
    <ListNews />
  </div>
</template>

<script>
import BreadcumbBlog from '~/components/shared-components/breadcumb/BreadcumbBlog.vue'
import ListNews from '~/components/blog/ListNews.vue'
import {
  isEmpty
} from 'lodash'

export default {
  name: 'IndexBlog',
  middleware({
    redirect,
    route
  }) {
    if (isEmpty(route.query)) {
      return redirect({
        name: 'blog',
        query: {
          page: 1,
          limit: 6
        }
      })
    }
  },
  components: {
    BreadcumbBlog,
    ListNews
  },
  head() {
    return {
      title: 'News | PT. SELARAS HANDASA INTI PERSADA',
      meta: [{
          hid: 'description',
          name: 'description',
          content: 'you can view latest news about PT. SELARAS HANDASA INTI PERSADA'
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Projects | PT. SELARAS HANDASA INTI PERSADA",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "you can view latest news about PT. SELARAS HANDASA INTI PERSADA",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `${window.location.href}`
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "News | PT. SELARAS HANDASA INTI PERSADA",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "you can view latest news about PT. SELARAS HANDASA INTI PERSADA",
        },
      ]
    }
  },
  data() {
    return {
      items: [{
        text: 'PT. SHIPT',
        to: {
          name: 'index'
        }
      }, {
        text: 'News'
      }]
    }
  }
}
</script>

<style>

</style>
