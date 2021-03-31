import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import ScrollShadow from "vue-scroll-shadow"
import VueHorizontalTimeline from "vue-horizontal-timeline"
import VuePaycard from "vue-paycard"
const { createApp } = require("vue")
import VueGoogleMaps from "@fawmi/vue-google-maps"
import VueListPicker from "vue-list-picker"
Vue.use(VueListPicker)
Vue.use(VuePaycard)
//全局使用组件，页面中就无需引入
Vue.component("scroll-shadow", ScrollShadow)
Vue.component("vue-horizontal-timeline", VueHorizontalTimeline)

Vue.config.productionTip = false
Vue.use(VueHorizontalTimeline)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")

createApp(App)
  .use(VueGoogleMaps, {
    load: {
      key: "",
    },
  })
  .mount("#app")
