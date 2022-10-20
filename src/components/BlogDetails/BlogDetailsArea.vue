<template>
       <section class="blog__area pt-120 pb-120">
            <div class="container">
               <div class="row">
                  <div class="col-xl-8 col-lg-8">
                     <div class="blog__wrapper pr-50">
                        <div class="blog-wrap blog-item mb-50">
                           <div class="blog-thumb">
                              <img src="../../assets/img/blog/blog-big-1.jpg" alt="blog">
                           </div>
                           <div class="blog-details blog-details-2">
                              <ul class="blog-meta">
                                 <li><a href="#"><i class="fal fa-clock"></i> 20 JUN</a></li>
                                 <li><a href="#"><i class="fal fa-user-circle"></i> Tania</a></li>
                                 <li><a href="#"><i class="fal fa-comments"></i> 2 Comments</a></li>
                              </ul>
                              <h3 class="blog-title">
                                 <router-link to="/blog-details">basic rules of running web agency business</router-link>
                              </h3>
                              <div class="blog-text">
                                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                              </div>
                              <div class="blog-text mb-40">
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</p>
                              </div>
                              <div class="blog-info d-sm-flex align-items-center justify-content-between mb-40">
                                 <div class="blog-tag">
                                    <span>Tags: </span>
                                    <a href="#"> Business,</a>
                                    <a href="#">Agency,</a>
                                    <a href="#">Technology</a>
                                 </div>
                                 <div class="blog-category">
                                    <span>Category: </span>
                                    <a href="#"> Business</a>
                                    <a href="#">Agency</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="blog__author mb-95 d-md-flex">
                           <div class="blog__author-img mr-30">
                                 <img src="assets/img/blog/author/author-1.jpg" alt="">
                           </div>
                           <div class="blog__author-content">
                                 <h5>Sophie Ianiro</h5>
                                 <div class="blog__author-social">
                                    <ul>
                                       <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                       <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                       <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                       <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                       <li><a href="#"> <i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                 </div>
                                 <p>I said cracking goal down the pub blag cheeky bugger at public school A bit of how's your father boot.!</p>
                           </div>
                        </div>
                        <!-- post comments start -->
                        <PostComments/>
                        <!-- post comments end -->
                     <!-- post comment form start -->
                     <PostCommentForm/>
                     <!-- post comment form end -->
                     </div>
                  </div>
                  <!-- blog right side start -->
                  <BlogRightSide/>
                  <!-- blog right side end -->
               </div>
            </div>
         </section>
</template>

<script>
import BlogRightSide from '../Blog/BlogRightSide.vue';
import PostCommentForm from './PostCommentForm.vue';
import PostComments from './PostComments.vue';

export default {
    name:'BlogDetailsArea',
    components:{
       BlogRightSide,
       PostCommentForm,
       PostComments,
    }
}
</script>