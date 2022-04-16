<template>
  <section class="footer-area section-bg-2 padding-top-100px padding-bottom-40px">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 column-td-half">
          <div class="footer-widget">
            <NuxtLink class="logo" to="/">
              <img src="~/assets/images/logo/logo-ship.png" alt="footer logo" class="footer__logo mb-4" style="height: 100px">
            </NuxtLink>
            <!-- <ul class="list-items footer-address">
              <li><a href="tel:+1631237884">+163 123 7884</a></li>
              <li><a href="mailto:konstruksimep.ship@gmail.com" class="mail">konstruksimep.ship@gmail.com</a></li>
            </ul> -->
            <h3 class="widget-title font-size-17 mt-4">We are on</h3>
            <ul class="social-profile">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/ptshipt/"><i class="fa fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
          </div><!-- end footer-widget -->
        </div><!-- end col-lg-3 -->
        <div class="col-lg-3 column-td-half">
          <div class="footer-widget">
            <h3 class="widget-title">Head Branch Office <br />Surabaya</h3>
            <span class="section-divider"></span>
            <ul class="list-items footer-address">
              <li><a><i class="fa fa-map-marker mr-2" />Surabaya</a></li>
              <li><a href="tel:03187856942"><i class="fa fa-phone mr-2" />(031)87856942</a></li>
              <li><a href="mailto:konstruksimep.ship@gmail.com" class="mail"><i class="fa fa-envelope mr-2" />konstruksimep.ship@gmail.com</a></li>
            </ul>
          </div><!-- end footer-widget -->
        </div><!-- end col-lg-3 -->
        <div class="col-lg-3 column-td-half">
          <div class="footer-widget">
            <h3 class="widget-title">Head Branch Office <br />Bandung</h3>
            <span class="section-divider"></span>
            <ul class="list-items footer-address">
              <li><a><i class="fa fa-map-marker mr-2" />Bandung</a></li>
              <li><a href="tel:02263743919"><i class="fa fa-phone mr-2" />(022)63743919</a></li>
              <li><a href="mailto:konstruksimep.ship@gmail.com" class="mail"><i class="fa fa-envelope mr-2" />konstruksimep.ship@gmail.com</a></li>
            </ul>
          </div><!-- end footer-widget -->
        </div><!-- end col-lg-3 -->
        <!-- <div class="col-lg-3 column-td-half">
          <div class="footer-widget">
            <h3 class="widget-title">Download App</h3>
            <span class="section-divider"></span>
            <ul class="btn-box">
              <li>
                <a href="#" class="theme-btn">
                  <i class="la la-apple icon-element"></i>
                  <span class="app-titles">
                    <span class="app__subtitle">Download on the</span>
                    <span class="app__title">App Store</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" class="theme-btn">
                  <i class="la la-android icon-element"></i>
                  <span class="app-titles">
                    <span class="app__subtitle">Get in on</span>
                    <span class="app__title">Google Play</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div> -->
      </div><!-- end row -->
      <div class="copyright-content">
        <div class="row align-items-center">
          <div class="col-lg-10">
            <p class="copy__desc">&copy; {{$moment().format('YYYY')}} PT SHIPT</p>
          </div><!-- end col-lg-9 -->
          <!-- <div class="col-lg-2">
            <div class="sort-ordering">
              <select class="sort-ordering-select">
                <option value="1">English</option>
                <option value="2">Deutsch</option>
                <option value="3">Español</option>
                <option value="4">Français</option>
                <option value="5">Bahasa Indonesia</option>
                <option value="6">Bangla</option>
                <option value="7">日本語</option>
                <option value="8">한국어</option>
                <option value="9">Nederlands</option>
                <option value="10">Polski</option>
                <option value="11">Português</option>
                <option value="12">Română</option>
                <option value="13">Русский</option>
                <option value="14">ภาษาไทย</option>
                <option value="15">Türkçe</option>
                <option value="16">中文(简体)</option>
                <option value="17">中文(繁體)</option>
                <option value="17">Hindi</option>
              </select>
            </div>
          </div> -->
        </div><!-- end row -->
      </div><!-- end copyright-content -->
    </div><!-- end container -->
  </section><!-- end footer-area -->
</template>

<script>
import moment from 'moment'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer'
}
</script>
