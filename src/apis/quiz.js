import axiosClient from "./axios-client";
const BASE_URL = " /subjects";
const quizAPI = {
  get: () => {
    const url = `${BASE_URL}`;
    return axiosClient.get(url);
  },
  getByID: (id) => {
    const url = `${BASE_URL}/${id}`;
    return axiosClient.get(url);
  },
  post: (data) => {
    const url = `${BASE_URL}`;
    return axiosClient.post(url, data);
  },
  put: (id, data) => {
    const url = `${BASE_URL}/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id) => {
    const url = `${BASE_URL}/${id}`;
    return axiosClient.delete(url);
  },
  getQuizBySubjectAndLevel: (idSubject, level) => {
    const url = `course/19/quiz?level=${level}&id_subject=${idSubject}`;
    return axiosClient.get(url);
  },
};

export default quizAPI;
