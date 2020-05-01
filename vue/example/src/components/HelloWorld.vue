<template>
  <div>
    <h1>Vuejs lifecycle hooks</h1>
    <h1 ref="h1-element">{{ msg }}</h1>
    <button @click="msg = 'Msg is updated'">Change msg</button>
    <button @click="click()">click</button>
    <button @click="$destroy()">Destroy</button>
    {{ num }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Hello vue world",
      num: 0
    };
  },
  methods: {
    click() {
      console.log(this.num);
      this.num++;
    }
  },

  beforeCreate() {
    console.log("beforeCreate : " + this.msg); //undefined
  },
  created() {
    console.log(this.click);
    console.log("created : " + this.msg); //Hello vue world
  },

  beforeMount() {
    console.log("beforeMount : " + this.$el);
  },

  mounted() {
    console.log(this.$el);
    console.log("mounted : " + this.$el);
  },

  beforeUpdate() {
    console.log("BeforeUpdate : " + this.$refs["h1-element"].textContent); //Hello Vue world
  },

  updated() {
    console.log("updated : " + this.$refs["h1-element"].textContent); //Msg is updated
  },

  beforeDestroy() {
    // delete this.num;
    console.log("beforeDestroy : ");
  },

  destroyed() {
    // console.log(this.num);
    console.log("destroyed : ");
  }
};
</script>
