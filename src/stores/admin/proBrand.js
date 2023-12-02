import { defineStore } from "pinia";
import { setNotification } from "../../plugins/notification";
import adminProBrand from "../../api/admin/adminproBrand";

export const useProBrandStore = defineStore({
  id: "product_brand",
  state: () => ({
    pro_brands: [],
  }),
  actions: {
    async getProBrands() {
      try {
        let res = await adminProBrand.getProBrands();
        this.pro_brands = res;
      } catch (error) {
        console.log(error);
      }
    },

    async createProBrand(payload) {
      try {
        await adminProBrand.createProBrand(payload);
      } catch (err) {
        console.log(err);
      }
    },
    async updateProBrand(payload, id) {
      try {
        await adminProBrand.updateProBrand(payload, id);
        setNotification("ProBrand added successfully", "success");
      } catch (err) {
        console.log(err);
        setNotification("Failed to change proBrand", "danger");
      }
    },
    async deleteProBrand(id) {
      try {
        await adminProBrand.deleteProBrand(id);
      } catch (err) {
        console.log("Error in deleting proBrand");
      }
    },
  },
});
