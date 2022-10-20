<template>
  <section
    class="
      review-area review-area-padding
      pos-rel
      pl-50
      pr-50
      grey-bg
      pt-120
      pb-90
    "
    id="howitworks"
  >
    <div class="container">
      <div class="row mb-40 z-index">
        <div class="col-12">
          <div class="sec-wrapper text-center">
            <h5>Privacy safe communication</h5>
            <h2 class="section-title">How it works</h2>
          </div>
        </div>
      </div>
      <div class="test-active swiper-container">
        <swiper
          ref="mySwiper"
          class="swiper-wrapper pb-70"
          :space-between="25"
          :slides-per-view="2"
          :modules="modules"
          :pagination="{ clickable: true }"
          :loop="true"
          :breakpoints="breakpoints"
        >
          <swiper-slide
            v-for="testimonial in testimonialData"
            :key="testimonial.id"
          >
            <div class="testi-item swiper-slide">
              <div class="tptestinimail">
                <div
                  class="
                    tptestinimail__author--img tptestinimail__author--img-2
                  "
                >
                  <img :src="getImgUrl(testimonial.img)" alt="" />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";

export default {
  name: "HomeTwoTestimonials",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonialData: [
        {
          id: "1",
          img: "Cell-Row-0-Col-0.png",
        },
        {
          id: "2",
          img: "Cell-Row-0-Col-1.png",
        },
        {
          id: "3",
          img: "Cell-Row-0-Col-2.png",
        },
        {
          id: "4",
          img: "Cell-Row-1-Col-0.png",
        },
        {
          id: "5",
          img: "Cell-Row-1-Col-1.png",
        },
        {
          id: "6",
          img: "Cell-Row-1-Col-2.png",
        },
      ],
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        992: { slidesPerView: 2 },
        1400: { slidesPerView: 2 },
      },
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../../assets/img/how-it-works/" + pic);
    },
  },

  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>