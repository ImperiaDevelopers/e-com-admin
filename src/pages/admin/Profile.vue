<template>
  <h1 class="text-center mt-3 text-3xl text-sky-700 font-semibold">PROFILE</h1>
  <div class="w-full h-full flex items-center justify-center">
    <profileModal ref="profile_modal" />
    <profilePassModal ref="profile_pass_modal" />
    <div class="w-[500px] flex flex-col gap-2">
      <img
        src="https://th.bing.com/th/id/R.565d1b8717c4ae49ca2718b3b32d2206?rik=PQ4tNfhAO03Vkw&pid=ImgRaw&r=0"
        class="w-[150px] h-[150px] alt="
      />

      <p>
        Firstname: <span>{{ store?.user?.first_name }}</span>
      </p>

      <p>
        Lastname: <span>{{ store?.user?.last_name }}</span>
      </p>

      <p>
        Phone number: <span>{{ store?.user?.phone_number }}</span>
      </p>
    </div>
    <div class="flex gap-2 flex-col">
      <VButton btn_type="primary" @click="updateProfile"
        >Update profile</VButton
      >
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "../../stores/auth";
import VButton from "../../components/form/VButton.vue";
import profileModal from "./Modals/profileModal.vue";
import profilePassModal from "./Modals/profilePassModal.vue";

const store = useAuthStore();
const profile_modal = ref("");
// const profile_pass_modal = ref("");
// const image = ref("");
// const updateImage = () => {
//   image.value = `${store?.user?.image}`;
// };
const updateProfile = () => {
  profile_modal.value.openModal();
};

// const updatePass = () => {
//   profile_pass_modal.value.openModal();
// };

onMounted(async () => {
  await store.getProfile();
  // updateImage();
});
</script>

<style lang="scss" scoped></style>
