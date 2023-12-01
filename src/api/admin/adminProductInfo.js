import axiosClient from "../apiClient";

const adminProductInformation = {
  getProductInformations() {
    const url = `pro-info`;
    return axiosClient.get(url);
  },
  getProductInformationByID(id) {
    const url = `pro-info/${id}`;
    return axiosClient.get(url);
  },
  createProductInformation(payload) {
    const url = "pro-info";
    return axiosClient.post(url, payload);
  },
  updateProductInformation(payload, id) {
    const url = `pro-info/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteProductInformation(id) {
    const url = `pro-info/${id}`;
    return axiosClient.delete(url);
  },
};
export default adminProductInformation;
