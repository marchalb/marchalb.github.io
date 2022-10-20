<template>
       <div class="blog-wrap blog-item mb-50">
                <div class="blog-thumb">
                    <img :src="require(`@/assets/img/blog/${img}`)" alt="blog">
                </div>
                <div class="blog-details blog-details-2">
                    <ul class="blog-meta">
                        <li><a href="#"><i class="fal fa-clock"></i> 20 JUN</a></li>
                        <li><a href="#"><i class="fal fa-user-circle"></i> Tania</a></li>
                        <li><a href="#"><i class="fal fa-comments"></i> 2 Comments</a></li>
                    </ul>
                    <h3 class="blog-title">
                        <router-link to="/blog-details">{{title}}</router-link>
                    </h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
                    <div class="blog-btn mt-25">
                        <router-link to="/blog-details" class="tp-btn">Read More</router-link>
                    </div>
             </div>
        </div>
</template>

<script>
export default {
    name:'SingleBlogItem',
    props:{
        img:String,
        title:String,
    }
}
</script>