<template>
  <AppModal v-model="dialog">
    <vee-form
      :validation-schema="schema"
      @submit="editProfile"
      :initial-values="store?.user"
      class="flex flex-col"
    >
      <VInput
        type="text"
        label="First Name"
        name="first_name"
        placeHolderProps="First name"
      />
      <VInput
        type="text"
        label="Last Name"
        name="last_name"
        placeHolderProps="Last name"
      />
      <VInput
        type="text"
        label="Phone Number"
        name="phone"
        mask="+998 (##) ### ## ##"
        placeHolderProps="+998 (00) 000 00 00"
      />
      <VButton btn_type="primary" type="submit">Edit Profile</VButton>
    </vee-form>
  </AppModal>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import AppModal from "../../../components/ui/app-modal.vue";
import VInput from "../../../components/form/VInput.vue";
import VButton from "../../../components/form/VButton.vue";
import { useAuthStore } from "../../../stores/auth";
const from = reactive({
  first_name: "",
  last_name: "",
  phone: "",
});
const schema = computed(() => {
  return {
    first_name: "required|min:3|max:15",
    last_name: "required|min:3|max:15",
    phone: "required|min:18|max:20",
  };
});
const dialog = ref(false);
const store = useAuthStore();
const openModal = () => {
  dialog.value = true;
};
const editProfile = async (values) => {
  values.phone = "+" + values.phone.replace(/\D/g, "");
  await store.updateProfile(values);
  location.reload()
};

defineExpose({
  openModal,
});
</script>

<style lang="scss" scoped></style>
