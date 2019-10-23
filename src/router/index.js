import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Structrue from "../views/structrue/Structrue";   /*引入公共结构*/
Vue.use(VueRouter);


/*配路由*/
const routes = [
  {
    path: "/",
    redirect:"/home"
  },
  {
    path: "/home",
    component: Structrue,
    children: [
      {
        path: "",
        name: "home",
        component: Home
      }
    ]
  },
  {
    path: "/detail",
    name: "detail",
    component: Structrue,
    children: [
      {
        path: "",
        name: "detail",
        component: () => import("../views/detail/Detail")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/Login")
  },
  {
    path: "*",
    name: "error",
    component: () => import("../views/error/Error")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
