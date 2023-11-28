import { defineStore } from "pinia";
import { setNotification } from "../../plugins/notification";
import adminImage from "../../api/admin/adminImages";

export const useImageStore = defineStore({
  id: "image",
  state: () => ({
    images: [],
  }),
  actions: {
    async getImages() {
      try {
        let res = await adminImage.getImages();
        this.images = res;
      } catch (error) {
        console.log(error);
      }
    },
    async createImage(payload) {
      try {
        await adminImage.createImage(payload);
      } catch (err) {
        console.log(err);
      }
    },
    async updateImage(payload, id) {
      try {
        await adminImage.updateImage(payload, id);
        setNotification("Image added successfully", "success");
      } catch (err) {
        console.log(err);
        setNotification("Failed to change product_brand", "danger");
      }
    },
    async deleteImage(id) {
      try {
        await adminImage.deleteImage(id);
      } catch (err) {
        console.log("Error in deleting image", err);
      }
    },
  },
});
