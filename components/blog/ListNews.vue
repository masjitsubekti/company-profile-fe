<template>
  <div>
    <section class="blog-grid section-padding">
      <div class="container">
        <div class="sidebar-widget">
          <h3 class="widget-title">Search Form</h3>
          <span class="section-divider"></span>
          <div class="contact-form-action">
            <form method="post">
              <div class="form-group">
                <input class="form-control" type="search" name="search" placeholder="Search here...">
                <button type="button" class="search-icon"><span class="la la-search"></span></button>
              </div>
            </form>
          </div>
        </div><!-- end sidebar-widget -->
        <div class="row">
          <div class="col-lg-12">
            <div class="blog-left-sidebar">
              <div class="row">
                <div class="col-lg-4 column-td-half" v-for="data in 8" :key="data">
                  <div class="card-item blog-card">
                    <div class="card-image">
                      <a href="blog-single.html" class="card__img"><img src="~/assets/theme/images/img9.jpg" alt=""></a>
                      <div class="card-badge">
                        <span class="badge-label">24 Jan</span>
                      </div>
                    </div><!-- end card-image -->
                    <div class="card-content">
                      <h3 class="card__title mt-0">
                        <a href="blog-single.html">It’s Great the Government is Tightening Gambling</a>
                      </h3>
                      <div class="card-action">
                        <ul class="card-duration d-flex align-items-center">
                          <li>By<a href="#" class="blog-admin-name">TechyDevs</a></li>
                          <li><span class="blog__panel-comment">4 Comments</span></li>
                          <li><span class="blog__panel-likes">130 Likes</span></li>
                        </ul>
                      </div><!-- end card-action -->
                    </div><!-- end card-content -->
                  </div><!-- end card-item -->
                </div><!-- end col-lg-6 -->
              </div>
            </div>
          </div><!-- end col-lg-8 -->
        </div><!-- end row -->
        <div class="row">
          <div class="col-lg-12">
            <div class="page-navigation-wrap mt-4 text-center">
              <div class="page-navigation-inner d-inline-block">
                <div class="page-navigation">
                  <a href="#" class="page-go page-prev">
                    <i class="la la-arrow-left"></i>
                  </a>
                  <ul class="page-navigation-nav">
                    <li><a href="#" class="page-go-link">1</a></li>
                    <li class="active"><a href="#" class="page-go-link">2</a></li>
                    <li><a href="#" class="page-go-link">3</a></li>
                    <li><a href="#" class="page-go-link">4</a></li>
                    <li><a href="#" class="page-go-link">5</a></li>
                  </ul>
                  <a href="#" class="page-go page-next">
                    <i class="la la-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div><!-- end page-navigation-wrap -->
          </div><!-- end col-lg-12 -->
        </div><!-- end row -->
      </div><!-- end container -->
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
