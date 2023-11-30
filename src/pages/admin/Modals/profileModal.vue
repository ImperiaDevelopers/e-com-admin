<template>
  <AppModal v-model="dialog">
    <h1>Profile</h1>
    <div>
      <vee-form
        :validation-schema="schema"
        @submit="editProfile"
        :initial-values="forms"
      >
        <VInput
          type="text"
          label="First name"
          name="first_name"
          place-holder="First Name"
        >
        </VInput>
        <VInput
          type="text"
          label="Last name"
          name="last_name"
          place-holder="Last Name"
        >
        </VInput>
        <VInput
          type="text"
          label="Phone number"
          name="phone_number"
          mask="(+998)-##-###-##-##"
          place-holder="(+998)-93-102-06-36"
        >
        </VInput>
        <VButton btn_type="primary" type="submit">Edit profile</VButton>
      </vee-form>
    </div>
  </AppModal>
</template>

<script setup>
import { computed, ref } from "vue";
import AppModal from "../../../components/ui/app-modal.vue";
import { useAuthStore } from "../../../stores/auth";
import VInput from "../../../components/form/VInput.vue";
import VButton from "../../../components/form/VButton.vue";
const store = useAuthStore();
const dialog = ref(false);
const forms = ref({
  first_name: "",
  last_name: "",
  phone_number: "",
});

const openModal = () => {
  dialog.value = true;
  forms.value = store?.user;
};

const schema = computed(() => ({
  first_name: "required|min:3|max:15",
  last_name: "required|min:3|max:15",
  phone_number: "required|min:3|max:20",
}));

const editProfile = async (values) => {
  let a = values.phone.split("");
  let b = a.filter((item) => !isNaN(+item));
  let c = "+" + b.join("");
  let payload = {
    ...values,
    phone: c,
  };
  await store.updateProfile(payload);
};

defineExpose({ openModal });
</script>

<style lang="scss" scoped></style>
