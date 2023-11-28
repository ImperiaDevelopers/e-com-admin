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
      <VInput
        type="number"
        label="Category Id"
        name="category_id"
        placeHolderProps="Category Id"
      />
      <VInput
        type="number"
        label="Brand Id"
        name="product_brand_id"
        placeHolderProps="Brand Id"
      />
      <VInput
        type="number"
        label="Model Id"
        name="product_model_id"
        placeHolderProps="Model Id"
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
    <VDelete v-model="dialog1" :deleteUser="deleteProduct" />
  </app-modal>
</template>

<script setup>
import { ref, computed, reactive, watch } from "vue";
import appModal from "../../../components/ui/app-modal.vue";
import VInput from "../../../components/form/VInput.vue";
import VButton from "../../../components/form/VButton.vue";
import { useProductStore } from "../../../stores/admin/product";
import VDelete from "../../../components/form/VDelete.vue";
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

  location.reload();
};
defineExpose({ openModal, openDeleteModal });
</script>

<style lang="scss" scoped></style>
