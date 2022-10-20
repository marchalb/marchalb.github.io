<template>
    <section class="pricing__area pt-100 pb-110">
            <div class="container">
               <div class="row mb-60">
                  <div class="col-12">
                     <div class="sec-wrapper text-center">
                        <h5>Our pricing</h5>
                        <h2 class="section-title">Our flexible plan</h2>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div v-for="pricing in pricingData" :key="pricing.id" class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                     <div :class="pricing.activeClass ? `pricing__item text-center transition-3 mb-30 ${pricing.activeClass}` : 'pricing__item text-center transition-3 mb-30'">
                        <div class="pricing__header mb-25">
                           <h3>{{pricing.title}}</h3>
                           <p>What You Are Looking For!</p>
                        </div>
                        <div class="pricing__tag d-flex align-items-start justify-content-center mb-30">
                           <span>$</span>
                           <h4>{{pricing.price}}</h4>
                        </div>
                        <div class="pricing__switch mb-10">
                           <button type="button">Switch to yearly billing</button>
                        </div>
                        <div class="pricing__buy mb-20">
                           <a href="#" class="tp-btn w-100"> <span></span> Buy Now</a>
                        </div>
                        <div class="pricing__features text-start">
                           <ul>
                              <li>Powerful Admin Panel</li>
                              <li>1 Native Android App</li>
                              <li>Multi-Language Support</li>
                              <li>Free SSL Certificate</li>
                              <li>1X Allocated Resources</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
</template>

<script>
export default {
    name:'PricingArea',
    data () {
        return {
            pricingData:[
                {
                    id:'1',
                    title:'PERSONAL',
                    price:'26',
                },
                {
                    id:'2',
                    title:'PROFESSIONAL',
                    price:'44',
                },
                {
                    id:'3',
                    title:'PRO STORE',
                    price:'66',
                    activeClass:'active'
                },
                {
                    id:'4',
                    title:'BUSINESS',
                    price:'89',
                },
            ]
        }
    }
}
</script>