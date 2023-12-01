import axiosClient from "../apiClient";

const adminPerformance = {
  getPerformances() {
    const url = `performance/all`;
    return axiosClient.get(url);
  },
  getPerformanceByID(id) {
    const url = `performance/${id}`;
    return axiosClient.get(url);
  },
  createPerformance(payload) {
    const url = "performance/create";
    return axiosClient.post(url, payload);
  },
  updatePerformance(payload, id) {
    const url = `performance/update/${id}`;
    return axiosClient.put(url, payload);
  },
  deletePerformance(id) {
    const url = `performance/delete/${id}`;
    return axiosClient.delete(url);
  },
};
export default adminPerformance;
