import { createRouter, createWebHistory } from "vue-router";
import CongratulationPage from "./views/CongratulationPage.vue";
import ActivationUser from "./views/ActivationUser.vue";
import HomePage from "./views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/activation",
      name: "ActivationUser",
      component: ActivationUser,
    },
    {
        path: "/congratulations",
        name: "CongratulationPage",
        component: CongratulationPage,
      },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("./views/SomethingWentWrong.vue"),
    },
  ],
});
export default router;
