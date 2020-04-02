import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Recipe from "@/components/recipe";
import Test from "@/components/test";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/recipe",
      name: "Recipe",
      component: Recipe
    },
    {
      path: "/test",
      name: "Test",
      component: Test
    }
  ]
});
