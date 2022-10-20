<template>
     <div class="team-area pt-120 pb-90">
            <div class="container">
               <div class="row mb-60">
                  <div class="col-12">
                     <div class="sec-wrapper text-center">
                        <h5>Our Team</h5>
                        <h2 class="section-title">Expert Members.</h2>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div v-for="team in membersData" :key="team.id" class="col-xl-4 col-lg-4 col-md-6">
                     <div class="tpteam text-center mb-60">
                        <div class="tpteam__img">
                           <img :src="getImgUrl(team.image)" alt="">
                           <div class="tpteam__social">
                              <a href="#"><i class="fab fa-facebook-f"></i></a>
                              <a href="#"><i class="fab fa-twitter"></i></a>
                              <a href="#"><i class="fab fa-behance"></i></a>
                              <a href="#"><i class="fab fa-pinterest"></i></a>
                              <a href="#"><i class="fab fa-linkedin"></i></a>
                           </div>
                        </div>
                        <div class="tpteam__text">
                           <h3 class="tpteam-title">
                              <router-link to="/team-details">{{team.name}}</router-link>
                           </h3>
                           <h5>Designer</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
</template>

<script>
export default {
   name:'TeamArea',
   data () {
       return {
           membersData: [
                {
                id: "1",
                image: "team-member-1.jpg",
                name: "Philimia Darwin",
                },
                {
                id: "2",
                image: "team-member-2.jpg",
                name: "Hilixa Maria",
                },
                {
                id: "3",
                image: "team-member-3.jpg",
                name: "Willamson Hilai",
                },
                {
                id: "4",
                image: "team-member-7.jpg",
                name: "Limonda Pwedie",
                },
                {
                id: "5",
                image: "team-member-8.jpg",
                name: "Hilixa Maria",
                },
                {
                id: "6",
                image: "team-member-9.jpg",
                name: "Philimia Darwin",
                },
          ],
       }
   },
    methods: {
        getImgUrl(pic) {
        return require("../../assets/img/team/" + pic);
        },
    },
}
</script>