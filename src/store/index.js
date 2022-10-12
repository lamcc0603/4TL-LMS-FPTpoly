import classAPI from "@/apis/class";
import courseAPI from "@/apis/course";
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      classes: [],
      course: {},
      user: { id: 1, name: "Chí Lâm" },
    };
  },
  getters: {},
  mutations: {
    setClasses(state, classesPayload) {
      state.classes = classesPayload;
    },
    setCourse(state, coursePayload) {
      state.course = coursePayload;
    },
  },
  actions: {
    async fetchClassesById({ commit }, { id }) {
      try {
        const res = await classAPI.getByID(id);
        const data = await res.data;
        commit("setClasses", data);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchCourseBySubjectId({ commit }, { id }) {
      try {
        const res = await courseAPI.getByID(id);
        const data = await res.data;
        commit("setCourse", data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
