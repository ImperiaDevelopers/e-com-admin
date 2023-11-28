<template>
  <div>
    <ImageModal ref="image_modal" />
    <div class="flex justify-between px-4 items-center">
      <h1 class="text-dblue uppercase text-[22px] font-semibold">
        Images({{ params.count }})
      </h1>
      <VButton
        type="submit"
        btn_type="primary"
        :isLoading="loading"
        @click="openModal"
        class="mt-5 mb-4 ml-2"
        >Add Image</VButton
      >
    </div>
    <AppTAble :headers="headers" :body="store?.images">
      <template #body_product="{ item }"
        ><h1>{{ item.product?.name }}</h1>
      </template>
      <template #body_action="{ item }">
        <VActions :item="item" :modal_value="image_modal" />
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
import { useImageStore } from "../../stores/admin/image";
import ImageModal from "./Modals/ImageModal.vue";
import VButton from "../../components/form/VButton.vue";
import AppTAble from "../../components/ui/AppTable.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import VActions from "../../components/form/VActions.vue";
const loading = ref(false);
const store = useImageStore();
const image_modal = ref();

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};
const openModal = () => {
  image_modal.value.openModal();
};

const headers = ref([
  { title: "Product", value: "product" },
  { title: "Image", value: "image" },
  { title: "Action", value: "action" },
]);

onMounted(async () => {
  await store.getImages();
});
</script>

<style lang="scss" scoped></style>
