import axiosClient from "./axios-client";
const BASE_URL = "course/join";
const courseStudentAPI = {
  post: (id, data) => {
    const url = `${BASE_URL}/${id}`;
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
};

export default courseStudentAPI;
