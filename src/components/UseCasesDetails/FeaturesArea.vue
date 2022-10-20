<template>
  <section class="portfolio-area pt-120 pb-70">
    <div class="container">
      <div class="row mb-40">
        <div class="col-12">
          <div class="sec-wrapper text-center">
            <h5>Other Unique Features</h5>
            <h2 class="section-title">Explore them.</h2>
          </div>
        </div>
      </div>

      <GallaryItems />
    </div>
  </section>
</template>

<script>
import GallaryItems from "../Home/PlatformFilterItems/PlatformAllItems.vue";

export default {
  name: "FeaturesArea",
  components: {
    GallaryItems,
  },
};
</script>