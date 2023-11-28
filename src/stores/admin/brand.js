import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "../../router/index";
import adminBrand from "../../api/admin/adminBrand";
import { setNotification } from "../../plugins/notification";

export const useBrandStore = defineStore({
  id: "product_brand",
  state: () => ({
    product_brand: [],
  }),
  actions: {
    async getBrands() {
      try {
        let res = await adminBrand.getBrands();
        this.product_brand = res;
        console.log(this.product_brand);
      } catch (error) {
        console.log(error);
      }
    },
    async createBrand(payload) {
      try {
        await adminBrand.createBrand(payload);
      } catch (err) {
        console.log(err);
      }
    },
    // async BrandAddPhoto(payload) {
    //   try {
    //     await adminBrand.BrandAddPhoto(payload);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    async updateBrand(payload, id) {
      try {
        await adminBrand.updateBrand(payload, id);
        setNotification("Brand added successfully", "success");
      } catch (err) {
        console.log(err);
        setNotification("Failed to change product_brand", "danger");
      }
    },
    async deleteBrand(id) {
      try {
        await adminBrand.deleteBrand(id);
      } catch (err) {
        console.log("Error in deleting product_brand");
      }
    },
  },
});
