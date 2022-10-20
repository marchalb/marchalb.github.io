<template>
  <Header />
  <HeroSlider />
  <Services />
  <About />
  <Counter />
  <Team />
  <Faq />
  <Cta />
  <Blog />
  <Footer />
</template>

<script>
import Header from "../../components/HomeOne/Header.vue";
import HeroSlider from "../../components/HomeOne/HeroSlider.vue";
import Services from "../../components/HomeOne/Services.vue";
import About from "../../components/HomeOne/About.vue";
import Counter from "../../components/HomeOne/Counter.vue";
import Team from "../../components/HomeOne/Team.vue";
import Faq from "../../components/HomeOne/Faq.vue";
import Cta from "../../components/HomeOne/Cta.vue";
import Blog from "../../components/HomeOne/Blog.vue";
import Footer from "../../components/HomeOne/Footer.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    HeroSlider,
    Services,
    About,
    Counter,
    Team,
    Faq,
    Cta,
    Blog,
    Footer,
  },
};
</script>