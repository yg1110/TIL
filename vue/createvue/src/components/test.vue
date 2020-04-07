<template>
    <div>
        <v-btn @click="test()"></v-btn>
        {{teeeeest}}
    </div>
</template>

<script>
export default {
  name: "test",
  data: () => ({

  }),
  computed: {
    teeeeest() {
      return this.$store.state.token;
    },
  },
  methods: {
      test(){
          const payload = {
            token: "abc"
          };
          console.log("test");
          this.$store.dispatch("login", payload);
      }
  },
  mounted() {
  }
}
</script>

<style>

</style>