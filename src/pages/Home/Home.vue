<template>
  <Header />
  <HomeTwoSlider />
  <HomeTwoAbout />
  <HomeFaq />
  <PatientJourney />
  <HowItWorks />
  <HomeParticipate />
  <Quotes />
  <HomeTwoFooter />
</template>

<script>
import Header from "../../components/Home/Header.vue";
import HomeTwoSlider from "../../components/Home/Slider.vue";
import HomeTwoAbout from "../../components/Home/About.vue";
import HomeFaq from "../../components/Home/Faq.vue";
import HomeParticipate from "../../components/Home/Participate.vue";
//import Team from "../../components/Home/Team.vue";
import Quotes from "../../components/Home/Quotes.vue";
import PatientJourney from "../../components/Home/PatientJourney.vue";
import HowItWorks from "../../components/Home/HowItWorks.vue";
//import Cta from "../../components/Home/Cta.vue";
//import HomeTwoBlog from "../../components/Home/Blog.vue";
import HomeTwoFooter from "../../components/Home/Footer.vue";

export default {
  name: "HomeTwo",
  components: {
    Header,
    HomeTwoSlider,
    HomeTwoAbout,
    PatientJourney,
    HowItWorks,
    HomeFaq,
    HomeParticipate,
    // Team,
    Quotes,
    //  Cta,
    //HomeTwoBlog,
    HomeTwoFooter,
  },
};
</script>