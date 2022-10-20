<template>
  <Header />
  <Breadcrumb title="Contact" subtitle="Contact" />
  <ContactArea />
  <!--<ContactMap />
  <Brand border="brand-border" />
  <InnovationArea />-->
  <Footer />
</template>

<script>
import Header from "../../components/Home/Header.vue";
import Breadcrumb from "../../components/common/Breadcrumb.vue";
import ContactArea from "../../components/Contact/ContactArea.vue";
//import ContactMap from "../../components/Contact/ContactMap.vue";
//import Brand from "../../components/common/BrandArea.vue";
//import InnovationArea from "../../components/common/InnovationArea.vue";
import Footer from "../../components/Home/Footer.vue";

export default {
  name: "ContactPage",
  components: {
    Header,
    Breadcrumb,
    ContactArea,
    //  ContactMap,
    //  Brand,
    // InnovationArea,
    Footer,
  },
};
</script>