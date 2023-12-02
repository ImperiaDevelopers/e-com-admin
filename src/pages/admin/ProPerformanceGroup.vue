<template>
  <div>
    <ProPerformanceGroupModal ref="pro_performance_group_modal" />
    <div class="flex justify-between px-4 items-center">
      <VButton
        type="submit"
        btn_type="primary"
        :isLoading="loading"
        @click="openModal"
        class="mt-5 mb-4 ml-2"
        >Create ProPerformanceGroup</VButton
      >
    </div>

    <AppTAble :headers="headers" :body="store?.proPerformanceGroups">
      <template #body_category="{ item }">
        <h1>{{ item.category.category_name }}</h1>
      </template>
      <template #body_action="{ item }">
        <VActions :item="item" :modal_value="pro_performance_group_modal" />
      </template>
    </AppTAble>
    <div class="flex justify-center mt-[40px]">
      <v-pagination
        v-model="params.page"
        :pages="params.last_page"
        :range-size="1"
        active-color="#EAF5FF"
        @update:modelValue="store.getProPerformanceGroups(params)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useProPerformanceGroupStore } from "../../stores/admin/proPerformanceGroup";
import ProPerformanceGroupModal from "./Modals/ProPerformanceGroupModal.vue";
import VButton from "../../components/form/VButton.vue";
import AppTAble from "../../components/ui/AppTable.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import VActions from "../../components/form/VActions.vue";

const store = useProPerformanceGroupStore();
const loading = ref(false);
const pro_performance_group_modal = ref();

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};
const openModal = () => {
  pro_performance_group_modal.value.openModal();
};

const headers = ref([
  { title: "Pro Performance Name", value: "name" },
  { title: "Category", value: "category" },
  { title: "Action", value: "action" },
]);

onMounted(() => {
  store.getProPerformanceGroups();
});
</script>

<style lang="scss" scoped></style>
