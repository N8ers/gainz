import Vue from "vue";
import VueRouter from "vue-router";
import PersonsState from "../store/modules/persons";

import Home from "../components/home/Home.vue";
import Dashboard from "../components/dashboard/Dashboard.vue";
import FoodDatabase from "../components/foodDatabase/FoodDatabase.vue";

const guard = async (to, from, next) => {
  let user = PersonsState.state.user;
  if (user.email && user.id && user.name) {
    next()
  } else {
    alert('NOT SIGNED IN BRO')
    next('/')
  }
}

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
    component: Dashboard,
    beforeEnter: guard
  },
  {
    path: "/foodDatabase",
    name: "foodDatabase",
    component: FoodDatabase,
    beforeEnter: guard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
