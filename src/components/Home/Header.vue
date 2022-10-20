<template>
  <header class="header-light">
    <!--<div class="top-bar d-none d-md-block pt-15 pb-15">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-xl-8 col-lg-8 col-md-7">
            <div class="header-info">
              <span class="header-address d-none d-lg-inline"
                ><i class="fa fa-map-marker-alt"></i>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                  >58 Howard Street #2 San Francisco</a
                >
              </span>
              <span class="header-phone"
                ><i class="fas fa-phone"></i>
                <a href="callto:+1-800-833-9780">+1 800 833 9780</a></span
              >
              <span class="header-email d-none d-xl-inline"
                ><i class="fas fa-envelope"></i>
                <a href="mailto:info@example.com">info@example.com</a></span
              >
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-5 text-end">
            <div class="header-social">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <div
      id="header-sticky"
      :class="`${
        isSticky
          ? 'header-area header-pad-2 sticky-2 sticky'
          : 'header-area header-pad-2 sticky-2'
      }`"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-3 col-lg-2 col-md-6 col-6">
            <div class="logo logo-border">
              <router-link to="/">
                <img
                  src="../../assets/img/logo/Picaps_Asso_icon.svg"
                  alt="logo"
                />
              </router-link>
            </div>
          </div>
          <div
            class="col-xl-9 col-lg-10 col-md-6 col-6 d-flex justify-content-end"
          >
            <div class="main-menu text-center">
              <scrollactive class="my-nav" :offset="40">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <router-link to="/" class="active"> Home </router-link>
                    </li>
                    <li>
                      <router-link to="/#about" class="active">
                        About Us
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/#faq" class="active">
                        Faqs
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/#patientstory" class="active">
                        Pt Journey
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/#howitworks" class="active">
                        How it works
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/#participate" class="active">
                        Participate
                      </router-link>
                    </li>
                    <!-- 
                    <a href="#patientstory">Section 3</a>

                    <b-nav-item href="#howitworks" class="scroll"
                      ><span>How It Works</span></b-nav-item
                    >

                    <b-nav-item href="#faq" v-smooth-scroll class="scroll"
                      ><span>Faq</span></b-nav-item
                    >
                    <b-nav-item href="#participate" class="scroll"
                      ><span>Participate</span></b-nav-item
                    >-->

                    <!--
                  <li>
                    <router-link to="/about"><a>Pages</a></router-link>
                    <ul class="sub-menu">
                      <li>
                        <router-link to="/pricing">Pricing</router-link>
                      </li>
                      <li>
                        <router-link to="/portfolio">Portfolio</router-link>
                      </li>
                      <li>
                        <router-link to="/portfolio-details"
                          >Portfolio Details</router-link
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
                  <li><router-link to="/contact">Contact</router-link></li>-->
                  </ul>
                </nav>
              </scrollactive>
            </div>
            <div
              class="
                header-right-info
                d-flex
                align-items-center
                justify-content-end
              "
            >
              <!--<div class="header-search" @click="handleSearch">
                <button class="search-toggle" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </div>-->
              <div class="sidebar__menu d-lg-none">
                <div
                  @click="menuOption.menuShow = !menuOption.menuShow"
                  class="sidebar-toggle-btn sidebar-toggle-btn-2 ml-30"
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
  <!--<div
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
  </div>-->
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
              <img src="../../assets/img/logo/Picaps_icon.svg" alt="logo" />
            </a>
          </div>
          <div class="mobile-menu fix">
            <div class="side-info-content sidebar-menu mm-menu">
              <ul>
                <li>
                  <router-link to="/" class="active"> Home </router-link>
                </li>
                <li>
                  <router-link to="/#about" class="active">
                    About Us
                  </router-link>
                </li>
                <li>
                  <router-link to="/#faq" class="active"> Faqs </router-link>
                </li>
                <li>
                  <router-link to="/#patientstory" class="active">
                    Pt Journey
                  </router-link>
                </li>
                <li>
                  <router-link to="/#howitworks" class="active">
                    How it works
                  </router-link>
                </li>
                <li>
                  <router-link to="/#participate" class="active">
                    Participate
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

          <!-- <div class="sidebar__search p-relative mt-40 mb-20">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button type="submit"><i class="fad fa-search"></i></button>
            </form>
          </div>
         <div class="sidebar__contact mb-45">
            <ul>
              <li class="wow fadeInUp" data-wow-delay="1s">
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
              <li class="wow fadeInUp" data-wow-delay="1s">
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
              <li class="wow fadeInUp" data-wow-delay="1s">
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
          </div>-->
        </div>
      </div>
    </div>
  </div>

  <div
    class="body-overlay transition-3"
    v-bind:class="[menuOption.menuShow === true ? 'opened' : '']"
  ></div>
  <!-- Mobile Menu End -->
</template>

<script>
export default {
  name: "HomeTwoHeader",
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