<template>
  <div>
    <Props></Props>
  </div>
</template>

<script>
import Props from "./Props";
export default {
  name: "menu1",
  components: {
    Props
  }
};
</script>

<style scoped>
div {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
button {
  display: inline-block;
}
</style>
