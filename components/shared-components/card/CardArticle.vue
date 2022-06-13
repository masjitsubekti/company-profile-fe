<template>
  <div class="col-lg-4 column-td-half">
    <div class="card-item blog-card">
      <div class="card-image">
        <div class="card__img">
          <img :src="data.image" alt="" v-if="data.image" />
          <img src="~/assets/theme/images/img9.jpg" alt="" v-else />
        </div>
        <div class="card-badge">
          <span class="badge-label">{{$moment(data.created_at).format('DD MMM YYYY')}}</span>
        </div>
      </div><!-- end card-image -->
      <div class="card-content">
        <h3 class="card__title mt-0">
          <p @click="toDetail()">{{data.title}}</p>
        </h3>
        <!-- <div class="card-action">
          <ul class="card-duration d-flex align-items-center">
            <li>By<a href="#" class="blog-admin-name">TechyDevs</a></li>
            <li><span class="blog__panel-comment">4 Comments</span></li>
            <li><span class="blog__panel-likes">130 Likes</span></li>
          </ul>
        </div> -->
      </div><!-- end card-content -->
    </div><!-- end card-item -->
  </div><!-- end col-lg-6 -->
</template>

<script>
import moment from 'moment'

export default {
  name: 'CardArticle',
  props: {
    data: {
      default: () => []
    }
  },
  emits: ['toDetail'],
  methods: {
    toDetail() {
      this.$emit('toDetail', this.data)
    }
  }
}
</script>

<style>

</style>
