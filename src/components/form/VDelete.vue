<template>
  <div class="w-full flex flex-col items-center gap-10 m-5">
    <p class="text-dblue text-[25px]">Are you sure you want to do that?</p>
    <div class="flex gap-10">
      <button
        class="border border-none bg-[#08b808] text-white px-10 py-4 rounded-md hover:bg-[#42805e]"
        @click="deleteUser"
      >
        Yes
      </button>
      <button
        class="border border-none bg-[#f80000] text-white px-10 py-4 rounded-md hover:bg-[#c25365]"
        @click="$emit('update:modelValue', false)"
      >
        No
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  deleteUser: { type: Function },
  modelValue: { type: Boolean },
});
</script>

<style lang="scss" scoped></style>
