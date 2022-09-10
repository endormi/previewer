import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomeView.vue";
// import AboutPage from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: {
        title: "Previewer - Home",
        metaTags: [
          {
            name: "description",
            content: "The home page of previewer.",
          },
          {
            name: "og:description",
            content: "The home page of previewer.",
          },
        ],
      },
    },
    /* 
    {
      path: "/about",
      name: "about",
      component: AboutPage,
      meta: {
        title: "Previewer - About",
        metaTags: [
          {
            name: "description",
            content: "The about page of previewer.",
          },
          {
            name: "og:description",
            content: "The about page of previewer.",
          },
        ],
      },
    },
    */
    {
      path: "/:pathMatch(.*)*",
      redirect: (to) => {
        // Redirect to home page
        return { path: "/" };
      },
    },
  ],
});

export default router;
