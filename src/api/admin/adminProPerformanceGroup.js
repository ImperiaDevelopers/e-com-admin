import axiosClient from "../apiClient";

const adminProPerformanceGroup = {
  getProPerformanceGroup() {
    const url = `pro_perfomance_group`;
    return axiosClient.get(url);
  },
  getProPerformanceGroupById(id) {
    const url = `pro_perfomance_group/${id}`;
    return axiosClient.get(url);
  },
  createProPerformanceGroup(payload) {
    const url = "pro_perfomance_group";
    return axiosClient.post(url, payload);
  },
  updateProductPerformanceGroup(payload, id) {
    const url = `pro_perfomance_group/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteProductPerformanceGroup(id) {
    const url = `pro_perfomance_group/${id}`;
    return axiosClient.delete(url);
  },
};
export default adminProPerformanceGroup;
