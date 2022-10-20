<template>
  <div class="slider-area fix">
    <div class="slider-active swiper-container">
      <swiper
        ref="mySwiper"
        :modules="modules"
        :loop="true"
        :autoplay="{ delay: 5000 }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
      >
        <swiper-slide v-for="item in sliders" :key="item.id">
          <div class="slider-list swiper-slide d-flex align-items-center pt-70">
            <div class="slider-shape"></div>
            <div class="slider-shape-line"></div>
            <div class="slider-shape-line2"></div>

            <div
              class="slider-bg img-zoom"
              :style="{
                backgroundImage:
                  'url(' +
                  require('../../assets/img/slider/' + item.image) +
                  ')',
              }"
            ></div>
            <!-- <div class="container">
              <div class="row">
                <div class="col-12 position-relative">
                  <div class="slider-circle-shape"></div>
                  <div class="slider-text z-index text-left align-right">
                    <span class="slider-sub-title"
                      >welcome to Binifox Pro agency</span
                    >
                    <h2 class="slider-title pre-formatted">
                      {{ item.title }}
                    </h2>
                    <div class="slide-btn mt-30">
                      <router-link to="/about" class="tp-btn">{{
                        item.btnText
                      }}</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>-->
          </div>
        </swiper-slide>
      </swiper>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev sp-arrow">
        <i class="far fa-angle-left"></i>
      </div>
      <div class="swiper-button-next sp-arrow">
        <i class="far fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectFade, Autoplay } from "swiper";
export default {
  name: "HeroSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliders: [
        {
          id: "1",
          image: "slider3.jpg",
          title: "Web Design \n Agency",
          btnText: "Discover More",
        },
        {
          id: "2",
          image: "slider4.jpg",
          title: "Smart Think \n So Easy.",
          btnText: "Discover More",
        },
      ],
    };
  },

  setup() {
    return {
      modules: [Navigation, EffectFade, Autoplay],
    };
  },
};
</script>
