import axiosClient from "./axios-client";

const quizAPI = {
  get: () => {
    const url = "/subjects";
    return axiosClient.get(url);
  },
  getByID: (id) => {
    const url = `/subjects/${id}`;
    return axiosClient.get(url);
  },
  post: (data) => {
    const url = "/subjects";
    return axiosClient.post(url, data);
  },
  put: (id, data) => {
    const url = `/subjects/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id) => {
    const url = `/subjects/${id}`;
    return axiosClient.delete(url);
  },
};

export default quizAPI;
