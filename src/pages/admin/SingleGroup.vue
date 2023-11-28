<template>
  <div>
    <h1 class="text-dblue text-[25px] ml-5">Single Group</h1>
    <input
      type="text"
      v-model="phone_number"
      class="ml-5 border-2 p-[8px] text-[20px] outline-none"
    />
    <button
      @click="save"
      class="ml-5 p-[10px] rounded-lg border-none bg-dblue text-[#fff] hover:bg-[rgb(26,112,170)]"
    >
      Save
    </button>
    <AppTAble :headers="headers" :body="store?.students">
      <template #body_action="{ item }">
        <VActions
          :item="item"
          :modal_value="group_modal"
          path="/single_group"
        />
      </template>
    </AppTAble>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useGroupStore } from "../../stores/admin/group";
import AppTAble from "../../components/ui/AppTable.vue";
import VActions from "../../components/form/VActions.vue";

const store = useGroupStore();
const phone_number = ref("");
const route = useRoute();
const param = {
  page: 1,
  limit: 10,
  last_page: null,
  count: null,
};
const headers = ref([
  { title: "First name", value: "first_name" },
  { title: "Last Name", value: "last_name" },
  { title: "Phone_number", value: "phone" },
  { title: "Status", value: "status" },
]);
const save = async () => {
  let payload = {
    group: `${route.params.id}`,
    student_phone: phone_number.value,
  };
  await store.createAdminStudent(payload);
};

onMounted(() => {
  store.getAdminStudents(route.params.id);
});
</script>

<style lang="scss" scoped></style>
