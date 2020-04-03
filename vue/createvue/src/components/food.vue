<template>
  <div>
    <table class="elevation-1" style="padding:20px; margin:30px">
      <caption>
        <h2>레시피 기본정보</h2>
        <br />
      </caption>

      <thead>
        <tr>
          <th v-for="(item, index) in headers" :key="index">
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
  </div>
</template>

<script>
export default {
  name: "food",

  data: () => ({
    headers: [
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
    food: []
  }),
  methods: {
    get_food_data() {
      this.$axios
        .get(
          "openapi/59bcdda005827dab577c5d693e6d162d49bd93d6c087f359d170465129ae5a5d/json/Grid_20150827000000000226_1/1/100"
        )
        .then(res => {
          this.food = res.data.Grid_20150827000000000226_1.row;
        });
    }
  },
  mounted() {
    this.get_food_data();
  }
};
</script>
