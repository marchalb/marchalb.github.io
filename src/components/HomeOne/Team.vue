<template>
  <div :class="padd === 'true' ? 'team-area pt-120 pb-0' : 'team-area pt-120 pb-90'">
    <div class="container">
      <div class="row mb-60">
        <div class="col-12">
          <div class="sec-wrapper text-center">
            <h5>Our Team</h5>
            <h2 class="section-title">Expert Members.</h2>
          </div>
        </div>
      </div>
      <div class="rows">
        <div class="team-active swiper-container pb-30">
          <swiper
            ref="mySwiper"
            class="pb-50"
            :space-between="25"
            :slides-per-view="4"
            :modules="modules"
            :pagination="{clickable: true}"
            :loop="true"
            :breakpoints="breakpoints"
          >
            <swiper-slide v-for="member in membersData" :key="member.id">
              <div class="team-item swiper-slide">
                <div class="tpteam text-center mb-30">
                  <div class="tpteam__img">
                    <img :src="getImgUrl(member.image)" alt="" />
                    <div class="tpteam__social">
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                      <a href="#"><i class="fab fa-behance"></i></a>
                      <a href="#"><i class="fab fa-pinterest"></i></a>
                      <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                  </div>
                  <div class="tpteam__text">
                    <h3 class="tpteam-title">
                      <router-link to="/team-details">{{ member.name }}</router-link>
                    </h3>
                    <h5>Designer</h5>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <!-- Add Pagination -->
          <div class="swiper-pagination team-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";

export default {
  name: "HomeTeam",
  props:{
    padd:String,
  },
  data() {
    return {
      membersData: [
        {
          id: "1",
          image: "team-member-1.jpg",
          name: "Philimia Darwin",
        },
        {
          id: "2",
          image: "team-member-2.jpg",
          name: "Hilixa Maria",
        },
        {
          id: "3",
          image: "team-member-3.jpg",
          name: "Willamson Hilai",
        },
        {
          id: "4",
          image: "team-member-7.jpg",
          name: "Limonda Pwedie",
        },
        {
          id: "5",
          image: "team-member-8.jpg",
          name: "Hilixa Maria",
        },
        {
          id: "6",
          image: "team-member-9.jpg",
          name: "Philimia Darwin",
        },
      ],
      // breakpoints
      breakpoints: {300: { slidesPerView: 1,},
			550: { slidesPerView: 2,},
			768: { slidesPerView: 3,},
			992: { slidesPerView: 4,},
		},
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getImgUrl(pic) {
      return require("../../assets/img/team/" + pic);
    },
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>