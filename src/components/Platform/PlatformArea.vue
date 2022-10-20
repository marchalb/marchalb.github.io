<template>
  <section class="portfolio-area pt-120">
    <div class="container">
      <div class="row align-items-center mb-50">
        <!-- START PORTFOLIO FILTER AREA -->
        <div class="col-xl-12">
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
                  id="nav-usability-tab"
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
import PlatformAllItems from "../Home/PlatformFilterItems/PlatformAllItems.vue";
import PlatformOne from "../Home/PlatformFilterItems/PlatformOne.vue";
import PlatformTwo from "../Home/PlatformFilterItems/PlatformTwo.vue";

export default {
  name: "PlatformArea",
  components: {
    PlatformAllItems,
    PlatformOne,
    PlatformTwo,
  },
};
</script>