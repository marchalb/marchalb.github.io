<template>
      <section class="counter-wraper pos-rel black-bg pt-120 pb-90" data-overlay="dark" data-opacity="7"> 
            <div class="fact-bg slider-bg" :style="{backgroundImage:'url('+ require('../../assets/img/slider/slider3.jpg')+')'}" ></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div v-for="counter in counterData" :key="counter.id" class="col-lg-3 col-md-3">
                        <div class="single-couter counter-box text-center mb-30 z-index">
                            <div class="fact-icon">
                              <i :class="`${counter.icon}`"></i>
                            </div>
                            <h2><span class="counter">{{counter.number}}</span></h2>
                            <h4>{{counter.title}}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name:'HomeCounter',
    data () {
        return {
            counterData:[
                {
                    id:'1',
                    icon:'flaticon-group',
                    number:'5420',
                    title:'Expert Members'
                },
                {
                    id:'2',
                    icon:'flaticon-happiness',
                    number:'1540',
                    title:'Satisfied Clients'
                },
                {
                    id:'3',
                    icon:'flaticon-label',
                    number:'8994',
                    title:'Problem Solve'
                },
                {
                    id:'4',
                    icon:'flaticon-badge',
                    number:'1523',
                    title:'Award Winner'
                },
            ]
        }
    }
}
</script>