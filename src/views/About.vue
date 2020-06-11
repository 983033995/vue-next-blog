<template>
  <div class="about">
    <button @click="add">点我</button>

    <h1>{{ text }}</h1>
    {{routerList}}
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance, computed } from "vue";
import { mapState } from "vuex";
export default {
  name: "about",
  computed: {
    ...mapState({
      router: state => state.routers
    })
  },
  setup(props, context) {
    let text = ref("asasdfd");
    console.log("props", props);
    console.log("context", context);
    const add = function() {
      text.value = "add";
      console.log("text");
    };
    const { ctx } = getCurrentInstance();
    console.log("ctx", ctx, ctx.$router);
    onMounted(() => {
      console.log("context___", context.text);
    });
    const routerList = computed(
      () => ctx.$store.state.routers.routeList[0].name
    );
    console.log("STORE", routerList);
    return {
      text,
      add,
      routerList
    };
  },
  onMounted() {
    console.log("________onMounted");
  },
  mounted() {
    console.log("________mounted", this.value);
    console.log("router______", this.router);
  }
};
</script>
