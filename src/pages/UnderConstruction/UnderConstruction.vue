<template>
  <div class="bg"></div>
  <img src="../../assets/img/underconstruction/UnderConstruction.png" />
  <!-- <Breadcrumb title="Under Construction" />
  error area start
  <section class="error__area pt-200 pb-200">
    <div class="container">
      <div class="row">
        <div
          class="
            col-xxl-8
            offset-xxl-2
            col-xl-8
            offset-xl-2
            col-lg-10
            offset-lg-1
          "
        >
          <div class="error__item text-center">
            <div class="error__thumb mb-45">
              <img
                src="../../assets/img/underconstruction/UnderConstruction.png"
                alt=""
              />
            </div>
            <div class="error__content">
              <h3 class="error__title">Page Not Found!</h3>
              <p>Please try searching for some other page.</p>
              <router-link to="/" class="tp-btn">Back To Home</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 error area end -->
</template>

<script>
//import Breadcrumb from "../../components/common/Breadcrumb.vue";

export default {
  name: "UnderConstructionPage",
};
</script>
<style>
body,
html {
  height: 100%;
  margin: 0;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg {
  /* The image used */
  background-image: url("../../assets/img/underconstruction/UnderConstruction.png");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>