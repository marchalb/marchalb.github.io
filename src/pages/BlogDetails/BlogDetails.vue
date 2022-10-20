<template>
    <Header/>
    <Breadcrumb title="BLOG DETAILS" subtitle="BLOG DETAILS" />
    <BlogDetailsArea/>
    <Footer/>
</template>

<script>
import Header from '../../components/Home/Header.vue';
import Breadcrumb from '../../components/common/Breadcrumb.vue';
import BlogDetailsArea from '../../components/BlogDetails/BlogDetailsArea.vue';
import Footer from '../../components/Home/Footer.vue';

export default {
    name:'BlogDetails',
    components:{
        Header,
        Breadcrumb,
        BlogDetailsArea,
        Footer,
    }
}
</script>