import axiosClient from "./axios-client";

const classAPI = {
  get: () => {
    const url = "/branch";
    return axiosClient.get(url);
  },
  getByID: (id) => {
    const url = `/branch/${id}`;
    return axiosClient.get(url);
  },
  post: (data) => {
    const url = "/branch";
    return axiosClient.post(url, data);
  },
  put: (id, data) => {
    const url = `/branch/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id) => {
    const url = `/branch/${id}`;
    return axiosClient.delete(url);
  },
};

export default classAPI;
