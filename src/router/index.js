import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage.vue";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main-page",
    component: MainPage
  },

  {
    path: "/register",
    name: "register",
    components: Register
  },

  {
    path: "/login",
    name: "login",
    components: Login
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
