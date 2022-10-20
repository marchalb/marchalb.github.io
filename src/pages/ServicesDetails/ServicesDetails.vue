<template>
    <Header/>
    <Breadcrumb title="Services Details" subtitle="Services Details" />
    <ServicesDetailsArea/>
    <Brand brandBorder="brand-border-2"/>
    <Footer/>
</template>

<script>
import Header from '../../components/Home/Header.vue';
import Breadcrumb from '../../components/common/Breadcrumb.vue';
import ServicesDetailsArea from '../../components/ServicesDetails/ServicesDetailsArea.vue';
import Brand from '../../components/common/BrandArea.vue';
import Footer from '../../components/Home/Footer.vue'

export default {
    name:'servicesDetails',
    components:{
        Header,
        Breadcrumb,
        ServicesDetailsArea,
        Brand,
        Footer
    }
}
</script>