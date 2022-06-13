<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <ArticleForm />
  </div>
</template>

<script>
import ArticleForm from '~/components/pages/article/ArticleForm.vue'

export default {
  name: 'AddArticle',
  components: {
    ArticleForm
  },
  data() {
    return {
      items: [{
          text: 'Artikel',
          to: {
            name: 'cms-article'
          }
        },
        {
          text: 'Tambah Artikel',
          active: true
        }
      ]
    }
  }
}
</script>

<style>

</style>
