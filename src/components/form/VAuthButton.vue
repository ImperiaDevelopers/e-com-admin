<template>
  <button
    :class="classes"
    :disabled="isLoading"
    class="flex items-center w-[500px] h-[56px] justify-center text-white duration-200 rounded-lg border-none"
  >
    <slot></slot>
    <div v-if="isLoading" class="ml-2">
      <svg
        class="w-5 h-5 text-white animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </button>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  btn_type: {
    type: String,
  },
  isLoading: {
    type: Boolean,
  },
});

const typeStyle = {
  primary: "bg-dblue hover:bg-[rgb(26,112,170)]",
  info: "bg-[aqua] hover:bg-[lightblue]",
  danger: "bg-[crimson] hover:bg-[lightcoral]",
};
const classes = computed(() => {
  return typeStyle[props.btn_type];
});
</script>

<style scoped></style>
