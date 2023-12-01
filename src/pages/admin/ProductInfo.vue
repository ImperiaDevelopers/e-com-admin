<template>
  <div>
    <ProductInfoModal ref="product_info_modal" />
    <div class="flex justify-between px-4 items-center">
      <VButton
        type="submit"
        btn_type="primary"
        :isLoading="loading"
        @click="openModal"
        class="mt-5 mb-4 ml-2"
        >Create ProductInfo</VButton
      >
    </div>

    <AppTAble :headers="headers" :body="store?.product_information">
      <template #body_name="{ item }">
        <h1>{{ item.product.name }}</h1>
      </template>
      <template #body_performance_name="{ item }">
        <h1>{{ item.performance.name }}</h1>
      </template>
      <template #body_action="{ item }">
        <VActions :item="item" :modal_value="product_info_modal" />
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
import { useProductInfoStore } from "../../stores/admin/productInfo";
import ProductInfoModal from "./Modals/ProductInfoModal.vue";
import VButton from "../../components/form/VButton.vue";
import AppTAble from "../../components/ui/AppTable.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import VActions from "../../components/form/VActions.vue";

const loading = ref(false);
const store = useProductInfoStore();
const product_info_modal = ref();

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};
const openModal = () => {
  product_info_modal.value.openModal();
};

const headers = ref([
  { title: "Product Name", value: "name" },
  { title: "Performance value", value: "performers_value" },
  { title: "Main info", value: "main" },
  { title: "Performance name", value: "performance_name" },
  { title: "Action", value: "action" },
]);

onMounted(() => {
  store.getProductInfo();
});
</script>

<style lang="scss" scoped></style>
