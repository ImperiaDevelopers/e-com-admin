<template>
  <div class="w-full flex flex-col">
    <label
      :for="name"
      :class="{ 'text-[white]': color, 'text-dblue': !color }"
      >{{ label }}</label
    >
    <vee-field
      v-if="mask"
      v-mask="mask"
      :type="type"
      :name="name"
      mask="mask"
      :placeholder="placeHolderProps"
      class="p-[20px] text-[21px] outline-none"
    ></vee-field>
    <vee-field
      v-else
      :type="type"
      :name="name"
      :placeholder="placeHolderProps"
      class="p-[14px] text-[21px] outline-none rounded-xl"
    ></vee-field>
    <ErrorMessage :name="name" class="text-[crimson] font-[700] text-[20px]" />
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  placeHolderProps: {
    type: String,
  },
  label: {
    type: String,
  },
  mask: {
    type: String,
  },
  color: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
