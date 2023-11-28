<template>
   <div class="flex flex-col mt-[30px]">
            <label class="text-white text text-[20px] font-[Inter] px-2"
              >{{ label }}<i class="text-[#F46161]">*</i></label
            >
            <div class="flex gap-1">
              <vee-field
                :type="showPassword ? 'password' : 'text'"
                :name="name"
                id=""
                class="w-[453px] h-[56px] rounded-l-lg px-[16px] vee-field_pass text-dblue outline-none"
                :placeholder="placeholder"
              />
              <div>
                <button
                type="button"
                  @click="clickBtn($event)"
                  class="bg-white h-[56px] w-[50px] rounded-r-lg text-dblue"
                >
                  <i v-if="showPassword" class="fa-solid fa-eye"></i>
                  <i v-else class="fa-solid fa-eye-slash"></i>
                </button>
              </div>
            </div>
            <ErrorMessage :name="name"  class="text-[crimson] font-[700] text-[20px]"/>
          </div>
</template>

<script setup>
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
import { ref } from 'vue';
const showPassword = ref(true);
const clickBtn = (event) => {
  event.preventDefault();
  showPassword.value = !showPassword.value;
};
</script>

<style lang="scss" scoped>
.vee-field_pass {
  font-family: "password-font", monospace;
  font-size: large;
  letter-spacing: 0.3em;
}
</style>