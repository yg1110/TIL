<template>
  <div>
    <div class="menu">
      <div>
        <router-link to="/menu1">메뉴1</router-link>
        <router-link to="/menu2">메뉴2</router-link>
        <router-link to="/menu3">메뉴3</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.menu {
  background-color: black;
  padding: 10px;
}
.menu div {
  display: flex;
  justify-content: space-between;
}
.menu div a {
  margin: 0 10px;
  text-decoration: none;
  color: white;
}
</style>
