<template>
  <div
    class="main-services black-bg pt-120 pb-90"
    :style="{
      backgroundImage:
        'url(' + require('../../assets/img/pattern/pt1.png') + ')',
    }"
  >
    <div class="container">
      <div class="row mb-60">
        <div class="col-12">
          <div class="sec-wrapper text-center">
            <h5>Features Services</h5>
            <h2 class="section-title text-white">Explore Our Services.</h2>
          </div>
        </div>
      </div>
      <div class="row text-center">
        <div
          v-for="service in servicesData"
          :key="service.id"
          class="col-xl-4 col-lg-4 col-md-6 mb-30"
        >
          <div class="mfbox">
            <div class="mf-shape"></div>
            <div class="mfbox__icon mb-15">
              <i :class="service.icon"></i>
            </div>
            <div class="mfbox__text">
              <h3 class="mf-title" v-html="service.title"></h3>
              <p>
                {{ service.text }}
              </p>
            </div>
            <div class="mf-btn">
              <router-link class="squire-btn" to="/contact"
                ><i class="fal fa-angle-right"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { text } from 'body-parser'

export default {
  name: "HomeServices",
  data() {
    return {
      servicesData: [
        {
          id: "1",
          icon: "flaticon-insight",
          title: "Hosting",
          text: "Your can host the XClin Platform yourself or make usage of our ISO 27001 & HDS certified hosting",
        },
        {
          id: "2",
          icon: "flaticon-phone",
          title: "Device Logistics",
          text: "Feel free to make use of our partner services for the distribution of the needed Health Devices",
        },
        {
          id: "3",
          icon: "flaticon-technical-support",
          title: "Consultancy",
          text: "Our engineers are available to customize the application to your needs",
        },
      ],
    };
  },
};
</script>