<template>
  <header class="header-menu-area">
    <div class="header-menu-content">
      <div class="container-fluid">
        <div class="main-menu-content">
          <div class="row align-items-center">
            <div class="col-lg-2">
              <div class="logo-box">
                <NuxtLink class="logo" to="/"><img src="~/assets/images/logo/logo-ship.png" alt="logo" style="height: 40px; object-fit: cover;"></NuxtLink>
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
                    <li v-for="(data, index) in menus" :key="index">
                      <nuxt-link :class="classActive(data)" :to="data.route">{{data.title}}</nuxt-link>
                    </li>
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
  name: 'Header',
  data() {
    return {
      menus: [{
          title: 'Home',
          route: {
            name: 'index'
          }
        }, {
          title: 'About Us',
          route: {
            name: 'about'
          }
        },
        {
          title: 'Projects',
          route: {
            name: 'project'
          }
        },
        {
          title: 'Clients',
          route: {
            name: 'client'
          }
        },
        {
          title: 'News',
          route: {
            name: 'blog'
          }
        }
      ]
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset
      var header = document.querySelector('.header-menu-area .header-menu-content')
      if (currentScroll > 100) {
        header.classList.add('fixed-nav')
      } else {
        header.classList.remove('fixed-nav')
        // console.log('header remove', header)
      }
    })
  },
  methods: {
    classActive(val) {
      if (this.$route.name.includes(val.route.name)) {
        return 'is-active'
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
.main-menu>ul>li a.is-active {
  color: #05A027 !important;
}
</style>
