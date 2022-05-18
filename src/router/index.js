import { createRouter, createWebHistory } from "vue-router";
import TopMenu from "../layouts/top-menu/Main.vue";
import TotemPayment from "../views/totem-payment/Main.vue";
import CentralIframe from "../views/central-iframe/Main.vue";
import RaptorIframe from "../views/raptor-iframe/Main.vue";
import PesquisaIframe from "../views/pesquisa-iframe/Main.vue";
import ErrorPage from "../views/error-page/Main.vue";

const routes = [
  {
    path: "/top-menu",
    component: TopMenu,
    children: [
      
      {
        path: "totem-payment",
        name: "top-menu-totem-payment",
        component: TotemPayment,
      },
      {
        path: "central-iframe",
        name: "top-menu-central-iframe",
        component: CentralIframe,
      },
      {
        path: "raptor-iframe",
        name: "top-menu-raptor-iframe",
        component: RaptorIframe,
      },
      {
        path: "pesquisa-iframe",
        name: "top-menu-pesquisa-iframe",
        component: PesquisaIframe,
      },
    ],
  },
  {
    path: "/error-page",
    name: "error-page",
    component: ErrorPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
