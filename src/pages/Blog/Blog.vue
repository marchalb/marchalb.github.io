<template>
    <Header/>
    <Breadcrumb title="Our Blog" subtitle="Blog" />
    <BlogArea/>
    <Footer/>
    <video-embed src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>
</template>

<script>
import Header from '../../components/Home/Header.vue';
import Breadcrumb from '../../components/common/Breadcrumb.vue';
import BlogArea from '../../components/Blog/BlogArea.vue';
import Footer from '../../components/Home/Footer.vue';

export default {
    name:'BlogPage',
    components:{
        Header,
        Breadcrumb,
        BlogArea,
        Footer,
    }
}
</script>