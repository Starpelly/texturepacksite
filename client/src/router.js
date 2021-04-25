import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("./views/Faq.vue")
    },
    {
      path: "/pack/:id",
      name: "pack",
      component: () => import("./views/Pack.vue"),
      props: true
    },
    {
      path: "/request",
      name: "request",
      component: () => import("./views/Request.vue"),
    },
  ]
});
