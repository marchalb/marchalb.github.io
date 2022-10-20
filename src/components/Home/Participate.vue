<template>
  <div class="faq-area pos-rel black-bg" id="participate">
    <div
      class="faq-bg"
      :style="{
        backgroundImage:
          /* 'url(' + require('../../assets/img/bg/participate.jpeg') + ')',*/
          'url(' + require('../../assets/img/bg/association_hands.jpeg') + ')',
      }"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6">
          <div class="faq-content pl-70 pt-120 pb-120">
            <div class="sec-wrapper mb-30">
              <h5>Welcome</h5>
              <h2 class="section-title text-white">How to Participate?</h2>
            </div>
            <div class="accordion" id="accordionExample2">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne2">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    As a Patient
                  </button>
                </h2>
                <div
                  id="collapseOne2"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne2"
                  data-bs-parent="#accordionExample2"
                >
                  <div class="accordion-body">
                    <p>
                      Presently the participation of patients is only by
                      invitation on specific projects. If you have been proposed
                      to take part to a research or clinical trial, you are most
                      welcomed to suggest the use of PicAps to your contacts.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo2"
                    aria-expanded="false"
                    aria-controls="collapseTwo2"
                  >
                    As a Researcher
                  </button>
                </h2>
                <div
                  id="collapseTwo2"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo2"
                  data-bs-parent="#accordionExample2"
                >
                  <div class="accordion-body">
                    <p>
                      Feel free to contact us if you have a project for which
                      patient empowerement in an anonym and safe way is needed.
                      Provided that the interests and rights of patients are not
                      at risks, PicAps is open to any medical research projects.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree2"
                    aria-expanded="false"
                    aria-controls="collapseThree2"
                  >
                    As a trusted organisation
                  </button>
                </h2>
                <div
                  id="collapseThree2"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree2"
                  data-bs-parent="#accordionExample2"
                >
                  <div class="accordion-body">
                    <p>
                      Our network of trusted organisations need to grow further
                      to offer the best choice of independent trustable
                      organisation to the patients. Any organisation (patient
                      associations, hospitals, universities,.. ) is welcomed as
                      long as they adhere to our code of conduct to protect
                      patient interest.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree12">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree12"
                    aria-expanded="false"
                    aria-controls="collapseThree12"
                  >
                    As a digital health provider
                  </button>
                </h2>
                <div
                  id="collapseThree12"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree12"
                  data-bs-parent="#accordionExample2"
                >
                  <div class="accordion-body">
                    <p>
                      Your new application need to connect to the patients
                      anonymously or hold sensitive patient information. PicaPs
                      is avaible as an API service and might be able to help you
                      to address the dilema patient empowerement versus privacy.
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