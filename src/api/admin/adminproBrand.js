import axiosClient from "../apiClient";

const adminProBrand = {
  getProBrands() {
    const url = `product_brand`;
    return axiosClient.get(url);
  },
  getProBrandById(id) {
    const url = `product_brand/${id}`;
    return axiosClient.get(url);
  },
  createProBrand(payload) {
    const url = "product_brand";
    return axiosClient.post(url, payload);
  },

  updateProBrand(payload, id) {
    const url = `product_brand/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteProBrand(id) {
    const url = `product_brand/${id}`;
    return axiosClient.delete(url);
  },
};
export default adminProBrand;
