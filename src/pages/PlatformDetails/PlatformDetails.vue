<template>
  <Header />
  <Breadcrumb title="Platform Details" subtitle="" />
  <PlatformDetailsGUI v-if="detailIndex == '1'" />
  <PlatformDetailsAudit v-if="detailIndex == '2'" />
  <PlatformDetailsOffline v-if="detailIndex == '3'" />
  <PlatformDetailsSensors v-if="detailIndex == '4'" />
  <PlatformDetailsAccessRights v-if="detailIndex == '5'" />
  <PlatformDetailsPICAPS v-if="detailIndex == '6'" />
  <PlatformDetailsArea v-if="detailIndex == ''" />
  <PaginationArea :detailIndex="detailIndex" />
  <FeaturesArea />
  <Footer />
</template>

<script>
import Header from "../../components/Home/Header.vue";
import Breadcrumb from "../../components/common/Breadcrumb.vue";
import PlatformDetailsArea from "../../components/PlatformDetails/PlatformDetailsArea.vue";
import PlatformDetailsOffline from "../../components/PlatformDetails/PlatformDetailsOffline.vue";
import PlatformDetailsGUI from "../../components/PlatformDetails/PlatformDetailsGUI.vue";
import PlatformDetailsAudit from "../../components/PlatformDetails/PlatformDetailsAudit.vue";
import PlatformDetailsAccessRights from "../../components/PlatformDetails/PlatformDetailsAccessRights.vue";
import PlatformDetailsPICAPS from "../../components/PlatformDetails/PlatformDetailsPICAPS.vue";
import PlatformDetailsSensors from "../../components/PlatformDetails/PlatformDetailsSensors.vue";
import PaginationArea from "../../components/PlatformDetails/PaginationArea.vue";
import FeaturesArea from "../../components/PlatformDetails/FeaturesArea.vue";
import Footer from "../../components/Home/Footer.vue";

export default {
  name: "PlatformDetails",
  props: ["detailIndex"],
  components: {
    Header,
    Breadcrumb,
    PlatformDetailsArea,
    PlatformDetailsGUI,
    PlatformDetailsOffline,
    PlatformDetailsAudit,
    PlatformDetailsAccessRights,
    PlatformDetailsPICAPS,
    PlatformDetailsSensors,
    PaginationArea,
    FeaturesArea,
    Footer,
  },
};
</script>