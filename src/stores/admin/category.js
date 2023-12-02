import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "../../router/index";
import adminCategory from "../../api/admin/adminCategory";
import { setNotification } from "../../plugins/notification";

export const useCategoryStore = defineStore({
  id: "category",
  state: () => ({
    category: [],
    ParCat: [],
  }),
  actions: {
    async getCategorys() {
      try {
        let res = await adminCategory.getCategorys();
        this.category = res;
      } catch (error) {
        console.log(error);
      }
    },
    async getParCat() {
      try {
        let res = await adminCategory.getParCat();
        this.ParCat = res;
        console.log(this.ParCat, "category.js");
      } catch (error) {
        console.log(error);
      }
    },
    async createCategory(payload) {
      try {
        await adminCategory.createCategory(payload);
      } catch (err) {
        console.log(err);
      }
    },
    async updateCategory(payload, id) {
      try {
        await adminCategory.updateCategory(payload, id);
        setNotification("Category added successfully", "success");
      } catch (err) {
        console.log(err);
        setNotification("Failed to change category", "danger");
      }
    },
    async deleteCategory(id) {
      try {
        await adminCategory.deleteCategory(id);
      } catch (err) {
        console.log("Error in deleting category");
      }
    },
  },
});
