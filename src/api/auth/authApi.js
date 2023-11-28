import axiosClient from "../apiClient";

const authApi = {
  login(payload) {
    const url = "/admin/signin/";
    return axiosClient.post(url, payload);
  },
  getUser() {
    const url = "user/about";
    return axiosClient.get(url);
  },
};
export default authApi;
