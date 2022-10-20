import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueEasyLightbox from 'vue-easy-lightbox';
import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.es5.esm.min.js';
import 'bootstrap/scss/bootstrap.scss';
import 'swiper/css/bundle';
import './assets/css/fontAwesome5Pro.css';
import './assets/fonts/flaticon.css';
import 'bootstrap';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import './assets/scss/main.scss';
//import VueSmoothScroll from 'vue3-smooth-scroll';

let app = createApp(App);
app.use(router);
app.use(BootstrapVue3);
app.use(VueEasyLightbox);
/*app.use(VueSmoothScroll, {
  duration: 400,
  offset: 50,
});*/
app.mount('#app');
