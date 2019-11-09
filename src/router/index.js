import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Stocks from "../components/stocks/Stocks.vue";
import Portfolio from "../components/portfolio/Portfolio";

Vue.use(VueRouter);

const routes = [
  { path: "/stocks", component: Stocks },

  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;