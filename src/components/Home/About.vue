<template>
  <div class="about-area pt-120 pb-90" id="about">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-8">
          <div class="ab-box pl-50 mb-30">
            <div class="sec-wrapper">
              <h5>About Us</h5>
              <h2 class="section-title">
                Patient In Control, Anonymity Privacy Secured
              </h2>
              <p>
                PicAps is the independant, not for profit, association to let
                the patient decide by themselves how their health record should
                benefit medical research.
              </p>
              <p>
                In the decision making process, the anonymity of the patient is
                protected by a blockchain linking all the members of the
                association (independant patient trusted organisations).
              </p>
              <p>
                A trusted organisation (patient association, university,
                hospital ...) knows the patient and play the role of
                intermediate in the communication between the patient and other
                members of the network including the researchers.
              </p>
              <p>Patients freely chose which member organisation they trust.</p>
              <p>
                Information about specific research projects, patient consents,
                research conclusions, etc can safely and anonymously be
                exchanged.
              </p>
              <p>
                Letting the patients decide for themselves while at the same
                time doing the maximum to protect their privacy is for us the
                best way to start developing patient trust in digital health
                research and unlock many new possibilities and discoveries.
              </p>
            </div>
            <div class="abs-item-box mt-40 mb-30">
              <div class="row">
                <div class="col-6">
                  <div class="abs-items mb-20">
                    <div class="abs-icon mb-15">
                      <i class="icon_ribbon_alt"></i>
                    </div>
                    <div class="abs-item-text fix">
                      <h3 class="abs-item-title">Just Trust one of us</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ab-btn">
              <router-link to="/platform" class="tp-btn"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-4">
          <div class="abs-images abs-images-2 pl-50">
            <div class="row">
              <div class="col-12">
                <div class="abs-img img-filter mb-30">
                  <img
                    src="../../assets/img/about/Communication_Blockchain.jpeg"
                    alt=""
                    height="400"
                  />
                </div>
                <div class="ab-line-shape w-100 mb-20"></div>
                <div class="ab-line-shape w-50"></div>
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
  name: "HomeAbout",
};
</script>