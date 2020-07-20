import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/home/Home.vue";
import Dashboard from "../components/dashboard/Dashboard.vue";
import FoodDatabase from "../components/foodDatabase/FoodDatabase.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/foodDatabase",
    name: "foodDatabase",
    component: FoodDatabase
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
