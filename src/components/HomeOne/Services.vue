<template>
  <div
    class="main-services black-bg pt-120 pb-90"
    :style="{
      backgroundImage:
        'url(' + require('../../assets/img/pattern/pt1.png') + ')',
    }"
    data-background="assets/img/pattern/pt1.png"
  >
    <div class="container">
      <div class="row mb-60">
        <div class="col-12">
          <div class="sec-wrapper text-center">
            <h5>Features Services</h5>
            <h2 class="section-title text-white">Explore Our Services.</h2>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div
          v-for="service in serviceData"
          :key="service.id"
          class="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-30"
        >
          <div class="mservices fix">
            <div class="ms-line-shape">
              <div class="ms-line"></div>
              <div class="ms-line2"></div>
            </div>
            <div class="mservices__icon" v-html="service.icon2" />

            <div class="mservices__text">
              <h3 class="ms-title">
                <router-link to="/services-details">{{
                  service.title
                }}</router-link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeServices",
  data() {
    return {
      serviceData: [
        {
          id: "1",
          icon: "flaticon-insight",
          icon2:
            "<img src='data:image/png;base64,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'>",
          title: "Hosting",
          text: "Your can host the XClin Platform yourself or make usage of our ISO 27001 & HDS certified hosting",
        },
        {
          id: "2",
          icon: "flaticon-technical-support",
          icon2:
            "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAD3klEQVR4nO2awU4UQRCGP8AsvoAx7k2D4SRXjQEfwAhooldP+ADKJpJwMxHQJ1hush71BQhKFJSIGn0J4LA30RhMNOthapzeoWeme6Zneoj7J53e7a7urqqtru6uLRhggBAN4AlwAPQsyz6wInO4wvscfGSV7bQFVxwssFxc7n9wLXxYErEvBFdzMDtJZAmukMmw6/mKLlg5wy7mG3a4wInEQAG+GfCNgQJ8M+AbAwWUOLeT21nZGFI+9zRtNoiPtznDdWsW5cdovjItYMig6PCcfuWZWk/W20GdrxN+OZVHspIxZkEbXsFtcTH8UEcn+FHqRdKt551m7HbGmMXYGrW0gF2pL2fQTeWY+4rUH3SdWY+Pov2mYy6QvpddlPN5BChDAUl4TXnCb5QlgOvnayVQneCB1JM55gn3o2lApMPxX2Ytx7pOsUxx81pKmLsJzAIjBEo/0ow9kr4RoW0a8u3M8hoESghDYzZlj0B4XVB0XJlzHZiQz12FpittE0LTkzHjBnzXeuupwv+R+pvUuwrdbqwvpDVRQm0V0CQSfoPghrdDxHBboW0r7TtCu0GkhLTtUFsFzBIw9pvoetsA5oE5YFShHZW2eaJtNCZjezJXEmqrgGGi/bxDv3+4BbwBfkjZBG4o/Q0ia1kn/cpeWwUMAZeAQwIG56X9KcnO9LHQtOT7ocyR9iSupQI6HD/q5oCbREfeA+Aswf5eAH5J37TQxo/IDnrUUgEhU10CD98m2Odvpf2+ZsyC9G0KbVvGdjkupM56KoFN0EHH1E9pP6PpaxKZfRxZCtiyEUKF7XM4z/+GKnqxOo0mDa7CZLkDIqYhrvgW+CztdzW0YdsnoV0l2gK1gel+WyPbCbaAcwSm/5DICV5H7wS9P5bAzuEkHYNpeQiPhMbmGKwUNgpIuwhNE3j77wRCviL45UPYXIQqhY0Ckq7CLeAe/Vfh09LWwv4qXClsFGDzGFpV2m0fQ5XC9tJRxXO49ig7IGKT3VZGNpsRmsAM5iGxGczNPk92mzabrUieoK2m1zRjnhkKHIea3RZ+VgO7U9K2R0Y2m4s8QSNNO4bql9ICu0sa+j4UyROMo4y8wSSoAukCu/GAbaICbD28DWNFaFysk0hfmxuWLwwU4JsB3xgowDcDvvHfK0AXE3R5FJoiz5pOgiS+LUCX6OQNPi5CPtZJvAgVyRCJwzZjpBZwkSGS9AApE4UsQEWRDJF4ScsYcQ1nCkjCHRmwrukLoze3bSZ0jNIfQ9ek1v3/thWj8QEb35XLN30l2+S/2EzoGHl8l5Vvemkw4YvicuSGje+q0jcNcCLwF+N1ysXnzi17AAAAAElFTkSuQmCC'/>",
          title: "Device Logistics",
          text: "Feel free to make use of our partner services for the distribution of the needed Health Devices",
        },
        {
          id: "3",
          icon: "flaticon-technical-support",
          icon2:
            "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADqUlEQVR4nO2aS2jVQBSGv7RVrA+kKLa6KNRHF4JbwScqKIKgIKLgoupOxJ0LdaUIPhYi4gNdCErdCIoILnQhaq3iTkWxVTcuiqJFwWdftr0uZsKkSe7NJM1k0jYfhHszk3ty/pOZMzOZCwWZ8gwoxTzaTTrkmDQeQinh74z5WWXKcAQOI0VFnRvDVgByw4QPQI1tBySdtm5sKwk6vnM//npjftpuAW3AHOCUPD8EdNtzxzzu2G7q+thM+CRYBMC2A7bJKgDuGsBFdx0Q5/pEa4ashkGjicxDbD1ZD4PlHIwa73XrY1PkANsO2KYIgG0HbFMEwLYDtikCYNsBH9VAC+IFSaf8Xm3Vo5SIWta69R8ITnG9ZUntW0dXgCu4RR7+gCS1b50oBx8DHQSbvNslOuQ1Se1bx7SDie3nLQlmThEAC/cM2yBtr1BndIPURgCWh5StlJ/DZX6j279fA3eBpXGdMo03SZV73ZWUBoItphfYOAqbqaMbAH8XiGr6DYgZYwl4hWhdV1BBWJGC76kQFoCwF6DtvrInFWzOZaT4WbLcAc57ynNBJZFRQsMoJ96lBhgAhoBJyVxOlzQnQlHiAQ7L+vcp3XNULCDef4LKHW1AM9HiD8r6IWCTIU3aLAc+kU4AXFG64ncZ0qTNXqAf4dADYJqvfgpQF3E0AfMR84Ruxoj4KuAy6qmdIZ0NmEfS3rqQulyJvyqd+QvsTNG2G4A1vvJciv8NrErRdj0qlyzylOdW/GrN351AzP91k+BT1P7gmBcPcByV2SsdP4AbiKkv5Ez8NVSfX5vBPQ9gWfxsoJHRPfmkWH/yzcBnoAe4J535Q/biWzK4X4AmoItg/9yWwb2ti28EPqLm5JdQAXiLGKZMYV18PWoB8hyYgRiKzqGC8A6xSksb6wkP4IV04iUw01PuABcx0xKqUEtao09eZ47+S34uRAxzd+R5Cdgvv+8DFgMPEXP1r7J8K7AbmBditxaxIApjOuI/xMPAHqBVw09j1ALXEYL/Adt99eVawjGCCTPO0QVsNidLOa/LUeAIMAjsAG777FxAtASAb4j5wiAiibWF2OtDvLgMox8x988d7lMdALb46vyJcZB0V4O54SRCYD/BV07e7tALbMjWtew4jRDZR3ADwkF0jxIqGY5LzqKe9HpP+TLE2qCECNS4xbsB0YMY/pYA32VZKxNg99lBvf/7CXyR328xTv7cpIMD3ERl//vAZKseWaAOeIMQP9WyLwVx+A8vHqi8eDML1gAAAABJRU5ErkJggg=='>",
          title: "Consultancy",
          text: "Our engineers are available to customize the application to your needs",
        },
      ],
    };
  },
};
</script>