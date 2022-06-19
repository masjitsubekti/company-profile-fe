<template>
  <div class="article-detail">
    <h1 class="header-title">{{data.title}}</h1>
    <p class="date-upload">Tanggal&nbsp;:&nbsp;{{$moment(data.created_at).format('DD MMMM YYYY')}}</p>
    <div class="img-poster">
      <img :src="data.image" :alt="data.title" />
    </div>
    <div class="deskripsi" v-html="data.deskripsi"></div>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetail',
  // props: ['data']
  props: {
    data: {
      default: () => null
    }
  }
}
</script>
