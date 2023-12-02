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
        label="Select Category"
        name="category_id"
        :options="categoryStore.category"
      >
      </VSelect>
      <VSelect
        label="Select ProBrand"
        name="pro_brend_id"
        :options="proBrandstore.pro_brands"
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
    <VDelete v-model="dialog1" :deleteUser="deleteProCatBrand" />
  </app-modal>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import appModal from "../../../components/ui/app-modal.vue";
import VButton from "../../../components/form/VButton.vue";
import VDelete from "../../../components/form/VDelete.vue";
import { displayNotification } from "../../../plugins/notification";
import VSelect from "../../../components/form/VSelect.vue";
import { useCategoryStore } from "../../../stores/admin/category";
import { useProBrandStore } from "../../../stores/admin/proBrand";
import { useProCatBrandStore } from "../../../stores/admin/proCatBrand";

const store = useProCatBrandStore();
const proBrandstore = useProBrandStore();
const categoryStore = useCategoryStore();

const dialog = ref(false);
const dialog1 = ref(false);
const uid = ref("");

const loading = ref(false);
const title = ref("Add");
const forms = ref({
  pro_brend_id: null,
  category_id: null,
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
    pro_brend_id: "required",
    category_id: "required",
  };
});
const btn_title = computed(() => {
  if (loading.value) {
    return "Loading";
  } else {
    return "Save";
  }
});
const deleteProCatBrand = async () => {
  await store.deleteProCatBrand(uid.value);
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
    pro_brend_id: values.pro_brend_id,
    category_id: values.category_id,
  };
  if (!forms.value.category_id) {
    await store.createProCatBrand(values);
  } else {
    await store.updateProCatBrand(payload, forms.value.id);
  }
  loading.value = false;
  location.reload();
};

onMounted(async () => {
  categoryStore.getCategorys();
  proBrandstore.getProBrands();
});

displayNotification();
defineExpose({ openModal, openDeleteModal });
</script>

<style lang="scss" scoped></style>
