<template>
       <div class="post-comment-form">
            <h4>Leave a Reply </h4>
            <span>Your email address will not be published.</span>
            <form action="#">
                <div class="row">
                    <div class="col-xl-6 col-md-6">
                        <div class="post-input">
                            <input type="text" placeholder="Your Name">
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                        <div class="post-input">
                            <input type="email" placeholder="Your Email">
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="post-input">
                            <input type="text" placeholder="Website">
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="post-input">
                            <textarea placeholder="Your message..."></textarea>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="post-check mb-40">
                            <input type="checkbox">
                            <span>Save my name, email, and website in this browser for the next time I comment.</span>
                        </div>
                    </div>
                </div>

                <button type="submit" class="tp-btn">Send Message</button>
            </form>
        </div>
</template>

<script>
export default {
    name:'PostCommentForm'
}
</script>