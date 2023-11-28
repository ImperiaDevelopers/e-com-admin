import axiosClient from "../apiClient";

const adminProduct = {
  getProducts(params) {
    const url = `product/all/q?page=${params.page}&limit=${params.limit}`;
    return axiosClient.get(url);
  },
  getProductByID(id) {
    const url = `product/${id}`;
    return axiosClient.get(url);
  },
  createProduct(payload) {
    const url = "product";
    return axiosClient.post(url, payload);
  },
  updateProduct(payload, id) {
    const url = `product/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteProduct(id) {
    const url = `product/${id}`;
    return axiosClient.delete(url);
  },
};
export default adminProduct;
