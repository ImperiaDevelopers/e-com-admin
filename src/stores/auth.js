import { ref, computed } from "vue";
import { defineStore } from "pinia";
import authApi from "../api/auth/authApi";
import router from "../router/index";
import authProfile from "../api/auth/authProfile";
import { setNotification, displayNotification } from "../plugins/notification";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    roles: [],
    image: "",
  }),
  actions: {
    async authLogin(payload) {
      try {
        let res = await authApi.login(payload);
        if (res?.tokens?.access_token) {
          localStorage.setItem("role", 'Admin');
          localStorage.setItem("token", res?.tokens?.access_token);
          await router.push({ name: "admin" });
        }
        setNotification("You are logged in", "success");
      } catch (error) {
        console.log(error);
        setNotification(
          error?.response?.data?.message || "Something went wrong",
          "danger"
        );
      }
      displayNotification();
    },
    async getProfile() {
      try {
        let res = await authProfile.getProfile();
        this.user = res;
      } catch (error) {
        console.log(error);
      }
    },
    async updateImage(payload) {
      try {
        let res = await authProfile.updateImage(payload);
        this.image = res.image;
      } catch (error) {
        console.log(error);
      }
    },
    async updateProfile(payload) {
      try {
        let res = await authProfile.updateProfile(payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
