<template>
  <div>
    <BrandModal ref="product_brand_modal" />
    <div class="flex justify-between px-4 items-center">
      <VButton
        type="submit"
        btn_type="primary"
        :isLoading="loading"
        @click="openModal"
        class="mt-5 mb-4 ml-2"
        >Create Brand</VButton
      >
    </div>
    <AppTAble :headers="headers" :body="store?.product_brand">
      <template #body_action="{ item }">
        <VActions :item="item" :modal_value="product_brand_modal" />
      </template>
    </AppTAble>
    <div class="flex justify-center mt-[40px]">
      <v-pagination
        v-model="params.page"
        :pages="params.last_page"
        :range-size="1"
        active-color="#EAF5FF"
        @update:modelValue="store.getBrands(params)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useBrandStore } from "../../stores/admin/brand";
import BrandModal from "./Modals/BrandModal.vue";
import VButton from "../../components/form/VButton.vue";
import AppTAble from "../../components/ui/AppTable.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import VActions from "../../components/form/VActions.vue";

const loading = ref(false);
const store = useBrandStore();
const product_brand_modal = ref();

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};
const openModal = () => {
  product_brand_modal.value.openModal();
};

const headers = ref([
  { title: "Brand name", value: "name" },
  { title: "Image", value: "image" },
  { title: "Action", value: "action" },
]);

onMounted(() => {
  store.getBrands();
});
</script>

<style lang="scss" scoped></style>
