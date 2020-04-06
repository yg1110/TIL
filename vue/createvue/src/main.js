import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import vuetify from "./plugins/vuetify";
import AxiosPlugin from "vue-axios-cors";

Vue.config.productionTip = false;
Vue.use(AxiosPlugin);

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount("#app");
