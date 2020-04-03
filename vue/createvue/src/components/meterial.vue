<template>
  <div>
    <table class="elevation-1" style="padding:20px; margin:30px">
      <caption>
        <h2>레시피 재료</h2>
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
export default {
  name: "meterial",

  data: () => ({
    headers: [
      { text: "레시피 코드", value: "RECIPE_ID" },
      { text: "재료순번", value: "IRDNT_SN" },
      { text: "재료명", value: "IRDNT_NM" },
      { text: "재료용량", value: "IRDNT_CPCTY" },
      { text: "재료타입 코드", value: "IRDNT_TY_CODE" },
      { text: "재료타입명", value: "IRDNT_TY_NM" }
    ],
    material: []
  }),

  methods: {
    get_food_data() {
      this.$axios
        .get(
          "/openapi/59bcdda005827dab577c5d693e6d162d49bd93d6c087f359d170465129ae5a5d/json/Grid_20150827000000000227_1/1/100"
        )
        .then(res => {
          this.material = res.data.Grid_20150827000000000227_1.row;
        });
    }
  },
  mounted() {
    this.get_food_data();
  }
};
</script>
