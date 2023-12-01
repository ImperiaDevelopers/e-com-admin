import { defineStore } from "pinia";
import { setNotification } from "../../plugins/notification";
import adminPerformance from "../../api/admin/adminPerformance";

export const usePerformanceStore = defineStore({
  id: "performance",
  state: () => ({
    performances: [],
  }),
  actions: {
    async getPerformance() {
      try {
        let res = await adminPerformance.getPerformances();
        this.performances = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async createPerformances(payload) {
      try {
        await adminPerformance.createPerformance(payload);
      } catch (err) {
        console.log(err);
      }
    },
    async updatePerformance(payload, id) {
      try {
        await adminPerformance.updatePerformance(payload, id);
        setNotification("Performance added successfully", "success");
      } catch (err) {
        console.log(err);
        setNotification("Failed to change performance", "danger");
      }
    },
    async deletePerformance(id) {
      try {
        await adminPerformance.deletePerformance(id);
      } catch (err) {
        console.log("Error in deleting performance");
      }
    },
  },
});
