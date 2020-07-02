import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    // Home 페이지 안에서 하위 라우터
    children: [
      {
        path: "/menu1",
        name: "menu1",
        component: () => import("../components/menu1.vue")
      },
      {
        path: "/menu2",
        name: "menu2",
        component: () => import("../components/menu2.vue")
      },
      {
        path: "/menu3",
        name: "menu3",
        component: () => import("../components/menu3.vue")
      }
    ]
  },
  {
    path: "*", // 지정한 경로가 아니라면 전부 '/'로 리다이렉트
    redirect: "/"
  }
];

const router = new Router({
  mode: "history", //경로 뒤에 #이 붙지않습니다.
  routes,
  // 페이지 이동시 최상단부터 보이도록
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

// 라우터 전역가드
router.beforeEach((to, from, next) => {
  console.log("to", to);
  console.log("form", from);
  if (to.path === "/menu3") {
    alert("접근이 제한된 경로입니다.");
  } else {
    next();
  }
});

export default router;
