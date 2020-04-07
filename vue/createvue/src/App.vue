<template>
  <v-app>
    <TopBar app></TopBar>
    <br/><br/>
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
