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
  >
    <div class="container" id="patientstory">
      <div class="row mb-40 z-index">
        <div class="col-12">
          <div class="sec-wrapper text-center">
            <h5>Usage</h5>
            <h2 class="section-title">Example of patient journey</h2>
          </div>
        </div>
      </div>
      <div class="test-active swiper-container">
        <swiper
          ref="mySwiper"
          class="swiper-wrapper pb-70"
          :space-between="25"
          :slides-per-view="3"
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
        {
          id: "7",
          img: "Cell-Row-2-Col-0.png",
        },
        {
          id: "8",
          img: "Cell-Row-2-Col-1.png",
        },
        {
          id: "9",
          img: "Cell-Row-2-Col-2.png",
        },
        {
          id: "10",
          img: "Cell-Row-3-Col-0.png",
        },
        {
          id: "11",
          img: "Cell-Row-3-Col-1.png",
        },
        {
          id: "12",
          img: "Cell-Row-3-Col-2.png",
        },

        {
          id: "13",
          img: "Cell-Row-4-Col-0.png",
        },
      ],
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2 },
        1400: { slidesPerView: 2 },
      },
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../../assets/img/patient-journey/" + pic);
    },
  },

  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>