import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import YourGalleries from "../components/YourGalleries.vue";
import CreatingGalleries from "../components/CreatingGalleries.vue";
import Gallery from "../components/Gallery.vue";
import EditGallery from "../components/EditGallery.vue";
import Author from "../components/Author.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main-page",
    component: MainPage,
  },

  {
    path: "/galleries/:id",
    name: "gallery",
    component: Gallery,
  },

  {
    path: "/edit-gallery/:id",
    name: "edit-gallery",
    component: EditGallery,
  },

  {
    path: "/authors/:id",
    name: "authors",
    component: Author,
  },

  {
    path: "/your-galleries",
    name: "your-galleries",
    component: YourGalleries,
  },

  {
    path: "/creating-galleries",
    name: "creating-galleries",
    component: CreatingGalleries,
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
