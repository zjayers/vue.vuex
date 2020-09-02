import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import { routes } from "@/routes/routes";
import store from "@/store";

// turn off production tip
Vue.config.productionTip = false;

// Setup Vue Router
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes,
});

// Setup Vue Instance
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
