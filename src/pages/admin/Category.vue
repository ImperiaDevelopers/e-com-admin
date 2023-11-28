<template>
  <div>
    <CategoryModal ref="category_modal" />
    <div class="flex justify-between px-4 items-center">
      <VButton
        type="submit"
        btn_type="primary"
        :isLoading="loading"
        @click="openModal"
        class="mt-5 mb-4 ml-2"
        >Create Category</VButton
      >
    </div>
    <AppTAble :headers="headers" :body="store?.category">
      <template #body_action="{ item }">
        <VActions :item="item" :modal_value="category_modal" />
      </template>
    </AppTAble>
    <div class="flex justify-center mt-[40px]">
      <v-pagination
        v-model="params.page"
        :pages="params.last_page"
        :range-size="1"
        active-color="#EAF5FF"
        @update:modelValue="store.getCategorys(params)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCategoryStore } from "../../stores/admin/category";
import CategoryModal from "./Modals/CategoryModal.vue";
import VButton from "../../components/form/VButton.vue";
import AppTAble from "../../components/ui/AppTable.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import VActions from "../../components/form/VActions.vue";

const loading = ref(false);
const store = useCategoryStore();
const category_modal = ref();

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};
const openModal = () => {
  category_modal.value.openModal();
};

const headers = ref([
  { title: "Category name", value: "category_name" },
  { title: "Parent Category ID", value: "parent_category_id" },
  { title: "Category Icon", value: "icon" },
  { title: "Action", value: "action" },
]);

onMounted(() => {
  store.getCategorys();
});
</script>

<style lang="scss" scoped></style>
