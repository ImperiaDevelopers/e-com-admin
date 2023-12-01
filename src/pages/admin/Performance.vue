<template>
  <div>
    <PerformanceModal ref="performance_modal" />
    <div class="flex justify-between px-4 items-center">
      <VButton
        type="submit"
        btn_type="primary"
        :isLoading="loading"
        @click="openModal"
        class="mt-5 mb-4 ml-2"
        >Create Performance</VButton
      >
    </div>

    <AppTAble :headers="headers" :body="store?.performances">
      <template #body_pro_performance_group="{ item }">
        <h1>{{ item?.pro_performance_group?.name }}</h1>
      </template>
      <template #body_action="{ item }">
        <VActions :item="item" :modal_value="performance_modal" />
      </template>
    </AppTAble>
    <div class="flex justify-center mt-[40px]">
      <v-pagination
        v-model="params.page"
        :pages="params.last_page"
        :range-size="1"
        active-color="#EAF5FF"
        @update:modelValue="store.getProductInfo(params)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { usePerformanceStore } from "../../stores/admin/performance";
import PerformanceModal from "./Modals/PerformanceModal.vue";
import VButton from "../../components/form/VButton.vue";
import AppTAble from "../../components/ui/AppTable.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import VActions from "../../components/form/VActions.vue";

const loading = ref(false);
const store = usePerformanceStore();
const performance_modal = ref();

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};
const openModal = () => {
  performance_modal.value.openModal();
};

const headers = ref([
  { title: "Name", value: "name" },
  { title: "Description", value: "desc" },
  { title: "Pro Performance name", value: "pro_performance_group" },
  { title: "Action", value: "action" },
]);

onMounted(() => {
  store.getPerformance();
});
</script>

<style lang="scss" scoped></style>
