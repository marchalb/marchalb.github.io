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
    <div class="container">
      <div class="row mb-40 z-index">
        <div class="col-12">
          <div class="sec-wrapper text-center">
            <h5>Quotes</h5>
            <h2 class="section-title">Interesting quotes</h2>
          </div>
        </div>
      </div>
      <div class="test-active swiper-container">
        <swiper
          ref="mySwiper"
          class="swiper-wrapper pb-70"
          :modules="modules"
          :pagination="{ clickable: true }"
          :loop="true"
        >
          <swiper-slide>
            <div class="testi-item swiper-slide">
              <div class="tptestinimail">
                <div class="tptestinimail__text">
                  <p>
                    <b
                      >Place the individual at the centre of trustworthy care
                      delivered digitally.</b
                    >
                    The successful uptake and use of digital technologies in
                    health is contingent on a patient-centred approach. It
                    requires public trust in the use of such technologies and in
                    the protection of fundamental privacy rights covering the
                    data that underpin them. Individuals, health workers and
                    patients should be empowered through digital health to make
                    informed choices that benefit the health and well-being of
                    themselves, their families and their communities.
                  </p>
                </div>
                <div class="tptestinimail__author d-sm-flex align-items-center">
                  <div
                    class="
                      tptestinimail__author--img tptestinimail__author--img-2
                    "
                  >
                    <img :src="getImgUrl('who_logo_small.png')" alt="" />
                  </div>
                  <div class="tptestinimail__author--bio">
                    <h4>
                      WHO Regional digital health action plan for the WHO
                      European Region 2023-2030
                    </h4>
                    <h6>First Guiding Principle</h6>
                  </div>
                </div>
                <div class="testimonial-quote text-end">
                  <i class="fa fa-quote-right"></i>
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
          img: "WHOGuidingPrincipe.png",
          name: "First Guiding Principle",
          title:
            "Regional digital health action plan for the WHO European Region 2023-2030",
        },
        {
          id: "2",
          img: "client-3.png",
          name: "Mr. Salim Dawn",
          title: "Developer",
        },
        {
          id: "3",
          img: "client-4.png",
          name: "Mr. Suhan Dol",
          title: "Designer",
        },
        {
          id: "4",
          img: "client-5.png",
          name: "Mr. Williamson",
          title: "Pure Founder",
        },
        {
          id: "5",
          img: "client-1.png",
          name: "Mr. Jonota Gilai",
          title: "BDevs Officer",
        },
        {
          id: "6",
          img: "client-6.png",
          name: "Mr. Shewkh Kamal",
          title: "ThemePure",
        },
      ],
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1400: { slidesPerView: 3 },
      },
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../../assets/img/testimonial/" + pic);
    },
  },

  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>