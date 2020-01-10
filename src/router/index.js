import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../components/Test.vue";
import Home from "../components/Home.vue";
import Stocks from "../components/stocks/Stocks.vue";
import Portfolio from "../components/portfolio/Portfolio";
import Quotes from "../components/quotes/AppQuotes"
import Movies from "../components/movies/Movies"
import Dashboard from "../components/User/Dashboard";
import Login from '../components/User/Login';
import Chatwelcome from '../components/chat/ChatWelcome'
import Chat from "../components/chat/ChatApp"

Vue.use(VueRouter);

const routes = [
  { path: "/stocks", component: Stocks },

  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/chatwelcome",
    name: "chatwelcome",
    component: Chatwelcome
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    props: true,
    beforeEnter: (to, from, next) => {
      console.log(to.params.name, from.name, next.name)
      if(to.params.name){
        next()
      } else {
        next({name: 'chatwelcome'})
      }
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path:"/dashboard",
    name:"dashboard",
    component: Dashboard
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
