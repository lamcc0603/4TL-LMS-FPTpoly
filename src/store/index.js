import classAPI from "@/apis/class";
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      classes: [],
    };
  },
  getters: {},
  mutations: {
    setClasses(state, classesPayload) {
      state.classes = classesPayload;
    },
  },
  actions: {
    async fetchClassesById({ commit }, { id }) {
      const res = await classAPI.getByID(id);
      const data = await res.data;
      commit("setClasses", data);
    },
  },
  modules: {},
});
