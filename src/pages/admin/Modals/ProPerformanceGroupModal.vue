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
        type="string"
        label="Pro Per. Name"
        name="name"
        placeHolderProps="Name"
      />
      <VSelect
        label="Select Category"
        name="category_id"
        :options="categoryStore.category"
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
    <VDelete v-model="dialog1" :deleteUser="deleteProPerformanceGroup" />
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
import { useProPerformanceGroupStore } from "../../../stores/admin/proPerformanceGroup";
import { useCategoryStore } from "../../../stores/admin/category";

const store = useProPerformanceGroupStore();
const categoryStore = useCategoryStore();

const dialog = ref(false);
const dialog1 = ref(false);
const uid = ref("");

const loading = ref(false);
const title = ref("Add");
const forms = ref({
  name: "",
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
    name: "required|min:1|max:25",
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
const deleteProPerformanceGroup = async () => {
  await store.deleteProPerformanceGroup(uid.value);
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
    category_id: values.category_id,
  };
  if (!forms.value.name) {
    await store.createProPerformanceGroup(values);
  } else {
    await store.updateProPerformanceGroup(payload, forms.value.id);
  }
  loading.value = false;
  location.reload();
};

onMounted(async () => {
  store.getProPerformanceGroups();
  categoryStore.getCategorys();
});

displayNotification();
defineExpose({ openModal, openDeleteModal });
</script>

<style lang="scss" scoped></style>
