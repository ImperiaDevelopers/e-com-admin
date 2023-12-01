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
      <VInput type="string" label="Name" name="name" placeHolderProps="Name" />
      <VInput
        type="string"
        label="Description"
        name="desc"
        placeHolderProps="Description"
      />
      <VSelect
        label="Select Product performance group"
        name="pro_performance_group_id"
        :options="proPerGroup.proPerformanceGroups"
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
    <VDelete v-model="dialog1" :deleteUser="deletePerformance" />
  </app-modal>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import appModal from "../../../components/ui/app-modal.vue";
import VInput from "../../../components/form/VInput.vue";
import VButton from "../../../components/form/VButton.vue";
import VDelete from "../../../components/form/VDelete.vue";
import VSelect from "../../../components/form/VSelect.vue";
import { displayNotification } from "../../../plugins/notification";
import { usePerformanceStore } from "../../../stores/admin/performance";
import { useProPerformanceGroupStore } from "../../../stores/admin/proPerformanceGroup";

const store = usePerformanceStore();
const proPerGroup = useProPerformanceGroupStore();

const dialog = ref(false);
const dialog1 = ref(false);
const uid = ref("");

const loading = ref(false);
const title = ref("Add");
const forms = ref({
  name: "",
  desc: "",
  pro_performance_group_id: null,
});

const params = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};

onMounted(async () => {
  store.getPerformance();
  proPerGroup.getProPerformanceGroups(params);
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
    name: "required|min:1|max:75",
    desc: "required|min:1|max:300",
    pro_performance_group_id: "required",
  };
});
const btn_title = computed(() => {
  if (loading.value) {
    return "Loading";
  } else {
    return "Save";
  }
});
const deletePerformance = async () => {
  await store.deletePerformance(uid.value);
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
    desc: values.desc,
    pro_performance_group_id: values.pro_performance_group_id,
  };
  if (!forms.value.name) {
    await store.createPerformances(values);
  } else {
    await store.updatePerformance(payload, forms.value.id);
  }
  loading.value = false;
  location.reload();
};

displayNotification();
defineExpose({ openModal, openDeleteModal });
</script>

<style lang="scss" scoped></style>
