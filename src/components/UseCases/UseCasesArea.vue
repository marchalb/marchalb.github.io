<template>
  <div
    class="main-services grey-bg pt-120 pb-90"
    :style="{
      backgroundImage:
        'url(' + require('../../assets/img/pattern/pt1.png') + ')',
    }"
  >
    <div class="container">
      <div class="row mb-60">
        <div class="col-12">
          <div class="sec-wrapper text-center">
            <h5>Use Cases</h5>
            <h2 class="section-title">Some examples</h2>
          </div>
        </div>
      </div>
      <div class="row text-center">
        <div
          v-for="service in servicesData"
          :key="service.id"
          class="col-xl-4 col-lg-4 col-md-6 mb-30"
        >
          <div class="mfbox mfbox-white">
            <div class="mf-shape"></div>
            <div class="mfbox__icon mb-15" v-html="service.icon2" />
            <div class="mfbox__text">
              <h3 class="mf-title" v-html="service.title"></h3>
              <p>{{ service.text }}</p>
            </div>
            <div class="mf-btn">
              <router-link class="squire-btn" :to="service.link">
                <i class="fal fa-angle-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesArea",
  data() {
    return {
      servicesData: [
        {
          id: "1",
          icon: "flaticon-insight",
          //https://icons8.com/icons/set/telemedicine
          icon2:
            "<img src='data:image/png;base64,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'>",
          title: "Decentralized Clinical Trials",
          text: "Full set of modules to run successfully your decentralized trial",
          link: "/use-cases-details/1",
        },
        {
          id: "2",
          icon: "flaticon-technical-support",
          icon2:
            "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAB6UlEQVR4nO3cS1LCQBQF0KvlIgDX4grCElwG6gJwWzixGOlqxAFOxEF3BmIrdN6vE++pSqUY5PWHcJNQlQaIiIiIiIjGYAlgA+AdwGEi2y6PqVOcp6LH4IF6bGu12TqyzA3sAawAzK0aCjAHcIc0tgOMzsSnXHxlUbwR90hj3FgU3+XiM4vijZghjfHNonifEVNXNc5Lw478C1oTuAXwPOLPg2lN4Ce+n/Zj++yCGVjADBSyysDWNZ+BrWMGGmIGerpSqrNF+lncKNQ69e1fKLSh1l9moCOvDPytnej2i5iBQrwPFGIGOorOoOj2i5iBQsxAIWago+gMim6/SOtR7hTNgdfU0njs+xMzUEjrDDw3UyRnRM2xp/oyugz0/i/Rra+8DxRiBgp5Z6DkCqoZAWoZOCSYh1wIhnRWYwIlfT3rWK/7QM0rqPm9XQ1moBCfhR1FP4tGt1/E+0AhZqAQM9BRdAZFt1/EDBRqOQOP3yDSxAwUmnQGRmMGemo5Ay0xA4WYgYaYgZ74rpwQ35VzxAwsYAYK1UzgLu+ntNjEseu8P/uV/5oJfMn724pjxqYf26tF8Q4pG/ZIq1ssLBoJsgDwAOADaYxmC/Cs8fNvpqltZgvv9DqkdVX6ZVCmsLkt/URERERERCT3BcYX6DTY1rcSAAAAAElFTkSuQmCC'>",
          title: "Registry and Real Worl Evidence",
          text: "Collect retrospective data efficiently in full compliance",
          link: "/use-cases-details/2",
        },
        {
          id: "3", //https://icons8.com/icons/set/other
          icon: "flaticon-technical-support",
          icon2:
            "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACNUlEQVR4nO3Wz28OQRzH8bc+daUO1JWSSDk2ThLiKBXUhabFiRT/gDjzkMaZuBQHXIhEEC6N1kVclYioctNeiqM+XYfZJ/nOmtmd51m3fl7JJvvsdz/P7OyPmQERERERERERERERERFZG9Z1mesHRoEhYAMwDzwBphPzg8AJYHf+ew54AHxMzB8EjgDbgV/AO+A+sJiYr+U08BvIAtsLoK8k2wPcAFqB7AowmZ8Tswl4FWn7JzDWZZ+SHQNWIxfQ3l4DjUh+siKbAdci2V7gTUV2FRiu0b9S64HvprGvwHlgBLiDf2PGA/mduKdsb9RYvs2Y4yvAQCB/Br+jU3nbF4AFU5vH3az/7oBpZBHYUqg3Tf15IH8Zv/P2VW8As6Z+KZB/aepXC7V+YMnU9yX2qfR7Kxo0+4/4d8C5FTk3dOw27im2tfJjqfmbhdoP4HFFPqiTG5BV5OyMkgXq9lho9qmbt9cUygd1cgPmzP4I7rWzJiLntn0w++fwB8oGcDZybug/Jwq1rbgBuixfWy9u4Gt/Zwu4Aeg4cM8cz3BrhKIB/EFwFjdYjuOP7n+AbYH8KfxB8G7e9kXgm6l9IT4L1XaY6mlwmvib1azIZsCVSLaBP1uEthZwqEb/kowCy5ELeApsLMn2ANfx3wT75JuUr077gGeRtpdxq8uOdLsU3gycBPbiOvwZtxSeSczvwl3snvz3e9xS+FNifj9wFNiBWwG+BR7ipkIRERERERERERERERGRgL88MdDEHm6H2QAAAABJRU5ErkJggg=='>",
          title: "Others",
          text: "Nurse home visit, GMP manufacturing process etc.. ",
          link: "/use-cases-details/3",
        },
      ],
    };
  },
};
</script>