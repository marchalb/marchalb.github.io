<template>
    <Header/>
    <Breadcrumb title="Team" subtitle="Team"/>
    <TeamArea/>
    <Cta/>
    <Brand/>
    <Footer/>
</template>

<script>
import Header from '../../components/Home/Header.vue';
import Breadcrumb from '../../components/common/Breadcrumb.vue';
import TeamArea from '../../components/Team/TeamArea.vue';
import Cta from '../../components/Home/Cta.vue';
import Brand from '../../components/common/BrandArea.vue';
import Footer from '../../components/Home/Footer.vue';

export default {
    name:'TeamPage',
    components:{
        Header,
        Breadcrumb,
        TeamArea,
        Cta,
        Brand,
        Footer,
    }
}
</script>