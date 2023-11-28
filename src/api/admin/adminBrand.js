import axiosClient from "../apiClient";

const adminBrand = {
  getBrands() {
    const url = `product_brand`;
    return axiosClient.get(url);
  },
  getBrandByID(id) {
    const url = `product_brand/${id}`;
    return axiosClient.get(url);
  },
  createBrand(payload) {
    const url = "product_brand";
    return axiosClient.post(url, payload);
  },
  // BrandAddPhoto(payload) {
  //   const url = "product_brand/upload_image";
  //   return axiosClient.post(url, payload);
  // },
  updateBrand(payload, id) {
    const url = `product_brand/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteBrand(id) {
    const url = `product_brand/${id}`;
    return axiosClient.delete(url);
  },
};
export default adminBrand;
