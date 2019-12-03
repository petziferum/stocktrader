import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Stocks from "../components/stocks/Stocks.vue";
import Portfolio from "../components/portfolio/Portfolio";
import Quotes from "../components/quotes/AppQuotes"
import Movies from "../components/movies/Movies"

Vue.use(VueRouter);

const routes = [
  { path: "/stocks", component: Stocks },

  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/movies",
    name: "movies",
    component: Movies
  },
  {
    path:"/quotes", name: "quotes", component: Quotes
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
