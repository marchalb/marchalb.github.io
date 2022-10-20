import { createWebHistory, createRouter } from 'vue-router';
import UnderConstruction from '../pages/UnderConstruction/UnderConstruction.vue';
import Home from '../pages/Home/Home.vue';
//import About from '../pages/About/About.vue';
import Services from '../pages/Services/Services.vue';
//import ServicesDetails from '../pages/ServicesDetails/ServicesDetails.vue';
import Pricing from '../pages/Pricing/Pricing.vue';
import Platform from '../pages/Platform/Platform.vue';
import UseCases from '../pages/UseCases/UseCases.vue';
import PlatformDetails from '../pages/PlatformDetails/PlatformDetails.vue';
import UseCasesDetails from '../pages/UseCasesDetails/UseCasesDetails.vue';
import Team from '../pages/Team/Team.vue';
import TeamDetails from '../pages/TeamDetails/TeamDetails.vue';
import Faq from '../pages/Faq/Faq.vue';
import ErrorPage from '../pages/404/404.vue';
import Blog from '../pages/Blog/Blog.vue';
import BlogDetails from '../pages/BlogDetails/BlogDetails.vue';
import Contact from '../pages/Contact/Contact.vue';

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      // BEFORE:
      // return { selector: to.hash }

      return { el: to.hash, behavior: 'smooth', top: 100 };
    }
  },
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/under-construction',
      component: UnderConstruction,
    },
    {
      path: '/about',
      hash: 'About',
      component: Home,
    },
    {
      path: '/services',
      component: Services,
    },
    {
      path: '/platform',
      component: Platform,
    },
    {
      path: '/use-cases',
      component: UseCases,
    },
    {
      path: '/pricing',
      component: Pricing,
    },
    {
      path: '/use-cases-details/:detailIndex',
      component: UseCasesDetails,
      props: true,
    },
    {
      path: '/platform-details/:detailIndex',
      component: PlatformDetails,
      props: true,
    },
    {
      path: '/team',
      component: Team,
    },
    {
      path: '/team-details',
      component: TeamDetails,
    },
    {
      path: '/faq',
      component: Faq,
    },
    {
      path: '/error-page',
      component: ErrorPage,
    },
    {
      path: '/blog',
      component: Blog,
    },
    {
      path: '/blog-details',
      component: BlogDetails,
    },
    {
      path: '/contact',
      component: Contact,
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
  window.scrollTo(0, 0);
});

export default router;
