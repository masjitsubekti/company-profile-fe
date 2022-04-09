<template>
  <header class="header-menu-area">
    <div class="header-menu-content">
      <div class="container-fluid">
        <div class="main-menu-content">
          <div class="row align-items-center">
            <div class="col-lg-2">
              <div class="logo-box">
                <a class="logo"><img src="~/assets/images/logo/logo-ship.png" alt="logo" style="width: 140px; height: 40px; object-fit: cover;"></a>
                <div class="menu-toggler">
                  <i class="la la-bars"></i>
                  <i class="la la-times"></i>
                </div>
              </div>
            </div><!-- end col-lg-2 -->
            <div class="col-lg-10">
              <div class="menu-wrapper">
                <nav class="main-menu">
                  <ul>
                    <li><a href="contact.html">Home</a></li>

                    <li><nuxt-link to="/about">About Us</nuxt-link></li>

                    <li><a href="contact.html">Contact</a></li>

                    <li><a href="contact.html">Project</a></li>

                    <li><a href="contact.html">Client</a></li>

                    <li><a href="contact.html">News</a></li>
                  </ul><!-- end ul -->
                </nav><!-- end main-menu -->
              </div><!-- end menu-wrapper -->
            </div><!-- end col-lg-10 -->
          </div><!-- end row -->
        </div>
      </div><!-- end container-fluid -->
    </div><!-- end header-menu-content -->
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header'
}
</script>
