import axiosClient from "../apiClient";

const adminProductStock = {
  getProductStocks() {
    const url = `product_in_stock`;
    return axiosClient.get(url);
  },
  getProductStockByID(id) {
    const url = `product_in_stock/${id}`;
    return axiosClient.get(url);
  },
  createProductStock(payload) {
    const url = "product_in_stock";
    return axiosClient.post(url, payload);
  },
  // ProductStockAddPhoto(payload) {
  //   const url = "product_in_stock/upload_image";
  //   return axiosClient.post(url, payload);
  // },
  updateProductStock(payload, id) {
    const url = `product_in_stock/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteProductStock(id) {
    const url = `product_in_stock/${id}`;
    return axiosClient.delete(url);
  },
};
export default adminProductStock;
