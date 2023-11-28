<template>
  <div class="flex flex-col">
    <label class="text-white text text-[20px] font-[Inter] px-2">
      {{ label }}<i class="text-[#F46161]">*</i>
    </label>

    <div class="flex gap-1">
      <div
        class="se bg-white rounded-l-lg w-[100px] h-[56px] flex items-center justify-center"
      >
        <select
          name="country"
          id="select"
          class="outline-none text-dblue font-[1000] bg-white px-[3px]"
          @change="updateMaskAndValue"
        >
          <option value="UZ" class="text-center">UZ</option>
          <option value="US" class="text-center">US</option>
          <option value="RU" class="text-center">RU</option>
        </select>
      </div>

      <div class="flex">
        <input
          type="text"
          name=""
          id="in"
          class="w-[60px] h-[56px] pl-[16px] py-[18px] text-dblue outline-none"
          :value="selectedCountryCode"
          readonly
        />
        <vee-field
          :type="type"
          :name="name"
          id="v-f"
          v-mask="selectedCountryMask"
          class="w-[343px] h-[56px] rounded-r-lg px-[10px] py-[18px] text-dblue outline-none"
          :placeholder="selectedCountryPlaceholder"
          v-model="inputValue"
        />
      </div>
    </div>
    <ErrorMessage name="phone" class="text-[crimson] font-[700] text-[20px]" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  label: {
    type: String,
  },
  type: {
    default: "text",
    type: String,
  },
  name: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});


const inputValue = ref("");
const selectedCountryCode = ref("+998");
const selectedCountryMask = ref("(##) ### ## ##");
const selectedCountryPlaceholder = computed(() => {
  if (selectedCountryCode.value === "+998") {
    return "(00) 000 00 00";
  } else if (selectedCountryCode.value === "+1") {
    return "(000) 000 0000";
  } else if (selectedCountryCode.value === "+7") {
    return "(000) 000 00 00";
  } else {
    return "Enter phone number";
  }
});
function updateMaskAndValue(event) {
  const selectedCountry = event.target.value;
  if (selectedCountry === "UZ") {
    selectedCountryCode.value = "+998";
    selectedCountryMask.value = "(##) ### ## ##";
    selectedCountryPlaceholder.value = "(00) 000 00 00";
  } else if (selectedCountry === "US") {
    selectedCountryCode.value = "+1";
    selectedCountryMask.value = "(###) ### ####";
    selectedCountryPlaceholder.value = "(000) 000 0000";
  } else if (selectedCountry === "RU") {
    selectedCountryCode.value = "+7";
    selectedCountryMask.value = "(###) ### ## ##";
    selectedCountryPlaceholder.value = "(000) 000 00 00";
  }
  inputValue.value = "";
}

</script>

<style lang="scss" scoped>
/* Your custom styles here */
</style>
