import axiosClient from "../apiClient";

const authApi = {
  login(payload) {
    const url = "admin/signin/";
    return axiosClient.post(url, payload);
  },
  getUser(id) {
    const url = `admin/${id}`;
    return axiosClient.get(url);
  },
};
export default authApi;
