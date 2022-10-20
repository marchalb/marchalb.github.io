<template>
  <div class="portfolio__pagination-wrapper">
    <div class="container">
      <div class="pagination-border pt-40 pb-40">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div class="portfolio__pagination">
              <router-link
                :to="
                  '/use-cases-details/' +
                  (detailIndex == '1'
                    ? '3'
                    : (parseInt(detailIndex) - 1).toString())
                "
                class="link-btn-2"
              >
                <i class="fal fa-long-arrow-left"></i>
                Prev
              </router-link>
            </div>
          </div>

          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div class="portfolio__pagination text-end">
              <router-link
                :to="
                  '/use-cases-details/' +
                  (detailIndex == '3'
                    ? '1'
                    : (parseInt(detailIndex) + 1).toString())
                "
                class="link-btn-2"
              >
                Next <i class="fal fa-long-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationArea",
  props: ["detailIndex"],
};
</script>