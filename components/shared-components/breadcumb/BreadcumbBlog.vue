<template>
  <section class="breadcrumb-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-content">
            <div class="section-heading">
              <h2 class="section__title">{{this.title}}</h2>
            </div>
            <ul class="breadcrumb__list">
              <li
                class="active__list-item"
                v-for="(data, key) in items"
                :key="key">
                <nuxt-link :to="data.to" v-if="data.to">{{data.text}}</nuxt-link>
                <span v-else>{{data.text}}</span>
              </li>
            </ul>
          </div><!-- end breadcrumb-content -->
        </div><!-- end col-lg-12 -->
      </div><!-- end row -->
    </div><!-- end container -->
  </section><!-- end breadcrumb-area -->
</template>

<script>
export default {
  name: 'BreadcumbBlog',
  props: {
    title: {
      default: () => 'Home'
    },
    items: {
      default: () => []
    }
  }
}
</script>
