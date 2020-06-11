import Vuex from "vuex";
import routers from "./modules/router";
import plugins from "./plugins/session";
console.log("_____", plugins);
export default Vuex.createStore({
  state: {
    test: { a: 1 }
  },
  mutations: {},
  actions: {},
  modules: {
    routers
  },
  plugins
});
