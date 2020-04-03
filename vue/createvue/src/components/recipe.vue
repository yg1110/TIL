<template>
  <div>
    <table class="elevation-1">
      <caption>
        <h2>레시피 과정정보</h2>
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
        <tr v-for="(item, index) in recipe" :key="index">
          <td>{{ item.COOKING_NO }}</td>
          <td>{{ item.COOKING_DC }}</td>
          <td>
            <img :src="item.STRE_STEP_IMAGE_URL" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "recipe",

  data: () => ({
    headers: [
      { text: "요리설명순서", value: "COOKING_NO" },
      { text: "요리설명", value: "COOKING_DC" },
      { text: "요리이미지", value: "STRE_STEP_IMAGE_URL" }
    ],
    recipe: []
  }),
  methods: {
    get_food_data() {
      this.$axios
        .get(
          "/openapi/59bcdda005827dab577c5d693e6d162d49bd93d6c087f359d170465129ae5a5d/json/Grid_20150827000000000228_1/1/100"
        )
        .then(res => {
          this.recipe = res.data.Grid_20150827000000000228_1.row;
        });
    }
  },
  mounted() {
    this.get_food_data();
  }
};
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
