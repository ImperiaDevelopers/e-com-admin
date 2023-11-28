import axiosClient from "../apiClient";

const adminCategory = {
  getCategorys() {
    const url = `category/all`;
    return axiosClient.get(url);
  },
  getCategoryByID(id) {
    const url = `category/${id}`;
    return axiosClient.get(url);
  },
  createCategory(payload) {
    const url = "category/add";
    return axiosClient.post(url, payload);
  },
  updateCategory(payload, id) {
    const url = `category/update/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteCategory(id) {
    const url = `category/delstroy/${id}`;
    return axiosClient.delete(url);
  },
};
export default adminCategory;
