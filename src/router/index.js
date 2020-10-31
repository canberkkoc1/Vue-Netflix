import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dizi",
    name: "Diziler",
    component: () =>
      import(/* webpackChunkName: "dizi" */ "../views/diziler/diziler.vue"),
  },
  {
    path: "/film",
    name: "Filmler",
    component: () =>
      import(/* webpackChunkName: "film" */ "../views/filmler/filmler.vue"),
  },
  {
    path: "/enyeni",
    name: "Enyeni",
    component: () =>
      import(/* webpackChunkName: "enyeni" */ "../views/enyeni/enyeni.vue"),
  },
  {
    path: "/listem",
    name: "Listem",
    component: () =>
      import(/* webpackChunkName: "liste" */ "../views/listem/listem.vue"),
  },
  {
    path: "/gift",
    name: "Gift",
    component: () =>
      import(/* webpackChunkName: "gift" */ "../views/gift/gift.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "account" */ "../views/account/account.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
