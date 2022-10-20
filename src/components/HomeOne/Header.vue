<template>
  <header>
    <div
      id="header-sticky"
      :class="`${
        isSticky
          ? 'header-area header-transparent header-pad header-border sticky'
          : 'header-area header-transparent header-pad header-border'
      }`"
    >
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-xl-2 col-lg-2 col-6">
            <div class="logo logo-border">
              <router-link to="/">
                <img
                  class="logo-white"
                  src="../../assets/img/logo/NovaXonLogo_white.png"
                  alt="logo"
                />
              </router-link>
            </div>
          </div>
          <div class="col-xl-8 col-lg-8 d-none d-lg-block">
            <div class="main-menu text-center">
              <nav id="mobile-menu">
                <ul>
                  <li>
                    <router-link to="/"> Home </router-link>
                  </li>
                  <li>
                    <router-link to="/about">About</router-link>
                  </li>
                  <li>
                    <router-link to="/services">Services</router-link>
                    <ul class="sub-menu">
                      <li>
                        <router-link to="/services">Services</router-link>
                      </li>
                      <li>
                        <router-link to="/services-details"
                          >Services Details</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/about"><a>Pages</a></router-link>
                    <ul class="sub-menu">
                      <li>
                        <router-link to="/pricing">Pricing</router-link>
                      </li>
                      <li>
                        <router-link to="/platform">Platform</router-link>
                      </li>
                      <li>
                        <router-link to="/platform-details"
                          >Platform Details</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/team">Team</router-link>
                      </li>
                      <li>
                        <router-link to="/team-details"
                          >Team Details</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/faq">Faq</router-link>
                      </li>
                      <li>
                        <router-link to="/error-page">404</router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/blog">News</router-link>
                    <ul class="sub-menu">
                      <li>
                        <router-link to="/blog">News</router-link>
                      </li>
                      <li>
                        <router-link to="/blog-details"
                          >News Details</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/contact">Contact</router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-6">
            <div
              class="
                header-right-info
                d-flex
                align-items-center
                justify-content-end
              "
            >
              <div class="header-search" @click="handleSearch">
                <button class="search-toggle" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </div>
              <div class="sidebar__menu d-lg-none">
                <div
                  @click="menuOption.menuShow = !menuOption.menuShow"
                  class="sidebar-toggle-btn ml-30"
                  id="sidebar-toggle"
                >
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </div>
              </div>
              <div class="header-btn d-none d-lg-block">
                <router-link to="/contact" class="tp-btn">Contact</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- search popup area start -->
  <div
    :class="`${
      searchPopup
        ? 'search__popup transition-3 opened'
        : 'search__popup transition-3'
    }`"
  >
    <div class="search__popup-close">
      <button type="button" class="search-popup-close-btn" @click="handleClose">
        <i class="fal fa-times"></i>
      </button>
    </div>
    <div class="search__popup-wrapper">
      <form action="#">
        <div class="search__popup-input">
          <input type="text" placeholder="Enter Your Keyword..." />
          <button type="submit"><i class="far fa-search"></i></button>
        </div>
      </form>
    </div>
  </div>
  <!-- search popup area end -->

  <!-- Mobile Menu Start -->
  <div class="fix">
    <div
      class="side-mobile-menu"
      :class="[menuOption.menuShow === true ? 'active' : '']"
    >
      <div class="sidebar__wrapper">
        <div
          @click="menuOption.menuShow = !menuOption.menuShow"
          class="sidebar__close"
        >
          <button class="sidebar__close-btn" id="sidebar__close-btn">
            <i class="fal fa-times"></i>
          </button>
        </div>
        <div class="sidebar__content">
          <div class="logo mb-40">
            <a href="index.html">
              <img src="../../assets/img/logo/logo-dark.png" alt="logo" />
            </a>
          </div>
          <div class="mobile-menu fix">
            <div class="side-info-content sidebar-menu mm-menu">
              <ul>
                <li
                  class="menu-item-has-children has-droupdown"
                  v-bind:class="[
                    menuOption.homeDropdown === true ? 'active' : '',
                  ]"
                >
                  <a
                    v-on:click="
                      menuOption.homeDropdown = !menuOption.homeDropdown
                    "
                    >Home</a
                  >
                  <ul
                    class="sub-menu"
                    v-bind:class="[
                      menuOption.homeDropdown === true ? 'active' : '',
                    ]"
                  >
                    <li>
                      <router-link to="/home-one">Home Style 1</router-link>
                    </li>
                    <li>
                      <router-link to="/home">Home Style 2</router-link>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="about.html">About</a>
                </li>

                <li
                  class="menu-item-has-children has-droupdown"
                  v-bind:class="[
                    menuOption.serviceDropdown === true ? 'active' : '',
                  ]"
                >
                  <a
                    @click="
                      menuOption.serviceDropdown = !menuOption.serviceDropdown
                    "
                    >Services</a
                  >
                  <ul
                    class="sub-menu"
                    :class="[
                      menuOption.serviceDropdown === true ? 'active' : '',
                    ]"
                  >
                    <li>
                      <router-link to="/services">Services</router-link>
                    </li>
                    <li>
                      <router-link to="/services-details"
                        >Services Details</router-link
                      >
                    </li>
                  </ul>
                </li>

                <li
                  class="menu-item-has-children has-droupdown"
                  :class="[menuOption.pagesDropDown === true ? 'active' : '']"
                >
                  <a
                    @click="
                      menuOption.pagesDropDown = !menuOption.pagesDropDown
                    "
                    >Pages</a
                  >
                  <ul
                    class="sub-menu"
                    :class="[menuOption.pagesDropDown === true ? 'active' : '']"
                  >
                    <li>
                      <router-link to="/pricing">Pricing</router-link>
                    </li>
                    <li>
                      <router-link to="/platform">Platform</router-link>
                    </li>
                    <li>
                      <router-link to="/platform-details"
                        >Platform Details</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/team">Team</router-link>
                    </li>
                    <li>
                      <router-link to="/team-details">Team Details</router-link>
                    </li>
                    <li>
                      <router-link to="/faq">Faq</router-link>
                    </li>
                    <li>
                      <router-link to="/error-page">Faq</router-link>
                    </li>
                  </ul>
                </li>

                <li
                  class="menu-item-has-children has-droupdown"
                  v-bind:class="[
                    menuOption.blogDropdown === true ? 'active' : '',
                  ]"
                >
                  <a
                    v-on:click="
                      menuOption.blogDropdown = !menuOption.blogDropdown
                    "
                    >News</a
                  >
                  <ul
                    class="sub-menu"
                    v-bind:class="[
                      menuOption.blogDropdown === true ? 'active' : '',
                    ]"
                  >
                    <li>
                      <router-link to="/blog">News</router-link>
                    </li>
                    <li>
                      <router-link to="/blog-details">News Details</router-link>
                    </li>
                  </ul>
                </li>

                <li>
                  <router-link to="/contact" class="border-0"
                    >Contact</router-link
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="sidebar__search p-relative mt-40 mb-20">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button type="submit"><i class="fad fa-search"></i></button>
            </form>
          </div>
          <div class="sidebar__contact mb-45">
            <ul>
              <li>
                <div class="icon theme-color">
                  <i class="fal fa-envelope"></i>
                </div>
                <div class="text theme-color">
                  <span
                    ><a href="mailto:support@zibber.com"
                      >support@zibber.com</a
                    ></span
                  >
                </div>
              </li>

              <li>
                <div class="icon theme-color">
                  <i class="fas fa-phone-volume"></i>
                </div>
                <div class="text theme-color">
                  <span
                    ><a href="tel:(+642)-394-396-432"
                      >(+642) 394 396 432</a
                    ></span
                  >
                </div>
              </li>

              <li>
                <div class="icon">
                  <i class="fal fa-map-marker-alt"></i>
                </div>
                <div class="text">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                    >Ave 14th Street, Mirpur 210, <br />
                    San Franciso, USA 3296.</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="body-overlay transition-3"
    :class="[menuOption.menuShow === true ? 'opened' : '']"
  ></div>
  <!-- Mobile Menu End -->
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      isSticky: false,
      searchPopup: false,
      menuOption: {
        menuShow: false,
        menuSearch: false,
        homeDropdown: false,
        serviceDropdown: false,
        pagesDropDown: false,
        blogDropdown: false,
        aboutDropdown: false,
      },
    };
  },
  methods: {
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    handleSearch() {
      this.searchPopup = true;
    },
    handleClose() {
      this.searchPopup = false;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
  },
};
</script>

