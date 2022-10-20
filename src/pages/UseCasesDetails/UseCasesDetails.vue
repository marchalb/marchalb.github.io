<template>
  <Header />
  <Breadcrumb title="Use Case Details" subtitle="" />
  <UseCasesDetailsDCT v-if="detailIndex == '1'" />
  <UseCasesDetailsRWE v-if="detailIndex == '2'" />
  <UseCasesDetailsOthers v-if="detailIndex == '3'" />
  <PaginationArea :detailIndex="detailIndex" />
  <Footer />
</template>

<script>
import Header from "../../components/Home/Header.vue";
import Breadcrumb from "../../components/common/Breadcrumb.vue";
import UseCasesDetailsDCT from "../../components/UseCasesDetails/UseCasesDetailsDCT.vue";
import UseCasesDetailsRWE from "../../components/UseCasesDetails/UseCasesDetailsRWE.vue";
import UseCasesDetailsOthers from "../../components/UseCasesDetails/UseCasesDetailsOthers.vue";
import PaginationArea from "../../components/UseCasesDetails/PaginationArea.vue";
import Footer from "../../components/Home/Footer.vue";

export default {
  name: "PlatformDetails",
  props: ["detailIndex"],
  components: {
    Header,
    Breadcrumb,
    UseCasesDetailsDCT,
    UseCasesDetailsRWE,
    UseCasesDetailsOthers,
    PaginationArea,
    Footer,
  },
};
</script>