<template>
  <section class="contact-area pt-120 pb-80 fix">
    <div class="container">
      <div class="row">
        <div class="col-xxl-5 col-xl-6 col-lg-6">
          <div class="section-title-wrapper mb-15">
            <h5 class="section-subtitle mb-20">contact with us</h5>
            <h2 class="section-title">Speak to us</h2>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-6 col-lg-6">
          <div class="contact-form">
            <form action="mail.php" id="contact-form" method="POST">
              <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                  <input name="name" type="text" placeholder="Your Name" />
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                  <input name="email" type="email" placeholder="Email Adress" />
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                  <input name="phone" type="text" placeholder="Phone" />
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                  <input name="subject" type="text" placeholder="Subject" />
                </div>
                <div class="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                  <textarea
                    placeholder="Write Massage"
                    name="massage"
                  ></textarea>
                </div>
                <div class="col-xxl-12 col-xl-12 mb-20">
                  <button type="submit" class="tp-btn">Send a message</button>
                </div>
              </div>
            </form>
            <p class="ajax-response"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactArea",
};
</script>