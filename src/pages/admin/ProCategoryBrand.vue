<template>
  <div>
    <ProCatBrandModal ref="pro_cat_brand" />
    <div class="flex justify-between px-4 items-center">
      <VButton
        type="submit"
        btn_type="primary"
        :isLoading="loading"
        @click="openModal"
        class="mt-5 mb-4 ml-2"
        >Create ProCatBrand</VButton
      >
    </div>

    <AppTAble :headers="headers" :body="store?.pro_category_brands">
      <template #body_category="{ item }">
        <h1>{{ item.category.category_name }}</h1>
      </template>
      <template #body_proBrand="{ item }">
        <h1>{{ item.proBrand.name }}</h1>
      </template>
      <template #body_action="{ item }">
        <VActions :item="item" :modal_value="pro_cat_brand" />
      </template>
    </AppTAble>
    <div class="flex justify-center mt-[40px]">
      <v-pagination
        v-model="params.page"
        :pages="params.last_page"
        :range-size="1"
        active-color="#EAF5FF"
        @update:modelValue="store.getProCatBrands(params)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useProCatBrandStore } from "../../stores/admin/proCatBrand";
import ProCatBrandModal from "./Modals/ProCatBrandModal.vue";
import VButton from "../../components/form/VButton.vue";
import AppTAble from "../../components/ui/AppTable.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import VActions from "../../components/form/VActions.vue";

const store = useProCatBrandStore();
const loading = ref(false);
const pro_cat_brand = ref();

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};
const openModal = () => {
  pro_cat_brand.value.openModal();
};

const headers = ref([
  { title: "Product brand", value: "proBrand" },
  { title: "Category", value: "category" },
  { title: "Action", value: "action" },
]);

onMounted(() => {
  store.getProCatBrands();
});
</script>

<style lang="scss" scoped></style>
