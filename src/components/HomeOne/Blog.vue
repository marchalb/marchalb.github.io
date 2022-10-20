<template>
      <div class="latest-news-area pt-120 pb-90">
            <div class="container">
                  <div class="row mb-60">
                     <div class="col-12">
                        <div class="sec-wrapper">
                           <h5>Features News</h5>
                           <h2 class="section-title">Latest news & articles.</h2>
                        </div>
                     </div>
                  </div>
               <div class="row">
                  <div v-for="blog in blogData" :key="blog.id" class="col-xl-4 col-lg-4 col-md-6">
                     <div class="latest-blog mb-30">
                        <div class="latest-blog-img pos-rel">
                              <img :src="getImgUrl(blog.img)" alt="">
                              <div class="top-date">
                                 <a href="#">{{blog.date}}</a>
                              </div>
                        </div>
                        <div class="latest-blog-content">
                              <div class="latest-post-meta mb-15">
                                 <span><a href="#"><i class="far fa-user"></i> Diboli </a></span>
                                 <span><a href="#"><i class="far fa-comments"></i> 23 Comments</a></span>
                              </div>
                              <h3 class="latest-blog-title">
                                 <router-link to="/blog-details">{{blog.title}}</router-link>
                              </h3>
                              <div class="blog-arrow">
                                 <router-link to="/blog-details"><i class="fal fa-angle-right"></i></router-link>
                              </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
</template>

<script>
export default {
    name:'HomeBlog',
    data () {
        return {
            blogData:[
                {
                    id:'1',
                    img:'sm1.jpg',
                    date:'15 March 21',
                    title:'TIME IS MONEY BUT ITS NOT FULL DEMAND.',
                },
                {
                    id:'2',
                    img:'sm3.jpg',
                    date:'28 March 21',
                    title:'Nature is The best place for fresh mind.',
                },
                {
                    id:'3',
                    img:'sm2.jpg',
                    date:'22 March 21',
                    title:'We Are Trying To Do Best Work.',
                },
            ]
        }
    },
    methods:{
        getImgUrl(pic) {
        return require("../../assets/img/blog/" + pic);
        },
    }
}
</script>