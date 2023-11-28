<template>
  <div class="mb-2 block">
    <label :for="name" class="block text-[22px] mb-2 tracking-wide text-dblue">
      {{ label }}</label
    >
    <vee-field
      as="select"
      :name="name"
      id="select"
      class="custom-select h-10 w-full px-[0.375rem] -p-5 rounded-lg bg-gray-50 outline-none"
    >
      <option disabled hidden value="">Please select one</option>
      <option
        class="custom-select-option text-paragraph-default"
        v-for="(option, index) in options"
        :key="`${index}${option}`"
        :value="option.name ? option.name : option"
      >
        {{ option.name ? option.name : option }}
      </option>
    </vee-field>
    <ErrorMessage
      class="text-[crimson] text-[20px] font-semibold"
      :name="name"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String },
  name: { type: String },
  //   isDisabled: { type: Boolean },
  options: { type: Array },
});
</script>

<style lang="scss" scoped></style>
