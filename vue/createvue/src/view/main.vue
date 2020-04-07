<template>
  <div>
    <category />
    <input type="file" accept="image/*" capture="camera" />
  </div>
</template>
<script>
import category from "../components/category";

export default {
  name: "foodmain",
  components: {
    category
  },

  data: () => ({
    //
  })
};
</script>
