<template>
  <div>
    <ProductStockModal ref="product_in_stock_modal" />
    <div class="flex justify-between px-4 items-center">
      <VButton
        type="submit"
        btn_type="primary"
        :isLoading="loading"
        @click="openModal"
        class="mt-5 mb-4 ml-2"
        >Create ProductStock</VButton
      >
    </div>

    <AppTAble :headers="headers" :body="store?.product_in_stock">
      <template #body_name="{ item }">
        <h1>{{ item.product?.name }}</h1>
      </template>
      <template #body_action="{ item }">
        <VActions :item="item" :modal_value="product_in_stock_modal" />
      </template>
    </AppTAble>
    <div class="flex justify-center mt-[40px]">
      <v-pagination
        v-model="params.page"
        :pages="params.last_page"
        :range-size="1"
        active-color="#EAF5FF"
        @update:modelValue="store.getProductStocks(params)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useProductStockStore } from "../../stores/admin/productStock";
import ProductStockModal from "./Modals/ProductStockModal.vue";
import VButton from "../../components/form/VButton.vue";
import AppTAble from "../../components/ui/AppTable.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import VActions from "../../components/form/VActions.vue";

const loading = ref(false);
const store = useProductStockStore();
const product_in_stock_modal = ref();

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};
const openModal = () => {
  product_in_stock_modal.value.openModal();
};

const headers = ref([
  { title: "Product Name", value: "name" },
  { title: "Duration", value: "duration" },
  { title: "Percent", value: "percent" },
  { title: "From", value: "from" },
  { title: "To", value: "to" },
  { title: "Action", value: "action" },
]);

onMounted(() => {
  store.getProductStocks();
});
</script>

<style lang="scss" scoped></style>
