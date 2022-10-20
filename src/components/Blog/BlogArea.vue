<template>
       <section class="blog__area pt-120 pb-120">
            <div class="container">
               <div class="row">
                  <div class="col-xl-8 col-lg-8">
                     <div class="blog__wrapper pr-50">
                        <!-- SingleBlogItem end-->
                        <SingleBlogItem img="blog-big-1.jpg" title="basic rules of running web agency business"/>
                        <!-- SingleBlogItem end -->
                        <div class="blog-wrap blog-item mb-50">
                           <div class="blog-thumb blog-video">
                              <img src="../../assets/img/blog/blog-big-4.jpg" alt="blog">
                              <button v-b-modal.modal-center href="https://www.youtube.com/watch?v=eXQgPCsd83c" 
                              class="play-btn" >
                                <i class="fas fa-play"></i>
                              </button>
                           </div>
                           <div class="blog-details blog-details-2">
                              <ul class="blog-meta">
                                 <li><a href="#"><i class="fal fa-clock"></i> 20 JUN</a></li>
                                 <li><a href="#"><i class="fal fa-user-circle"></i> sakil</a></li>
                                 <li><a href="#"><i class="fal fa-comments"></i> 2 Comments</a></li>
                              </ul>
                              <h3 class="blog-title">
                                 <router-link to="/blog-details">Introducing the latest linoor features</router-link>
                              </h3>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
                              <div class="blog-btn mt-25">
                                 <router-link to="/blog-details" class="tp-btn">Read More</router-link>
                              </div>
                           </div>
                        </div>
                        <div class="blog-quote mb-50">
                           <blockquote>
                              <div class="blog-quote-icon mb-20">
                                 <img src="../../assets/img/blog/quote-icon.png" alt="">
                              </div>
                              <div class="blog-quote-text">
                                 <p>There are many variations of passages of available but majority have alteration in some by inject humour or random words. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                              </div>
                           </blockquote>
                        </div>
                        <!-- SingleBlogItem end-->
                        <SingleBlogItem img="blog-big-3.jpg" title="Delivering the best digital marketing"/>
                        <!-- SingleBlogItem end -->
                     </div>

                     <!-- pagination area start -->
                        <Pagination/>
                     <!-- pagination area end -->
                  </div>
                  <!-- BlogRightSide start -->
                 <BlogRightSide/>
                 <!-- BlogRightSide end -->
               </div>
            </div>
         </section>


<!-- video modal  start-->
<div>
   <div class="video-modal-wrapper">
         <b-modal id="modal-center" centered>
                <p><iframe src="https://www.youtube.com/embed/pwymX2LxnQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
         </b-modal>
    </div>
</div>
<!-- video modal  end-->
        
</template>

<script>
import BlogRightSide from '../../components/Blog/BlogRightSide.vue';
import SingleBlogItem from '../../components/Blog/SingleBlogItem.vue';
import Pagination from '../../components/Blog/Pagination.vue';

export default {
  name: "BlogArea",
  components:{
     BlogRightSide,
     SingleBlogItem,
     Pagination,
  }
};
</script>