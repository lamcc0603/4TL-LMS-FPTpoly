import classAPI from "@/apis/class";
import courseAPI from "@/apis/course";
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      classes: [],
      courses: [],
      user: { id: 1, name: "Chí Lâm" },
    };
  },
  getters: {},
  mutations: {
    setClasses(state, classesPayload) {
      state.classes = classesPayload;
    },
    setCourses(state, coursesPayload) {
      state.courses = coursesPayload;
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
    async fetchCoursesBySubjectId({ commit }, { id }) {
      const res = await courseAPI.getByID(id);
      const data = await res.data;
      commit("setCourses", data);
    },
  },
  modules: {},
});
