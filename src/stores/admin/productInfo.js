import { defineStore } from "pinia";
import adminProductInformation from "../../api/admin/adminProductInfo";
import { setNotification } from "../../plugins/notification";

export const useProductInfoStore = defineStore({
  id: "product_information",
  state: () => ({
    product_information: [],
  }),
  actions: {
    async getProductInfo() {
      try {
        let res = await adminProductInformation.getProductInformations();
        this.product_information = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async createProductInformation(payload) {
      try {
        await adminProductInformation.createProductInformation(payload);
      } catch (err) {
        console.log(err);
      }
    },
    async updateProductInformation(payload, id) {
      try {
        await adminProductInformation.updateProductInformation(payload, id);
        setNotification("ProductInformation added successfully", "success");
      } catch (err) {
        console.log(err);
        setNotification("Failed to change product_information", "danger");
      }
    },
    async deleteProductInformation(id) {
      try {
        await adminProductInformation.deleteProductInformation(id);
      } catch (err) {
        console.log("Error in deleting product_information");
      }
    },
  },
});
