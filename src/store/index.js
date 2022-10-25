import classAPI from "@/apis/class";
import courseAPI from "@/apis/course";
import courseStudentAPI from "@/apis/courseStudent";
import usersAPI from "@/apis/user";
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      classes: [],
      course: {},
      subjectId: undefined,
      user: { email: "lam1@gmail.com", password: "123123123" },
      fakeUser: null,
      authenticated: localStorage.getItem("authenticated") || false,
      joinCourse: { status: undefined, msg: "" },
      loading: true,
    };
  },
  getters: {},
  mutations: {
    setClasses(state, classesPayload) {
      state.classes = classesPayload;
    },
    setCourse(state, coursePayload) {
      state.course = coursePayload;
      state.subjectId = coursePayload.course_info.subject_id.id;
    },
    setAuthenticated(state, payload) {
      state.authenticated = payload;
      localStorage.setItem("authenticated", payload);
    },
    changeLoadingState(state, loading) {
      state.loading = loading;
    },
    setUser(state, payload) {
      state.fakeUser = payload;
      localStorage.setItem("user-info", state.fakeUser);
    },
    setCourseJoin(state, payload) {
      state.joinCourse = payload;
    },
  },
  actions: {
    async fetchClassesById({ commit }, { id }) {
      try {
        commit("changeLoadingState", true);
        const res = await classAPI.getByID(id);
        const data = await res.data;
        commit("setClasses", data);
        commit("changeLoadingState", false);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchCourseBySubjectId({ commit }, { id }) {
      try {
        commit("changeLoadingState", true);
        const res = await courseAPI.getByID(id);
        const data = await res.data;
        commit("setCourse", data);
        commit("changeLoadingState", false);
      } catch (err) {
        console.log(err);
      }
    },
    async joinCourseByStudent({ state, commit }, { idCourse }) {
      try {
        const user = await state.fakeUser;
        const res = await courseStudentAPI.post(idCourse, user);
        if (res.data.status == 200) {
          commit("setCourseJoin", {
            status: res.data.status,
            msg: res.data.msg,
          });
        } else if (res.data.status == 404) {
          commit("setCourseJoin", {
            status: res.data.status,
            msg: res.data.msg,
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getUserInfo({ commit }) {
      try {
        const res = await usersAPI.get();
        const data = await res.data;
        commit("setUser", data.msg);
        console.log(data.msg);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
