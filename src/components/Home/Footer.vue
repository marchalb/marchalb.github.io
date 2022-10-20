<template>
  <footer
    :style="{
      backgroundImage:
        'url(' + require('../../assets/img/bg/footer-bg.jpg') + ')',
    }"
    class="footer-2 pt-95 position-relative"
  >
    <div class="common-shape-wrapper">
      <div class="common-shape-inner"></div>
    </div>
    <div class="footer-area pb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="widget mb-30">
              <div class="footer-logo mb-25">
                <router-link to="/">
                  <img
                    src="../../assets/img/logo/Picaps_icon.svg"
                    class="img-fluid"
                    alt="footer-logo"
                  />
                </router-link>
              </div>
              <p class="mb-20 pr-35">Just trust one of us</p>
              <div class="footer-social footer-social-2">
                <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="#" target="_blank"
                  ><i class="fab fa-pinterest-p"></i
                ></a>
                <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-sm-6">
            <div class="widget mb-30">
              <h4 class="widget-title mb-35">Links</h4>
              <ul>
                <li>
                  <router-link to="/" class="active"> Home </router-link>
                </li>
                <li>
                  <router-link to="/#about" class="active">
                    About Us
                  </router-link>
                </li>
                <li>
                  <router-link to="/#faq" class="active"> Faqs </router-link>
                </li>
                <li>
                  <router-link to="/#patientstory" class="active">
                    Pt Journey
                  </router-link>
                </li>
                <li>
                  <router-link to="/#howitworks" class="active">
                    How it works
                  </router-link>
                </li>
                <li>
                  <router-link to="/#participate" class="active">
                    Participate
                  </router-link>
                </li>
                <li><router-link to="/contact">Contact</router-link></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="widget widget-contact mb-30">
              <h4 class="widget-title mb-35">Contact</h4>
              <ul>
                <li class="pb-10">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Pastoor+Moormanstraat+96,+6219+AX+Maastricht,+Netherlands/@50.8636551,5.6887746,19z/data=!4m13!1m7!3m6!1s0x47c0e9d028f25b99:0x9f432f0d4bf81bf2!2sPastoor+Moormanstraat+96,+6219+AX+Maastricht,+Netherlands!3b1!8m2!3d50.8636551!4d5.6893218!3m4!1s0x47c0e9d028f25b99:0x9f432f0d4bf81bf2!8m2!3d50.8636551!4d5.6893218"
                    ><br />
                    Basel, Switzerland</a
                  >
                </li>
                <li>
                  <i class="fal fa-envelope-open"></i
                  ><a href="mailto:info@picaps.org">info@picaps.org</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="widget mb-30">
              <h4 class="widget-title mb-30">Newsletter</h4>
              <p class="mb-20">
                Subscribe to Our Newsletter for Monthly News and Updates
              </p>
              <div class="widget-newsletter">
                <form action="#">
                  <input type="email" placeholder="Email Address" />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-area">
      <div class="container">
        <div class="copyright-bg">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="copyright">
                <span>Copyright ©2022 PicAps. All Rights Reserved</span>
              </div>
            </div>
            <!-- <div class="col-md-6">
              <div class="privacy-text text-md-end">
                <ul>
                  <li>
                    <router-link to="/contact">Terms & Condition</router-link>
                    <router-link to="/contact">Privacy Policy</router-link>
                  </li>
                </ul>
              </div>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "HomeFooter",
};
</script>