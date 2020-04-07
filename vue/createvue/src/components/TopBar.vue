<template>
  <div>
    <v-btn text to="/">HOME</v-btn>
    <v-btn text to="/food">음식 목록</v-btn>
    <v-btn text to="/recipe">레시피</v-btn>
    <v-btn text to="/meterial">재료</v-btn>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data: () => ({
  }),
  methods: {
  },
  mounted() {
  }
};
</script>

