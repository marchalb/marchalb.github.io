<template>
  <div :class="brandBorder === 'brand-border-2' ?  `brand-area bg-grey pt-100 pb-100 ${brandBorder}` : 
  `brand-area bg-grey pt-100 pb-100 ${border && border}` ">
    <div class="container">
      <div class="brand-active swiper-container">
        <swiper
          ref="mySwiper"
          class="swiper-wrapper align-items-center"
          :space-between="25"
          :slides-per-view="5"
          :modules="modules"
          :loop="true"
          :breakpoints="breakpoints"
        >
          <swiper-slide v-for="brand in brandData" :key="brand.id">
            <div class="brand-wrapper swiper-slide">
              <a href="#">
                <img :src="getImgUrl(brand.img)" class="img-fluid" alt="img" />
              </a>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "BrandArea",
  props:{
    brandBorder:String,
    border:String,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      brandData: [
        {
          id: "1",
          img: "brand-1.png",
        },
        {
          id: "2",
          img: "brand-2.png",
        },
        {
          id: "3",
          img: "brand-3.png",
        },
        {
          id: "4",
          img: "brand-4.png",
        },
        {
          id: "5",
          img: "brand-5.png",
        },
        {
          id: "6",
          img: "brand-1.png",
        },
      ],
      breakpoints:{
          550:{slidesPerView: 3},
          768:{slidesPerView: 4},
          1200:{slidesPerView: 5},
      }
      
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../../assets/img/brand/" + pic);
    },
  },
};
</script>