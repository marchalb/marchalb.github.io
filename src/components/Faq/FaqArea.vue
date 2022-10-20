<template>
     <div class="faq-area pt-120 pb-90 grey-bg">
         <div class="container">
            <div class="row">
              <FaqLeft/>
              <FaqRight/>
            </div>
         </div>
      </div>
</template>

<script>
import FaqLeft from './FaqLeft.vue';
import FaqRight from './FaqRight.vue';

export default {
    name:'FaqArea',
    components:{
        FaqLeft,
        FaqRight,
    }
}
</script>