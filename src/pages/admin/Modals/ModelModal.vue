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
        label="Model Name"
        name="name"
        placeHolderProps="Model name"
      />
      <VInput
        type="number"
        label="Category Brand ID"
        name="category_brand_id"
        placeHolderProps="Category Brand ID"
      />
      <VInput type="text" label="Image" name="image" placeHolderProps="Image" />

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
    <VDelete v-model="dialog1" :deleteUser="deleteModel" />
  </app-modal>
</template>

<script setup>
import { ref, computed, reactive, watch } from "vue";
import appModal from "../../../components/ui/app-modal.vue";
import VInput from "../../../components/form/VInput.vue";
import VButton from "../../../components/form/VButton.vue";
import { useModelStore } from "../../../stores/admin/model";
import VDelete from "../../../components/form/VDelete.vue";
import { displayNotification } from "../../../plugins/notification";

const store = useModelStore();
const dialog = ref(false);
const dialog1 = ref(false);
const uid = ref("");

const loading = ref(false);
const title = ref("Add");
const forms = ref({
  name: "",
  category_brand_id: null,
  image: "",
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
    name: "required|min:1|max:25",
    category_brand_id: "required",
    image: "required",
  };
});
const btn_title = computed(() => {
  if (loading.value) {
    return "Loading";
  } else {
    return "Save";
  }
});
const deleteModel = async () => {
  await store.deleteModel(uid.value);
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
    category_brand_id: values.category_brand_id,
    image: values.image,
  };
  if (!forms.value.name) {
    await store.createModel(values);
  } else {
    console.log(forms.value.id);
    await store.updateModel(payload, forms.value.id);
  }
  loading.value = false;

  location.reload();
};
displayNotification();
defineExpose({ openModal, openDeleteModal });
</script>

<style lang="scss" scoped></style>
