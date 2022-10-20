<template>
    <Header/>
    <Breadcrumb title="PAGE NOT FOUND" subtitle="404" />
       <!-- error area start -->
        <section class="error__area pt-200 pb-200">
          <div class="container">
               <div class="row">
                  <div class="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div class="error__item text-center">
                        <div class="error__thumb mb-45">
                           <img src="../../assets/img/error/error.png" alt="">
                        </div>
                        <div class="error__content">
                           <h3 class="error__title">Page Not Found!</h3>
                           <p>Please try searching for some other page.</p>
                           <router-link to="/" class="tp-btn">Back To Home</router-link>
                        </div>
                     </div>
                  </div>
               </div>
          </div>
      </section>
    <!-- error area end -->
    <Footer/>
</template>

<script>
import Header from '../../components/Home/Header.vue';
import Breadcrumb from '../../components/common/Breadcrumb.vue';
import Footer from '../../components/Home/Footer.vue';

export default {
    name:'ErrorPage',
    components:{
        Header,
        Breadcrumb,
        Footer,
    }
}
</script>