<template>
  <Header />
  <Breadcrumb title="Services" subtitle="Services" />
  <ServicesArea />
  <InnovationArea />
  <Footer />
</template>

<script>
import Header from "../../components/Home/Header.vue";
import Breadcrumb from "../../components/common/Breadcrumb.vue";
import ServicesArea from "../../components/Services/ServicesArea.vue";
import InnovationArea from "../../components/common/InnovationArea.vue";
import Footer from "../../components/Home/Footer.vue";

export default {
  name: "ServicesPage",
  components: {
    Header,
    Breadcrumb,
    ServicesArea,
    InnovationArea,
    Footer,
  },
};
</script>