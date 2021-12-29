import { createRouter, createWebHistory } from "vue-router";
import Seller from "./pages/Seller.vue";
import Home from "./pages/Home.vue";
import Appointments from "./pages/Appointments.vue";

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
  ],
});
