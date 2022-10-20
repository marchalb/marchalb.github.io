<template>
  <footer
    class="footer"
    data-bg-color="#222429"
    :style="{
      backgroundImage: 'url(' + require('../../assets/img/bg/04.png') + ')',
    }"
  >
    <div class="footer-top pt-115 pb-90">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="footer-widget mb-30">
              <div class="footer-logo mb-30">
                <router-link to="/">
                  <img src="../../assets/img/logo/logo.png" alt="" />
                </router-link>
              </div>
              <div class="footer-text mb-20">
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  tepo the.
                </p>
              </div>
              <div class="footer-subsccribe">
                <h5>Subscribe</h5>
                <form action="#">
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Enter your email"
                    required=""
                  />
                  <button type="submit"><i class="fal fa-rocket"></i></button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-md-6">
            <div class="footer-widget mb-30 pl-20">
              <h3 class="footer-title">Departments</h3>
              <div class="footer-menu-2">
                <ul>
                  <li><router-link to="/home">Home</router-link></li>
                  <li><router-link to="/about">About us</router-link></li>
                  <li><router-link to="/blog">Blog</router-link></li>
                  <li><router-link to="/contact">FAQ</router-link></li>
                  <li><router-link to="/contact">Contact us</router-link></li>
                  <li><router-link to="/contact">Locations</router-link></li>
                  <li><router-link to="/blog">Caregivers</router-link></li>
                  <li><router-link to="/blog">New & Blog</router-link></li>
                  <li><router-link to="/platform">Platform</router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 d-lg-none d-xl-block">
            <div class="footer-widget mb-30">
              <h3 class="footer-title">Latest Feed</h3>
              <div class="blog-feeds pr-15">
                <div class="signle-blog-feeds mb-20">
                  <div class="blog-feeds-thumb">
                    <router-link to="/blog-details">
                      <img src="../../assets/img/blog/sm3.jpg" alt="" />
                    </router-link>
                  </div>
                  <div class="blog-feeds-text">
                    <h5>
                      <router-link to="/blog-details"
                        >Lorem ipsum dolor sit am et, consectetur.</router-link
                      >
                    </h5>
                    <span class="feeds-date">14 July 2019</span>
                  </div>
                </div>
                <div class="signle-blog-feeds mb-20">
                  <div class="blog-feeds-thumb">
                    <router-link to="/blog-details"
                      ><img src="../../assets/img/blog/sm2.jpg" alt=""
                    /></router-link>
                  </div>
                  <div class="blog-feeds-text">
                    <h5>
                      <router-link to="/blog-details"
                        >We Are Trying To Do Best Work.</router-link
                      >
                    </h5>
                    <span class="feeds-date">14 July 2019</span>
                  </div>
                </div>
                <div class="signle-blog-feeds mb-20">
                  <div class="blog-feeds-thumb">
                    <router-link to="/blog-details"
                      ><img src="../../assets/img/blog/sm1.jpg" alt=""
                    /></router-link>
                  </div>
                  <div class="blog-feeds-text">
                    <h5>
                      <router-link to="/blog-details"
                        >Nature is The best place for fresh mind.</router-link
                      >
                    </h5>
                    <span class="feeds-date">14 July 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 d-lg-block">
            <div class="footer-widget mb-30">
              <h3 class="footer-title">Instagram</h3>
              <div class="footer-instagram">
                <ul>
                  <li
                    v-for="(item, imageIndex) in galleryData"
                    :key="imageIndex"
                  >
                    <img @click="showImg(imageIndex)" :src="item.img" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-area pt-25 pb-20">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="footer-copyright">
              <p class="white-color">
                Copyright ©2022 NovaXon. All Rights Reserved
              </p>
            </div>
          </div>
          <!--<div class="col-md-6">
            <div class="footer-social text-start text-md-end">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>-->
        </div>
      </div>
    </div>

    <vue-easy-lightbox
      :visible="visible"
      :imgs="galleryData.map((img) => img.img)"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </footer>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  name: "HomeFooter",
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      visible: false,
      index: 0,
      galleryData: [
        {
          id: "1",
          img: require(`@/assets/img/instagram/ins1.jpg`),
        },
        {
          id: "2",
          img: require(`@/assets/img/instagram/ins2.jpg`),
        },
        {
          id: "3",
          img: require(`@/assets/img/instagram/ins3.jpg`),
        },
        {
          id: "4",
          img: require(`@/assets/img/instagram/ins4.jpg`),
        },
        {
          id: "5",
          img: require(`@/assets/img/instagram/ins5.jpg`),
        },
        {
          id: "6",
          img: require(`@/assets/img/instagram/ins6.jpg`),
        },
      ],
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>