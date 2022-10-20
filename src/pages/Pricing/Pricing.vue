<template>
  <Header />
  <Breadcrumb title="PRICING" subtitle="PRICING" />
  <PricingArea />
  <Cta />
  <Brand border="brand-border" />
  <InnovationArea />
  <Footer />
</template>

<script>
import Header from "../../components/Home/Header.vue";
import Breadcrumb from "../../components/common/Breadcrumb.vue";
import PricingArea from "../../components/Pricing/PricingArea.vue";
import Cta from "../../components/Home/Cta.vue";
import Brand from "../../components/common/BrandArea.vue";
import InnovationArea from "../../components/common/InnovationArea.vue";
import Footer from "../../components/Home/Footer.vue";

export default {
  name: "PricingPage",
  components: {
    Header,
    Breadcrumb,
    PricingArea,
    Cta,
    Brand,
    InnovationArea,
    Footer,
  },
};
</script>