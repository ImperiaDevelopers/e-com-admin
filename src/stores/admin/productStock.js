import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "../../router/index";
import adminProductStock from "../../api/admin/adminProductStock";
import { setNotification } from "../../plugins/notification";

export const useProductStockStore = defineStore({
  id: "product_in_stock",
  state: () => ({
    product_in_stock: [],
    ParCat: [],
  }),
  actions: {
    async getProductStocks() {
      try {
        let res = await adminProductStock.getProductStocks();
        this.product_in_stock = res;
      } catch (error) {
        console.log(error);
      }
    },
    async getParCat() {
      try {
        let res = await adminProductStock.getParCat();
        this.ParCat = res;
        console.log(this.ParCat, "product_in_stock.js");
      } catch (error) {
        console.log(error);
      }
    },
    async createProductStock(payload) {
      try {
        await adminProductStock.createProductStock(payload);
      } catch (err) {
        console.log(err);
      }
    },
    async updateProductStock(payload, id) {
      try {
        await adminProductStock.updateProductStock(payload, id);
        setNotification("ProductStock added successfully", "success");
      } catch (err) {
        console.log(err);
        setNotification("Failed to change product_in_stock", "danger");
      }
    },
    async deleteProductStock(id) {
      try {
        await adminProductStock.deleteProductStock(id);
      } catch (err) {
        console.log("Error in deleting product_in_stock");
      }
    },
  },
});
