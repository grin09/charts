import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/apexchart",
      name: "ApexChart",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ApexchartView.vue"),
    },
    {
      path: "/chartjs",
      name: "ChartJS",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ChartJSView.vue"),
    },
    {
      path: "/chartjsstacked",
      name: "ChartJSStacked",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ChartJSViewStacked.vue"),
    },
  ],
});

export default router;
