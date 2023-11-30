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
      <VSelect
        label="Select Product"
        name="product_id"
        :options="productStore.products"
      >
      </VSelect>
      <!-- <VInput
        type="number"
        label="Product ID"
        name="prdouct_id"
        placeHolderProps="Product ID"
      /> -->
      <VInput
        type="number"
        label="Duration"
        name="duration"
        placeHolderProps="Duration"
      />
      <VInput
        type="number"
        label="Percent"
        name="percent"
        placeHolderProps="Percent"
      />

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
    <VDelete v-model="dialog1" :deleteUser="deleteProductStock" />
  </app-modal>
</template>

<script setup>
import { ref, computed, reactive, watch, onMounted } from "vue";
import appModal from "../../../components/ui/app-modal.vue";
import VInput from "../../../components/form/VInput.vue";
import VButton from "../../../components/form/VButton.vue";
import { useProductStockStore } from "../../../stores/admin/productStock";
import VDelete from "../../../components/form/VDelete.vue";
import { displayNotification } from "../../../plugins/notification";
import VSelect from "../../../components/form/VSelect.vue";
import { useProductStore } from "../../../stores/admin/product";
const store = useProductStockStore();
const productStore = useProductStore();

const dialog = ref(false);
const dialog1 = ref(false);
const uid = ref("");

const loading = ref(false);
const title = ref("Add");
const forms = ref({
  product_id: "",
  duration: "",
  percent: "",
});

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};

onMounted(async () => {
  store.getProductStocks();
  productStore.getProducts(params);
  console.log("modal");
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
    duration: "required",
    percent: "required",
  };
});
const btn_title = computed(() => {
  if (loading.value) {
    return "Loading";
  } else {
    return "Save";
  }
});
const deleteProductStock = async () => {
  await store.deleteProductStock(uid.value);
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
    product_id: values.product_id,
    duration: values.duration,
    percent: values.percent,
  };
  if (!forms.value.percent) {
    await store.createProductStock(values);
  } else {
    console.log(forms.value.id);
    await store.updateProductStock(payload, forms.value.id);
  }
  loading.value = false;

  location.reload();
};
displayNotification();
defineExpose({ openModal, openDeleteModal });
</script>

<style lang="scss" scoped></style>
