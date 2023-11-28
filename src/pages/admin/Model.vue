<template>
  <div>
    <ModelModal ref="product_model_modal" />
    <div class="flex justify-between px-4 items-center">
      <VButton
        type="submit"
        btn_type="primary"
        :isLoading="loading"
        @click="openModal"
        class="mt-5 mb-4 ml-2"
        >Create Model</VButton
      >
    </div>
    <AppTAble :headers="headers" :body="store?.product_model">
      <template #body_action="{ item }">
        <VActions :item="item" :modal_value="product_model_modal" />
      </template>
    </AppTAble>
    <div class="flex justify-center mt-[40px]">
      <v-pagination
        v-model="params.page"
        :pages="params.last_page"
        :range-size="1"
        active-color="#EAF5FF"
        @update:modelValue="store.getModels(params)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useModelStore } from "../../stores/admin/model";
import ModelModal from "./Modals/ModelModal.vue";
import VButton from "../../components/form/VButton.vue";
import AppTAble from "../../components/ui/AppTable.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import VActions from "../../components/form/VActions.vue";

const loading = ref(false);
const store = useModelStore();
const product_model_modal = ref();

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};
const openModal = () => {
  product_model_modal.value.openModal();
};

const headers = ref([
  { title: "Model name", value: "name" },
  { title: "Category Brand ID", value: "category_brand_id" },
  { title: "Image", value: "image" },
  { title: "Action", value: "action" },
]);

onMounted(() => {
  store.getModels();
});
</script>

<style lang="scss" scoped></style>
