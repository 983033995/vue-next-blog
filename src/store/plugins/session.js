import persistedstate from "vuex-persistedstate";

const pluginArr = [];

let creatPersistedstate = persistedstate({
  storage: window.sessionStorage,
  reducer(val) {
    console.log("val____", val);
    return {
      router_test: val.router.routerList
    };
  }
});
pluginArr.push(creatPersistedstate);
export default pluginArr;
