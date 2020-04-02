<template>
  <div>
    <table class="elevation-1">
      <caption>
        <h2>레시피 과정정보</h2>
        <br />
      </caption>
      <thead>
        <tr>
          <th v-for="(item, index) in headers2" :key="index">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in recipe" :key="index">
          <td>{{ item.COOKING_NO }}</td>
          <td>{{ item.COOKING_DC }}</td>
          <td>
            <img :src="item.STRE_STEP_IMAGE_URL" />
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <table class="elevation-1" style="padding:20px; margin:30px">
      <caption>
        <h2>레시피 기본정보</h2>
        <br />
      </caption>

      <thead>
        <tr>
          <th v-for="(item, index) in headers3" :key="index">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in food" :key="index">
          <td>
            <img :src="item.IMG_URL" />
          </td>
          <td>{{ item.RECIPE_NM_KO }}</td>
          <td>{{ item.SUMRY }}</td>
          <td>{{ item.NATION_NM }}</td>
          <td>{{ item.TY_NM }}</td>
          <td>{{ item.COOKING_TIME }}</td>
          <td>{{ item.QNT }}</td>
          <td>{{ item.LEVEL_NM }}</td>
          <td>{{ item.COOKING_DC }}</td>
          <td>{{ item.IRDNT_CODE }}</td>
          <td>{{ item.PC_NM }}</td>
        </tr>
      </tbody>
    </table>
    <br />

    <table class="elevation-1" style="padding:20px; margin:30px">
      <caption>
        <h2>레시피 재료</h2>
        <br />
      </caption>

      <thead>
        <tr>
          <th v-for="(item, index) in headers1" :key="index">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in material" :key="index">
          <td>{{ item.RECIPE_ID }}</td>
          <td>{{ item.IRDNT_SN }}</td>
          <td>{{ item.IRDNT_NM }}</td>
          <td>{{ item.IRDNT_CPCTY }}</td>
          <td>{{ item.IRDNT_TY_CODE }}</td>
          <td>{{ item.IRDNT_TY_NM }}</td>
        </tr>
      </tbody>
    </table>
  </div>
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
    headers1: [
      { text: "레시피 코드", value: "RECIPE_ID" },
      { text: "재료순번", value: "IRDNT_SN" },
      { text: "재료명", value: "IRDNT_NM" },
      { text: "재료용량", value: "IRDNT_CPCTY" },
      { text: "재료타입 코드", value: "IRDNT_TY_CODE" },
      { text: "재료타입명", value: "IRDNT_TY_NM" }
    ],
    headers2: [
      { text: "요리설명순서", value: "COOKING_NO" },
      { text: "요리설명", value: "COOKING_DC" },
      { text: "요리이미지", value: "STRE_STEP_IMAGE_URL" }
    ],
    headers3: [
      { text: "대표이미지 URL", value: "IMG_URL" },
      { text: "레시피이름", value: "RECIPE_NM_KO" },
      { text: "간략(요약) 소개", value: "SUMRY" },
      { text: "유형분류", value: "NATION_NM" },
      { text: "음식분류", value: "TY_NM" },
      { text: "조리시간", value: "COOKING_TIME" },
      { text: "칼로리", value: "CALORIE" },
      { text: "분량", value: "QNT" },
      { text: "난이도", value: "LEVEL_NM" },
      { text: "재료별", value: "IRDNT_CODE" },
      { text: "가격", value: "PC_NM" }
    ],

    material: [],
    recipe: [
      {
        STRE_STEP_IMAGE_URL:
          "http://file.okdab.com/UserFiles/searching/recipe/000200_p01.jpg",
        STEP_TIP: null,
        RN: 1,
        RECIPE_ID: 1,
        COOKING_DC:
          "양지머리로 육수를 낸 후 식혀 기름을 걷어낸 후, 불린 쌀을 넣어 고슬고슬하게 밥을 짓는다.",
        COOKING_NO: 1
      },
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
    ],
    food: [
      {
        DET_URL:
          "http://www.okdab.com/consumer/recipe/recipeView.do?recipeSn=1",
        IRDNT_CODE: "곡류",
        IMG_URL: "http://file.okdab.com/UserFiles/searching/recipe/000200.jpg",
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
        IMG_URL: "http://file.okdab.com/UserFiles/searching/recipe/000300.jpg",
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
        IMG_URL: "http://file.okdab.com/UserFiles/searching/recipe/000400.jpg",
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
        IMG_URL: "http://file.okdab.com/UserFiles/searching/recipe/000600.jpg",
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
        IMG_URL: "http://file.okdab.com/UserFiles/searching/recipe/000800.jpg",
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
  }),

  methods: {
    get_food_data() {
      this.$axios
        .get("/openapi/sample/json/Grid_20150827000000000227_1/1/5")
        .then(res => {
          this.material = res.data.Grid_20150827000000000227_1.row;
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

<style scoped>
table {
  padding: 20px;
  margin: 30px;
}
td {
  padding: 20px;
}
</style>
