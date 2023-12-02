import { defineStore } from "pinia";
import { setNotification } from "../../plugins/notification";
import adminProCategoryBrand from "../../api/admin/adminProCategoryBrand";

export const useProCatBrandStore = defineStore({
  id: "product_category_brand",
  state: () => ({
    pro_category_brands: [],
  }),
  actions: {
    async getProCatBrands() {
      try {
        let res = await adminProCategoryBrand.getProCatBrands();
        this.pro_category_brands = res;
      } catch (error) {
        console.log(error);
      }
    },

    async createProCatBrand(payload) {
      try {
        await adminProCategoryBrand.createProCatBrand(payload);
      } catch (err) {
        console.log(err);
      }
    },
    async updateProCatBrand(payload, id) {
      try {
        await adminProCategoryBrand.updateProCatBrand(payload, id);
        setNotification("ProCatBrand added successfully", "success");
      } catch (err) {
        console.log(err);
        setNotification("Failed to change proCatBrand", "danger");
      }
    },
    async deleteProCatBrand(id) {
      try {
        await adminProCategoryBrand.deleteProCatBrand(id);
      } catch (err) {
        console.log("Error in deleting proCatBrand");
      }
    },
  },
});
