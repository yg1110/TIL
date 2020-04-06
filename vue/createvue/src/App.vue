<template>
  <v-app>
    <TopBar app></TopBar>
    <!-- <v-app-bar>
      <v-toolbar-items>
        <v-btn text to="/">HOME</v-btn>
        <v-btn text to="/food">음식 목록</v-btn>
        <v-btn text to="/recipe">레시피</v-btn>
        <v-btn text to="/meterial">재료</v-btn>
      </v-toolbar-items>
    </v-app-bar>-->

    <v-content>
      <v-container bg grid-list-md text-xs-center>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import TopBar from "./components/TopBar";

export default {
  name: "App",

  data: () => ({}),
  components: {
    TopBar
  }
};
</script>
