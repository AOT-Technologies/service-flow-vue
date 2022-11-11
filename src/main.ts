import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";
import App from "./App.vue";
// import authentication from "@/plugins/authentication";
import router from "./router";
import store from "./store";
import Keycloak from "./plugins/authentication";

Vue.config.productionTip = false;

Keycloak.init({
  onLoad: "login-required",
  checkLoginIframe: false,
}).then(() => {
  Vue.prototype.$keycloak = Keycloak;
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
