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
      <VInput
        type="text"
        label="Product_id"
        name="product_id"
        placeHolderProps="Product id"
      />
      <VInput
        type="text"
        label="Image link"
        name="image"
        placeHolderProps="Image"
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
import { ref, computed, watch } from "vue";
import { useImageStore } from "../../../stores/admin/image";
import appModal from "../../../components/ui/app-modal.vue";
import VInput from "../../../components/form/VInput.vue";
import VButton from "../../../components/form/VButton.vue";
import VDelete from "../../../components/form/VDelete.vue";
const store = useImageStore();
const dialog = ref(false);
const dialog1 = ref(false);
const uid = ref("");

const loading = ref(false);
const title = ref("Add");
const forms = ref({
  image: "",
  product_id: null,
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
    image: "required|min:1|max:500",
    product_id: "required|min:1|max:10",
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
  await store.deleteImage(uid.value);
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
    image: values.image,
    product_id: values.product_id,
  };
  if (!forms.value.image) {
    await store.createImage(values);
  } else {
    await store.updateImage(payload, forms.value.id);
    console.log(forms.value.id);
  }
  loading.value = false;

  location.reload();
};
defineExpose({ openModal, openDeleteModal });
</script>

<style lang="scss" scoped></style>
