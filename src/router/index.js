import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Timeline.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Timeline",
    component: Home,
  },
  {
    path: "/scroll",
    name: "Scroll",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Scroll.vue"),
  },

  {
    path: "/timeline",
    name: "Timeline",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Timeline.vue"),
  },
  {
    path: "/cards",
    name: "Cards",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cards.vue"),
  },
  {
    path: "/grids",
    name: "Grids",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Grids.vue"),
  },
  {
    path: "/componentWithMap",
    name: "ComponentWithMap",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ComponentWithMap.vue"),
  },
  {
    path: "/list",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/List.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
