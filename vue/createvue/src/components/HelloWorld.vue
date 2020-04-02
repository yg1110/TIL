<template>
  <v-container>
    <br />
    <v-data-table :headers="headers" :items="desserts"></v-data-table>
    <v-data-table :headers="headers2" :items="recipe.data"></v-data-table>
    <v-data-table :headers="headers3" :items="food.data"></v-data-table>
    <!-- {{recipe.data}} -->
  </v-container>
</template>

<script>
// import recipe from "../assets/레시피+과정정보.json";
// import food from "../assets/레시피+재료정보.json";

export default {
  name: "HelloWorld",

  data: () => ({
    // recipe,
    // food
    data: null,
    headers: [
      { text: "레시피 코드", value: "RECIPE_ID" },
      { text: "재료순번", value: "IRDNT_SN" },
      { text: "재료명", value: "IRDNT_NM" },
      { text: "재료용량", value: "IRDNT_CPCTY" },
      { text: "재료타입 코드", value: "IRDNT_TY_CODE" },
      { text: "재료타입명", value: "IRDNT_TY_NM" }
    ],
    headers2: [
      { text: "레시피코드", value: "RECIPE_ID" },
      { text: "요리설명순서", value: "COOKING_NO" },
      { text: "요리설명", value: "COOKING_DC" },
      { text: "요리이미지", value: "STRE_STEP_IMAGE_URL" }
    ],
    headers3: [
      { text: "레시피코드", value: "RECIPE_ID" },
      { text: "레시피이름", value: "RECIPE_NM_KO" },
      { text: "간략(요약) 소개", value: "SUMRY" },
      { text: "유형코드", value: "NATION_CODE" },
      { text: "유형분류", value: "NATION_NM" },
      { text: "음식분류코드", value: "TY_CODE" },
      { text: "음식분류", value: "TY_NM" },
      { text: "조리시간", value: "COOKING_TIME" },
      { text: "칼로리", value: "CALORIE" },
      { text: "분량", value: "QNT" },
      { text: "난이도", value: "LEVEL_NM" },
      { text: "재료별 분류명", value: "IRDNT_CODE" },
      { text: "가격별 분류", value: "PC_NM" },
      { text: "대표이미지 URL", value: "IMG_URL" },
      { text: "상세 URL", value: "DET_URL" }
    ],

    desserts: [],
    recipe: {
      rn: null,
      total_cnt: null,
      file_infos: null,
      regist_id: null,
      regist_nm: null,
      regist_dt: null,
      regist_date: null,
      updt_id: null,
      updt_nm: null,
      updt_dt: null,
      updt_date: null,
      title: [
        { RECIPE_ID: "레시피 코드" },
        { COOKING_NO: "요리설명순서" },
        { COOKING_DC: "요리설명" },
        { STRE_STEP_IMAGE_URL: "과정 이미지 URL" },
        { STEP_TIP: "과정팁" }
      ],
      data: [
        {
          STRE_STEP_IMAGE_URL:
            "http://file.okdab.com/UserFiles/searching/recipe/000200_p02.jpg",
          STEP_TIP: null,
          RN: 2,
          RECIPE_ID: 1,
          COOKING_DC:
            "안심은 불고기 양념하여 30분간 재워 국물 없이 구워 한 김 식으면 한입 크기로 자른다.",
          COOKING_NO: 2
        },
        {
          STRE_STEP_IMAGE_URL: null,
          STEP_TIP: null,
          RN: 3,
          RECIPE_ID: 1,
          COOKING_DC:
            "청포묵은 고기와 비슷한 크기로 잘라 끓는 물에 데쳐내고 계란은 노른자와 흰자를 분리해 지단부쳐 곱게 채썬다.",
          COOKING_NO: 3
        },
        {
          STRE_STEP_IMAGE_URL: null,
          STEP_TIP: null,
          RN: 4,
          RECIPE_ID: 1,
          COOKING_DC:
            "콩나물과 숙주, 미나리는 데쳐서 국간장과 참기름으로 간하고, 고사리와 도라지는 참기름을 두른 프라이팬에 살짝 볶아놓는다.",
          COOKING_NO: 4
        },
        {
          STRE_STEP_IMAGE_URL: null,
          STEP_TIP: null,
          RN: 5,
          RECIPE_ID: 1,
          COOKING_DC:
            "밥을 참기름으로 무쳐 그릇에 담고 준비한 재료를 고루 얹는다.",
          COOKING_NO: 5
        }
      ]
    },
    food: {
      rn: null,
      total_cnt: null,
      file_infos: null,
      regist_id: null,
      regist_nm: null,
      regist_dt: null,
      regist_date: null,
      updt_id: null,
      updt_nm: null,
      updt_dt: null,
      updt_date: null,
      title: [
        { RECIPE_ID: "레시피 코드" },
        { RECIPE_NM_KO: "레시피 이름" },
        { SUMRY: "간략(요약) 소개" },
        { NATION_CODE: "유형코드" },
        { NATION_NM: "유형분류" },
        { TY_CODE: "음식분류코드" },
        { TY_NM: "음식분류" },
        { COOKING_TIME: "조리시간" },
        { CALORIE: "칼로리" },
        { QNT: "분량" },
        { LEVEL_NM: "난이도" },
        { IRDNT_CODE: "재료별 분류명" },
        { PC_NM: "가격별 분류" },
        { IMG_URL: "대표이미지 URL" },
        { DET_URL: "상세 URL" }
      ],
      data: [
        {
          DET_URL:
            "http://www.okdab.com/consumer/recipe/recipeView.do?recipeSn=1",
          IRDNT_CODE: "곡류",
          IMG_URL:
            "http://file.okdab.com/UserFiles/searching/recipe/000200.jpg",
          NATION_CODE: "3020001",
          SUMRY: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
          CALORIE: "580Kcal",
          TY_CODE: "3010001",
          RECIPE_NM_KO: "나물비빔밥",
          RN: 1,
          QNT: "4인분",
          PC_NM: "5,000원",
          TY_NM: "밥",
          LEVEL_NM: "보통",
          RECIPE_ID: 1,
          NATION_NM: "한식",
          COOKING_TIME: "60분"
        },
        {
          DET_URL:
            "http://www.okdab.com/consumer/recipe/recipeView.do?recipeSn=2",
          IRDNT_CODE: "곡류",
          IMG_URL:
            "http://file.okdab.com/UserFiles/searching/recipe/000300.jpg",
          NATION_CODE: "3020001",
          SUMRY: "정월대보름에 먹던 오곡밥! 영양을 한그릇에 담았습니다.",
          CALORIE: "338Kcal",
          TY_CODE: "3010001",
          RECIPE_NM_KO: "오곡밥",
          RN: 2,
          QNT: "4인분",
          PC_NM: "3,000원",
          TY_NM: "밥",
          LEVEL_NM: "보통",
          RECIPE_ID: 2,
          NATION_NM: "한식",
          COOKING_TIME: "60분"
        },
        {
          DET_URL:
            "http://www.okdab.com/consumer/recipe/recipeView.do?recipeSn=3",
          IRDNT_CODE: "곡류",
          IMG_URL:
            "http://file.okdab.com/UserFiles/searching/recipe/000400.jpg",
          NATION_CODE: "3020004",
          SUMRY:
            "잡채밥 한 그릇이면 오늘 저녁 끝! 입 맛 없을 때 먹으면 그만이지요~",
          CALORIE: "520Kcal",
          TY_CODE: "3010001",
          RECIPE_NM_KO: "잡채밥",
          RN: 3,
          QNT: "4인분",
          PC_NM: null,
          TY_NM: "밥",
          LEVEL_NM: "보통",
          RECIPE_ID: 3,
          NATION_NM: "중국",
          COOKING_TIME: "30분"
        },
        {
          DET_URL:
            "http://www.okdab.com/consumer/recipe/recipeView.do?recipeSn=4",
          IRDNT_CODE: "곡류",
          IMG_URL:
            "http://file.okdab.com/UserFiles/searching/recipe/000600.jpg",
          NATION_CODE: "3020001",
          SUMRY:
            "다이어트에 으뜸인 콩나물밥. 밥 물 넣을때 평소보다 적게 넣는거 잊지마세요!",
          CALORIE: "401Kcal",
          TY_CODE: "3010001",
          RECIPE_NM_KO: "콩나물밥",
          RN: 4,
          QNT: "4인분",
          PC_NM: null,
          TY_NM: "밥",
          LEVEL_NM: "초보환영",
          RECIPE_ID: 4,
          NATION_NM: "한식",
          COOKING_TIME: "40분"
        },
        {
          DET_URL:
            "http://www.okdab.com/consumer/recipe/recipeView.do?recipeSn=5",
          IRDNT_CODE: "곡류",
          IMG_URL:
            "http://file.okdab.com/UserFiles/searching/recipe/000800.jpg",
          NATION_CODE: "3020001",
          SUMRY:
            "집에서도 쉽게 만들어 맛있게 먹을 수 있답니다. 어려워 마시고 만들어 보세요~!",
          CALORIE: "259Kcal",
          TY_CODE: "3010013",
          RECIPE_NM_KO: "약식",
          RN: 5,
          QNT: "4인분",
          PC_NM: null,
          TY_NM: "떡/한과",
          LEVEL_NM: "보통",
          RECIPE_ID: 5,
          NATION_NM: "한식",
          COOKING_TIME: "60분"
        }
      ]
    }
  }),

  methods: {
    get_food_data() {
      this.$axios
        .get("/openapi/sample/json/Grid_20150827000000000227_1/1/5")
        .then(res => {
          this.desserts = res.data.Grid_20150827000000000227_1.row;
          // console.log(res.data);
        });
    }
  },
  mounted() {
    this.get_food_data();
  }
};

// 59bcdda005827dab577c5d693e6d162d49bd93d6c087f359d170465129ae5a5d
</script>

