import axiosClient from "../apiClient";

const adminModel = {
  getModels() {
    const url = `product_model`;
    return axiosClient.get(url);
  },
  getModelByID(id) {
    const url = `product_model/${id}`;
    return axiosClient.get(url);
  },
  createModel(payload) {
    const url = "product_model";
    return axiosClient.post(url, payload);
  },
  // ModelAddPhoto(payload) {
  //   const url = "product_model/upload_image";
  //   return axiosClient.post(url, payload);
  // },
  updateModel(payload, id) {
    const url = `product_model/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteModel(id) {
    const url = `product_model/${id}`;
    return axiosClient.delete(url);
  },
};
export default adminModel;
