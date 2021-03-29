import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ScrollShadow from "vue-scroll-shadow";
import VueHorizontalTimeline from "vue-horizontal-timeline";
//全局使用组件，页面中就无需引入
Vue.component("scroll-shadow", ScrollShadow);
Vue.component("vue-horizontal-timeline", VueHorizontalTimeline);

Vue.config.productionTip = false;
Vue.use(VueHorizontalTimeline);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
