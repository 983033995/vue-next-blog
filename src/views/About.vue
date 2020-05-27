<template>
  <div class="about">
    <button @click="add">点我</button>

    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "about",
  setup(props, context) {
    let text = "asasdfd";
    console.log("props", props);
    console.log("context", context);
    onMounted(() => {
      console.log("context___", context.text);
    });
    const add = function() {
      text = "add";
      console.log("text");
    };
    return {
      text,
      add
    };
  },
  onMounted() {
    console.log("________onMounted");
  },
  mounted() {
    console.log("________mounted", this);
  }
};
</script>
