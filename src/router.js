import { createRouter, createWebHistory } from "vue-router";
import Seller from "./pages/Seller.vue";
import Home from "./pages/Home.vue";
import Appointments from "./pages/Appointments.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Profile from "./components/Profile.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/seller/:id",
      component: Seller,
    },
    {
      path: "/appointments",
      component: Appointments,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/profile",
      component: Profile,
    },
  ],
});
