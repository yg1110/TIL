import Vue from "vue";
import Router from "vue-router";
import main from "../view/main";
import food from "../components/food";
import recipe from "../components/recipe";
import meterial from "../components/meterial";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: main
    },
    {
      path: "/food",
      name: "food",
      component: food
    },
    {
      path: "/recipe",
      name: "recipe",
      component: recipe
    },
    {
      path: "/meterial",
      name: "meterial",
      component: meterial
    }
  ]
});
