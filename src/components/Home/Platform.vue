<template>
  <section class="portfolio-area pt-120 pb-70">
    <div class="container">
      <div class="row mb-40 d-none">
        <div class="col-12">
          <div class="sec-wrapper text-center">
            <h5>Platform Features</h5>
            <h2 class="section-title">Explore Our Platform.</h2>
          </div>
        </div>
      </div>
      <div class="row align-items-center mb-50">
        <!-- START PORTFOLIO FILTER AREA -->
        <div class="col-xl-6 col-lg-6">
          <div class="sec-wrapper text-centers">
            <h5>Platform Features</h5>
            <h2 class="section-title">Explore Our Platform.</h2>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="text-lg-end">
            <div class="portfolio-filter">
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
                    id="nav-usebility-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-usability"
                    type="button"
                    role="tab"
                    aria-controls="nav-usability"
                    aria-selected="false"
                  >
                    USABILITY
                  </button>

                  <button
                    className="nav-link"
                    id="nav-logo-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-compliance"
                    type="button"
                    role="tab"
                    aria-controls="nav-compliance"
                    aria-selected="false"
                  >
                    COMPLIANCE
                  </button>
                </div>
              </nav>
            </div>
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
          <PlatformAllItems />
        </div>

        <div
          className="tab-pane fade"
          id="nav-usability"
          role="tabpanel"
          aria-labelledby="nav-usability"
        >
          <PlatformOne />
        </div>

        <div
          className="tab-pane fade"
          id="nav-compliance"
          role="tabpanel"
          aria-labelledby="nav-compliance"
        >
          <PlatformTwo />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PlatformAllItems from "./PlatformFilterItems/PlatformAllItems.vue";
import PlatformOne from "./PlatformFilterItems/PlatformOne.vue";
import PlatformTwo from "./PlatformFilterItems/PlatformTwo.vue";

export default {
  name: "HomeTwoPlatform",
  components: {
    PlatformAllItems,
    PlatformOne,
    PlatformTwo,
  },
};
</script>