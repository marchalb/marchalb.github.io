<template>
  <Header />
  <Breadcrumb title="Use Cases" subtitle="Examples" />
  <UseCasesArea />
  <InnovationArea />
  <Footer />
</template>

<script>
import Header from "../../components/Home/Header.vue";
import Breadcrumb from "../../components/common/Breadcrumb.vue";
import UseCasesArea from "../../components/UseCases/UseCasesArea.vue";
import InnovationArea from "../../components/common/InnovationArea.vue";
import Footer from "../../components/Home/Footer.vue";

export default {
  name: "ServicesPage",
  components: {
    Header,
    Breadcrumb,
    UseCasesArea,
    InnovationArea,
    Footer,
  },
};
</script>