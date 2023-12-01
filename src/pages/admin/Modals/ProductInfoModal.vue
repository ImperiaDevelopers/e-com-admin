<template>
  <app-modal v-model="dialog">
    <h1 class="text-dblue text-[30px] font-semibold text-center">
      {{ title }}
    </h1>
    <vee-form
      :validation-schema="schema"
      @submit="send"
      class="p-10 flex flex-col"
      :initial-values="forms"
    >
      <VInput type="string" label="Main" name="main" placeHolderProps="Main" />
      <VInput
        type="string"
        label="Performance value"
        name="performers_value"
        placeHolderProps="Performance value"
      />
      <VSelect
        label="Select Product"
        name="product_id"
        :options="productStore.products"
      >
      </VSelect>
      <VSelect
        label="Select Performance"
        name="performers_id"
        :options="performanceStore.performances"
      >
      </VSelect>

      <VButton
        type="submit"
        btn_type="primary"
        :isLoading="loading"
        class="mt-8"
        >{{ btn_title }}</VButton
      >
    </vee-form>
  </app-modal>
  <app-modal v-model="dialog1">
    <VDelete v-model="dialog1" :deleteUser="deleteProductInfo" />
  </app-modal>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import appModal from "../../../components/ui/app-modal.vue";
import VInput from "../../../components/form/VInput.vue";
import VButton from "../../../components/form/VButton.vue";
import VDelete from "../../../components/form/VDelete.vue";
import { displayNotification } from "../../../plugins/notification";
import VSelect from "../../../components/form/VSelect.vue";
import { useProductStore } from "../../../stores/admin/product";
import { usePerformanceStore } from "../../../stores/admin/performance";
import { useProductInfoStore } from "../../../stores/admin/productInfo";

const store = useProductInfoStore();
const productStore = useProductStore();
const performanceStore = usePerformanceStore();

const dialog = ref(false);
const dialog1 = ref(false);
const uid = ref("");

const loading = ref(false);
const title = ref("Add");
const forms = ref({
  main: "",
  performers_value: "",
  product_id: null,
  performers_id: null,
});

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};

onMounted(async () => {
  store.getProductInfo();
  productStore.getProducts(params);
  performanceStore.getPerformance(params);
});
const openModal = (item) => {
  if (item) {
    title.value = "Edit";
    forms.value = { ...item };
    dialog.value = true;
  } else {
    dialog.value = true;
  }
};
const openDeleteModal = (id) => {
  dialog1.value = true;
  uid.value = id;
};
const schema = computed(() => {
  return {
    product_id: "required|min:1|max:25",
    main: "required",
    performers_value: "required",
    performers_id: "required",
  };
});
const btn_title = computed(() => {
  if (loading.value) {
    return "Loading";
  } else {
    return "Save";
  }
});
const deleteProductInfo = async () => {
  await store.deleteProductInformation(uid.value);
  dialog1.value = false;
  location.reload();
};
watch(dialog, (value) => {
  if (!value) {
    forms.value = {};
    title.value = "Add";
  }
});
const send = async (values) => {
  loading.value = true;
  let payload = {
    main: values.main,
    product_id: values.product_id,
    performers_value: values.performers_value,
    performers_id: values.performers_id,
  };
  if (!forms.value.main) {
    await store.createProductInformation(values);
  } else {
    await store.updateProductInformation(payload, forms.value.id);
  }
  loading.value = false;
  location.reload();
};

displayNotification();
defineExpose({ openModal, openDeleteModal });
</script>

<style lang="scss" scoped></style>
