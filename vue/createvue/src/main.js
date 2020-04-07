import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import vuetify from "./plugins/vuetify";
import AxiosPlugin from "vue-axios-cors";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(AxiosPlugin);

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount("#app");
