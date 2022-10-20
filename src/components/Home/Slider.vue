<template>
  <div class="slider-area fix p-relative">
    <div class="slider-active swiper-container">
      <swiper
        ref="mySwiper"
        :modules="modules"
        :loop="true"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :autoplay="{ delay: 5000 }"
      >
        <swiper-slide v-for="item in sliderData" :key="item.id">
          <div
            class="
              slider-list slider-height-2
              swiper-slide
              d-flex
              align-items-center
              pt-70
            "
          >
            <div class="slider-shape"></div>
            <div class="slider-shape-line"></div>
            <div class="slider-shape-line2"></div>
            <div
              class="slider-bg img-zoom"
              :style="{
                backgroundImage:
                  'url(' + require('../../assets/img/slider/' + item.img) + ')',
              }"
            ></div>
            <div class="container p-relative">
              <div class="row">
                <div class="col-12 position-relative">
                  <div class="slider-circle-shape slider-circle-shape-2"></div>
                  <div class="slider-text slider-text-2 z-index">
                    <h2 class="slider-title" v-html="item.title1"></h2>
                    <span class="slider-sub-title" v-html="item.title2"></span>
                    <div class="slide-btn mt-30 d-flex align-items-center">
                      <router-link to="/platform" class="tp-btn"
                        >Discover More</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <!-- If we need pagination -->
      <!-- <div class="swiper-pagination"></div> -->

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev sp-arrow">
        <i class="far fa-angle-left"></i>
      </div>
      <div class="swiper-button-next sp-arrow">
        <i class="far fa-angle-right"></i>
      </div>
    </div>
  </div>

  <!-- video modal  start-->
  <div>
    <div class="video-modal-wrapper">
      <b-modal id="modal-center" centered>
        <p>
          <iframe
            src="https://www.youtube.com/embed/LQmTKxI4Wn4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </p>
      </b-modal>
    </div>
  </div>
  <!-- video modal  end-->
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, /* EffectFade,*/ Autoplay } from "swiper";

export default {
  name: "HomeTwoSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliderData: [
        {
          id: "1",
          img: "MyDataMyDecision.jpeg",
          title1: "My Data, My Choice",
          title2: "Patients in Control",
        },
        {
          id: "2",
          img: "transparency_blockchain.jpeg",
          title1: "Trust through Transparency",
          title2: "Tell me how my data is used",
        },
        {
          id: "3",
          img: "AnonymousEmpoweredPatient.jpeg",
          title1: "Data saves life",
          title2: "Privacy & Anonymity protect you",
        },
        {
          id: "4",
          img: "Blockchain_Digital.png",
          title1: "Blockchain Based Anonymous Secure Communication",
          title2: "Just trust one of our member",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Navigation, /* EffectFade,*/ Autoplay],
    };
  },
};
</script>