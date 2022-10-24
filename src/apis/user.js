import axiosClient from "./axios-client";
const BASE_URL = "/users/get-me";
const usersAPI = {
  get: () => {
    const url = `${BASE_URL}`;
    return axiosClient.get(url);
  },
  // getByID: (id) => {
  //   const url = `${BASE_URL}/${id}`;
  //   return axiosClient.get(url);
  // },
  // post: (data) => {
  //   const url = `${BASE_URL}`;
  //   return axiosClient.post(url, data);
  // },
  // put: (id, data) => {
  //   const url = `${BASE_URL}/${id}`;
  //   return axiosClient.put(url, data);
  // },
  // delete: (id) => {
  //   const url = `${BASE_URL}/${id}`;
  //   return axiosClient.delete(url);
  // },
};

export default usersAPI;
