import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "../../router/index";
import adminModel from "../../api/admin/adminModel";
import { setNotification } from "../../plugins/notification";

export const useModelStore = defineStore({
  id: "product_model",
  state: () => ({
    product_model: [],
  }),
  actions: {
    async getModels() {
      try {
        let res = await adminModel.getModels();
        this.product_model = res;
        console.log(this.product_model);
      } catch (error) {
        console.log(error);
      }
    },
    async createModel(payload) {
      try {
        await adminModel.createModel(payload);
      } catch (err) {
        console.log(err);
      }
    },
    // async ModelAddPhoto(payload) {
    //   try {
    //     await adminModel.ModelAddPhoto(payload);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    async updateModel(payload, id) {
      try {
        await adminModel.updateModel(payload, id);
        setNotification("Model added successfully", "success");
      } catch (err) {
        console.log(err);
        setNotification("Failed to change product_model", "danger");
      }
    },
    async deleteModel(id) {
      try {
        await adminModel.deleteModel(id);
      } catch (err) {
        console.log("Error in deleting product_model");
      }
    },
  },
});
