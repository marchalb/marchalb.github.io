<template>
  <Header />
  <Breadcrumb title="About" subtitle="About" />
  <About />
  <!-- <Counter />
  <Team />
  <Testimonial />
  <Faq />
  <BrandArea />-->
  <Footer />
</template>

<script>
import Header from "../../components/Home/Header.vue";
import Breadcrumb from "../../components/common/Breadcrumb.vue";
import About from "../../components/Home/About.vue";
//import Counter from "../../components/Home/Counter.vue";
//import Team from "../../components/Home/Team.vue";
//import Testimonial from "../../components/Home/Testimonials.vue";
//import Faq from "../../components/Home/Faq.vue";
//import BrandArea from "../../components/common/BrandArea.vue";
import Footer from "../../components/Home/Footer.vue";

export default {
  name: "AboutPage",
  components: {
    Header,
    Breadcrumb,
    About,
    /*  Counter,
    Team,
    Testimonial,
    Faq,
    BrandArea,*/
    Footer,
  },
};
</script>