<template>
  <section
    class="page__title p-relative d-flex align-items-center grey-bg-2"
    data-overlay="light"
    data-opacity="2"
  >
    <div
      class="page__title-bg"
      :style="{
        backgroundImage:
          'url(' +
          require('../../assets/img/page-title/DoctorDigital_Tablet.jpg') +
          ')',
      }"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="page__title-content mt-100 text-left">
            <h2>{{ title }}</h2>
            <h4>{{ subtitle }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BreadcrumbComponent",
  props: {
    title: String,
    subtitle: String,
  },
};
</script>