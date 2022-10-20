<template>
  <Header />
  <Breadcrumb title="Faq" subtitle="Faq" />
  <FaqArea />
  <Team />
  <Quotes />
  <Brand />
  <Footer />
</template>

<script>
import Header from "../../components/Home/Header.vue";
import Breadcrumb from "../../components/common/Breadcrumb.vue";
import FaqArea from "../../components/Faq/FaqArea.vue";
import Team from "../../components/Home/Team.vue";
import Quotes from "../../components/Home/Quotes.vue";
import Brand from "../../components/common/BrandArea.vue";
import Footer from "../../components/Home/Footer.vue";

export default {
  name: "FaqPage",
  components: {
    Header,
    Breadcrumb,
    FaqArea,
    Team,
    Quotes,
    Brand,
    Footer,
  },
};
</script>