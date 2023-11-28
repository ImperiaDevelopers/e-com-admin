<template>
  <div class="w-full flex gap-2 justify-center">
    <button
      class="border border-none bg-dblue text-white px-2 py-1 rounded-md"
      @click="openEditModal"
    >
      <i class="fa-solid fa-pen"></i>
    </button>
    <button
      class="border border-none bg-[red] text-white px-2 py-1 rounded-md"
      @click="openDeleteModal"
    >
      <i class="fa-solid fa-trash"></i>
    </button>
    <button
      v-if="path"
      class="border border-none bg-[#1785a7] text-white px-2 py-1 rounded-md"
      @click="openSingleUser"
    >
      <i class="fa-solid fa-eye"></i>
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  item: {
    type: Object,
  },
  modal_value: {
    type: Object,
  },
  path: {
    type: String,
  },
});
const openEditModal = () => {
  props.modal_value.openModal(props.item);
};
const openDeleteModal = () => {
  props.modal_value.openDeleteModal(props.item.id);
};
const openSingleUser = () => {
  router.push(`${props.path}/${props.item.id}`);
};
</script>

<style lang="scss" scoped></style>
