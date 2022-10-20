<template>
  <section
    class="cta-area cta-overlay pos-rel black-bg pt-120 pb-120"
    data-overlay="dark" data-opacity="7" >
    <div class="fact-bg slider-bg" 
    :style="{backgroundImage:'url('+ require('../../assets/img/slider/slider2.jpg') + ')'}" ></div>
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-xl-8 col-lg-10">
          <div class="single-couter counter-box mb-30 z-index d-none">
            <div class="fact-icon">
              <i class="flaticon-airplane"></i>
            </div>
          </div>
          <div class="sec-wrapper z-index">
            <h5>Get to Know Binifox</h5>
            <h2 class="section-title text-white">
              Do you have any question? Feel free to contact us.
            </h2>
            <div class="ab-btn mt-30">
              <router-link to="/about" class="tp-btn">
                Learn More
                <div class="tp-bg">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeCta",
};
</script>