import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "../../router/index";

import adminProduct from "../../api/admin/adminProduct";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [],
  }),
  actions: {
    async getProducts(params) {
      try {
        let res = await adminProduct.getProducts(params);
        params.last_page = Math.ceil(res.count / params.limit);
        params.count = res.count;
        // console.log(res.products);
        this.products = res;
      } catch (error) {
        console.log(error);
      }
    },
    async createProduct(payload) {
      try {
        await adminProduct.createProduct(payload);
      } catch (err) {
        console.log(err);
      }
    },
    async updateProduct(payload, id) {
      try {
        await adminProduct.updateProduct(payload, id);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteProduct(id) {
      try {
        await adminProduct.deleteProduct(id);
      } catch (err) {
        console.log("Error in deleting product");
      }
    },
  },
});
