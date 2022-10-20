<template>
    <Header/>
    <Breadcrumb title="Team Details" subtitle="Team Details" />
    <TeamDetailsArea/>
    <Cta/>
    <Brand/>
    <Footer/>
</template>

<script>
import Header from '../../components/Home/Header.vue';
import Breadcrumb from '../../components/common/Breadcrumb.vue';
import TeamDetailsArea from '../../components/TeamDetails/TeamDetailsArea.vue';
import Cta from '../../components/Home/Cta.vue';
import Brand from '../../components/common/BrandArea.vue';
import Footer from '../../components/Home/Footer.vue';

export default {
    name:'TeamDetails',
    components:{
        Header,
        Breadcrumb,
        TeamDetailsArea,
        Cta,
        Brand,
        Footer,
    }
}
</script>