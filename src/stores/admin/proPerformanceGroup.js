import { defineStore } from "pinia";
import { setNotification } from "../../plugins/notification";
import adminProPerformanceGroup from "../../api/admin/adminProPerformanceGroup";

export const useProPerformanceGroupStore = defineStore({
  id: "pro_performance_group",
  state: () => ({
    proPerformanceGroups: [],
  }),
  actions: {
    async getProPerformanceGroups() {
      try {
        let res = await adminProPerformanceGroup.getProPerformanceGroup();
        this.proPerformanceGroups = res;
      } catch (error) {
        console.log(error);
      }
    },
    async getProPerformanceGroupById(id) {
      try {
        return await adminProPerformanceGroup.getProPerformanceGroupById(id);
      } catch (error) {
        console.log(error);
      }
    },
    async createProPerformanceGroup(payload) {
      try {
        await adminProPerformanceGroup.createProPerformanceGroup(payload);
      } catch (err) {
        console.log(err);
      }
    },
    async updateProPerformanceGroup(payload, id) {
      try {
        await adminProPerformanceGroup.updateProductPerformanceGroup(
          payload,
          id
        );
        setNotification("ProPerformanceGroup added successfully", "success");
      } catch (err) {
        console.log(err);
        setNotification("Failed to change Pro_performance_group", "danger");
      }
    },
    async deleteProPerformanceGroup(id) {
      try {
        await adminProPerformanceGroup.deleteProductPerformanceGroup(id);
      } catch (err) {
        console.log("Error in deleting pro_performance_group");
      }
    },
  },
});
