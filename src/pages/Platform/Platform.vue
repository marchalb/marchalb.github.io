<template>
  <Header />
  <Breadcrumb title="XClin Platform" subtitle="Unique Features" />
  <PlatformArea />
  <Brand border="brand-border" />
  <InnovationArea />
  <Footer />
</template>

<script>
import Header from "../../components/Home/Header.vue";
import Breadcrumb from "../../components/common/Breadcrumb.vue";
import PlatformArea from "../../components/Platform/PlatformArea.vue";
//import Brand from "../../components/common/BrandArea.vue";
import InnovationArea from "../../components/common/InnovationArea.vue";
import Footer from "../../components/Home/Footer.vue";

export default {
  name: "PlatformPage",
  components: {
    Header,
    Breadcrumb,
    PlatformArea,
    //  Brand,
    InnovationArea,
    Footer,
  },
};
</script>