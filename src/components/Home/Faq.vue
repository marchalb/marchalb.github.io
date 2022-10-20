<template>
  <div class="faq-area pos-rel black-bg" id="faq">
    <div
      class="faq-bg"
      :style="{
        backgroundImage:
          'url(' + require('../../assets/img/bg/association_hands.jpeg') + ')',
      }"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6">
          <div class="faq-content pl-70 pt-120 pb-120">
            <div class="sec-wrapper mb-30">
              <h5>Faq</h5>
              <h2 class="section-title text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Why an association?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      To ensure the anonymity of the patients, a patient trusted
                      third party is used as intermediary in the communication.
                      No organisation in the world will have the trust of all
                      the patients thus the idea to offer the choice whom to
                      trust. All those independant trusted organisation form the
                      PicAps Association.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How are decision made with PicAps?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Each trusted organisation has voting rights (number of
                      patients trusting them) and elect the PicAps board every
                      three years. Similarly important decisions concerning the
                      direction of PicAps are voted.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How is the PicAps Association funded?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Proper funding is key to preserve the independance of the
                      assication as well the affiliated trusted organisations.
                      Developing, maintaining, hosting PicAps and a PicAps node
                      has a cost which needs to be covered. Ultimately each
                      message sent through PicAps will be subject to a fee
                      (amount agreed by collegiale PicAps association decision)
                      which will be shared between the different members to make
                      sure no one is losing money because of PicAps. Until a
                      certain critical mass is reached, PicAps will have to
                      continue to rely on the support of various sponsor
                      including the founding company NovaXon.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree1">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree1"
                    aria-expanded="false"
                    aria-controls="collapseThree1"
                  >
                    Placeholder
                  </button>
                </h2>
                <div
                  id="collapseThree1"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree1"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
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
  name: "HomeTwoFaq",
};
</script>