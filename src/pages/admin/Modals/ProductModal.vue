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
      <VInput type="text" label="Name" name="name" placeHolderProps="Name" />
      <VInput
        type="number"
        label="Price"
        name="price"
        placeHolderProps="Price"
      />
      <VSelect
        label="Select Category"
        name="category_id"
        :options="categoryStore.ParCat"
      >
      </VSelect>
      <VSelect
        label="Select Model"
        name="product_model_id"
        :options="modelStore.product_model"
      >
      </VSelect>
      <VSelect
        label="Select Brand"
        name="product_brand_id"
        :options="brandStore.product_brand"
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
    <VDelete v-model="dialog1" :deleteUser="deleteProduct" />
  </app-modal>
</template>

<script setup>
import { ref, computed, reactive, watch, onMounted } from "vue";
import appModal from "../../../components/ui/app-modal.vue";
import VInput from "../../../components/form/VInput.vue";
import VButton from "../../../components/form/VButton.vue";
import { useProductStore } from "../../../stores/admin/product";
import VDelete from "../../../components/form/VDelete.vue";
import { useCategoryStore } from "../../../stores/admin/category";
import { useBrandStore } from "../../../stores/admin/brand";
import { useModelStore } from "../../../stores/admin/model";
import VSelect from "../../../components/form/VSelect.vue";

const categoryStore = useCategoryStore();
const modelStore = useModelStore();
const brandStore = useBrandStore();
const store = useProductStore();
const dialog = ref(false);
const dialog1 = ref(false);
const uid = ref("");

const loading = ref(false);
const title = ref("Add");
const forms = ref({
  name: "",
  price: null,
  category_id: null,
  product_brand_id: null,
  product_model_id: null,
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
    name: "required|min:1|max:30",
    price: "required|min:1|max:30",
  };
});
const btn_title = computed(() => {
  if (loading.value) {
    return "Loading";
  } else {
    return "Save";
  }
});
const deleteProduct = async () => {
  await store.deleteProduct(uid.value);
  dialog1.value = false;
  location.reload();
};

watch(dialog, (value) => {
  if (!value) {
    forms.value = {};
    title.value = "Add";
  }
});
onMounted(() => {
  categoryStore.getParCat();
  brandStore.getBrands();
  modelStore.getModels();

  console.log("modal");
});
const send = async (values) => {
  loading.value = true;
  let payload = {
    name: values.name,
    price: values.price,
    category_id: values.category_id,
    product_brand_id: values.product_brand_id,
    product_model_id: values.product_model_id,
  };
  if (!forms.value.name) {
    await store.createProduct(values);
  } else {
    await store.updateProduct(payload, forms.value._id);
  }
  loading.value = false;

  // location.reload();
};
defineExpose({ openModal, openDeleteModal });
</script>

<style lang="scss" scoped></style>
