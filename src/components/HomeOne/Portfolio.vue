<template>
  <section class="portfolio-area pt-120 pb-70">
    <div class="container">
      <div class="row mb-40">
        <div class="col-12">
          <div class="sec-wrapper text-center">
            <h5>Platform Features</h5>
            <h2 class="section-title">Explore Our Platform.</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- START PORTFOLIO FILTER AREA -->
        <div class="col-12">
          <div class="portfolio-filter mb-40">
            <nav>
              <div
                className="nav nav-tabs justify-content-center"
                id="portfolio-tab"
                role="tablist"
              >
                <button
                  className="nav-link active"
                  id="nav-all-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-all"
                  type="button"
                  role="tab"
                  aria-controls="nav-all"
                  aria-selected="true"
                >
                  SHOW ALL
                </button>

                <button
                  className="nav-link"
                  id="nav-design-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-design"
                  type="button"
                  role="tab"
                  aria-controls="nav-design"
                  aria-selected="false"
                >
                  DESIGN
                </button>

                <button
                  className="nav-link"
                  id="nav-logo-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-logo"
                  type="button"
                  role="tab"
                  aria-controls="nav-logo"
                  aria-selected="false"
                >
                  LOGO
                </button>

                <button
                  className="nav-link"
                  id="nav-business-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-business"
                  type="button"
                  role="tab"
                  aria-controls="nav-business"
                  aria-selected="false"
                >
                  BUSINESS
                </button>

                <button
                  className="nav-link"
                  id="nav-agency-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-agency"
                  type="button"
                  role="tab"
                  aria-controls="nav-agency"
                  aria-selected="false"
                >
                  AGENCY
                </button>
              </div>
            </nav>
          </div>
        </div>
        <!-- END PORTFOLIO FILTER AREA -->
      </div>
      <div id="portfolio-grid" class="row row-portfolio tab-content">
        <div
          className="tab-pane fade show active"
          id="nav-all"
          role="tabpanel"
          aria-labelledby="nav-all-tab"
        >
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
                      <router-link to="/platform-details"
                        >Binifox Busines</router-link
                      >
                    </h3>
                    <h4>Busines, Agency</h4>
                    <div class="portfolio-plus">
                      <button @click="() => showImg(imageIndex)">
                        <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="nav-design"
          role="tabpanel"
          aria-labelledby="nav-design"
        >
          <GalleryOne />
        </div>

        <div
          className="tab-pane fade"
          id="nav-logo"
          role="tabpanel"
          aria-labelledby="nav-logo"
        >
          <GalleryTwo />
        </div>

        <div
          className="tab-pane fade"
          id="nav-business"
          role="tabpanel"
          aria-labelledby="nav-business"
        >
          <GalleryThree />
        </div>

        <div
          className="tab-pane fade"
          id="nav-agency"
          role="tabpanel"
          aria-labelledby="nav-agency"
        >
          <GalleryFour />
        </div>
      </div>
      <vue-easy-lightbox
        :visible="visible"
        :imgs="portfolioData.map((img) => img.image)"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
  </section>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
import GalleryOne from "./GalleryFilterItems/GalleryOne.vue";
import GalleryTwo from "./GalleryFilterItems/GalleryTwo.vue";
import GalleryThree from "./GalleryFilterItems/GalleryThree.vue";
import GalleryFour from "./GalleryFilterItems/GalleryFour.vue";

export default {
  name: "HomePortfolio",
  components: {
    VueEasyLightbox,
    GalleryOne,
    GalleryTwo,
    GalleryThree,
    GalleryFour,
  },
  data() {
    return {
      visible: false,
      index: 0,
      portfolioData: [
        {
          id: "1",
          image: require(`@/assets/img/portfolio/p1.jpg`),
          title: "Binifox Busines",
          subtitle: "Busines, Agency",
        },
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