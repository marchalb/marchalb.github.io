<template>
  <div class="container">
    <div class="row">
      <div
        v-for="(portfolioItem, imageIndex) in portfolioData"
        :key="portfolioItem.id"
        class="col-lg-4 col-md-6"
      >
        <div class="tportfolio mb-30">
          <div class="tportfolio__img">
            <button class="popup-image">
              <img
                :src="
                  typeof portfolioItem.image === 'string'
                    ? portfolioItem.image
                    : portfolioItem.image
                "
              />
            </button>
          </div>
          <div class="tportfolio__text">
            <h3 class="tportfolio-title">
              <router-link to="/platform-details">Binifox Busines</router-link>
            </h3>
            <h4>Busines, Agency</h4>
            <div class="portfolio-plus">
              <button v-on:click="showImg(imageIndex)">
                <i class="fal fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="portfolioData.map((img) => img.image)"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  name: "GalleryOne",
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      visible: false,
      index: 0,
      portfolioData: [
        {
          id: "2",
          image: require(`@/assets/img/portfolio/p2.jpg`),
          title: "Marketing Analysis",
          subtitle: "Consultation, Idea",
        },
        {
          id: "3",
          image: require(`@/assets/img/portfolio/p3.jpg`),
          title: "Busines Idea",
          subtitle: "Deaign, Brand",
        },
        {
          id: "4",
          image: require(`@/assets/img/portfolio/p4.jpg`),
          title: "Consultation",
          subtitle: "Print, Market",
        },
        {
          id: "5",
          image: require(`@/assets/img/portfolio/p5.jpg`),
          title: "Digital Marketing",
          subtitle: "Logo, Busines",
        },
        {
          id: "6",
          image: require(`@/assets/img/portfolio/p6.jpg`),
          title: "Super Experience",
          subtitle: "Market, Idea",
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