<template>
  <div>
    <ProductModal ref="product_modal" />
    <div class="flex justify-between px-4 items-center">
      <h1 class="text-dblue uppercase text-[22px] font-semibold">
        Products({{ params.count }})
      </h1>
      <VButton
        type="submit"
        btn_type="primary"
        :isLoading="loading"
        @click="openModal"
        class="mt-5 mb-4 ml-2"
        >Create Product</VButton
      >
    </div>
    <AppTAble :headers="headers" :body="store?.products">
      <template #body_category="{ item }"
        ><h1>{{ item?.category?.category_name }}</h1>
      </template>
      <template #body_product_brand="{ item }"
        ><h1>{{ item?.product_brand?.name }}</h1>
      </template>
      <template #body_price="{ item }"
        ><h1>{{ formatPrice(item?.price) }}</h1>
      </template>
      <template #body_product_model="{ item }"
        ><h1>{{ item?.product_model?.name }}</h1>
      </template>
      <template #body_action="{ item }">
        <VActions :item="item" :modal_value="product_modal" />
      </template>
    </AppTAble>
    <div class="flex justify-center mt-[40px]">
      <v-pagination
        v-model="params.page"
        :pages="params.last_page"
        :range-size="1"
        active-color="#EAF5FF"
        @update:modelValue="store.getProducts(params)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useProductStore } from "../../stores/admin/product";
import ProductModal from "./Modals/ProductModal.vue";
import VButton from "../../components/form/VButton.vue";
import AppTAble from "../../components/ui/AppTable.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import VActions from "../../components/form/VActions.vue";

const loading = ref(false);
const store = useProductStore();
const product_modal = ref();

const formatPrice = (price) => {
  if (price !== undefined) {
    return parseFloat(price).toFixed(2);
  }
  return "";
};

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};
const openModal = () => {
  product_modal.value.openModal();
};

const headers = ref([
  { title: "Name", value: "name" },
  { title: "Price", value: "price" },
  { title: "Category", value: "category" },
  { title: "Brand", value: "product_brand" },
  { title: "Model", value: "product_model" },
  { title: "Quantity", value: "quantity" },
  { title: "Action", value: "action" },
]);

onMounted(async () => {
  store.getProducts(params);
});
</script>

<style lang="scss" scoped></style>
