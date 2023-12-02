import axiosClient from "../apiClient";

const adminCategoryBrand = {
  getProCatBrands() {
    const url = `pro-cat-brand`;
    return axiosClient.get(url);
  },
  getProCatBrandById(id) {
    const url = `pro-cat-brand/${id}`;
    return axiosClient.get(url);
  },
  createProCatBrand(payload) {
    const url = "pro-cat-brand";
    return axiosClient.post(url, payload);
  },

  updateProCatBrand(payload, id) {
    const url = `pro-cat-brand/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteProCatBrand(id) {
    const url = `pro-cat-brand/${id}`;
    return axiosClient.delete(url);
  },
};
export default adminCategoryBrand;
