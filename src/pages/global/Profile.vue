<template>
  <div class="flex ml-[5%] mt-[4%]">
    <ProfileModal ref="profile_modal" />
    <div
      class="w-[95%] h-[600px] flex items-center bg-slate-300 rounded-[30px] justify-around"
    >
      <div
        class="bg-white rounded-full w-[300px] h-[300px] flex items-center justify-center text hover-div"
      >
        <div
          v-if="!selectedImage"
          class="h-[300px] w-[80000px] flex justify-center items-center"
        >
          <i class="fa-solid fa-user text-[150px]"></i>
        </div>

        <div v-if="isLoading">
          <svg
            aria-hidden="true"
            class="w-[100px] h-[100px] text-[white] animate-spin dark:text-gray-300 fill-[white] ml-2"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
        <div
          v-else
          class="image-preview rounded-full"
          :style="{ backgroundImage: `url(${selectedImage})` }"
        ></div>

        <input
          type="file"
          ref="imagePicker"
          accept="image/*"
          style="display: none"
          @change="handleImageChange"
        />
        <button
          class="hidden bg-slate-500 w-[300px] h-[150px] opacity-80 rounded-b-[500px]"
          @click="openImagePicker"
        >
          <i class="fa-solid fa-camera text-white text-[25px]"></i>
          <p class="text-[25px] font-semibold text-white">Change Image</p>
        </button>
      </div>

      <div
        class="w-[500px] flex flex-col gap-5 text-[30px] text-dblue font-bold"
      >
        <p>
          Firstname: <span>{{ store?.user?.first_name }}</span>
        </p>
        <p>
          Lastname: <span>{{ store?.user?.last_name }}</span>
        </p>
        <p>
          Phone number: <span>{{ store?.user?.phone }}</span>
        </p>
        <p>
          Role: <span>{{ store?.user?.role }}</span>
        </p>
      </div>
      <VButton btn_type="info" @click="updateProfile">Update Profile</VButton>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/auth";
import VButton from "../../components/form/VButton.vue";
import ProfileModal from "./Modal/ProfileModal.vue";
import { onMounted, ref, watch } from "vue";

const profile_modal = ref("");
const store = useAuthStore();
const selectedImage = ref("");
const imagePicker = ref(null);

const openImagePicker = () => {
  imagePicker.value.click();
};
const isLoading = ref(false);

const handleImageChange = async (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  const form = new FormData();
  form.append("image", file);
  isLoading.value = true;
  await store.updateImage(form);
  
  reader.onload = (e) => {
    selectedImage.value = e.target.result;
  };
  reader.readAsDataURL(file);
  const payload = {
    image: store.image,
  };
  await store.updateProfile(payload);
  isLoading.value = false;
};

const updateProfile = () => {
  profile_modal.value.openModal();
};

onMounted(async () => {
  await store.getProfile();
  selectedImage.value = store?.user.image;
});
</script>

<style lang="scss" scoped>
.hover-div {
  position: relative;
}

.hover-div:hover button {
  display: block;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}

.hover-div button {
  display: none;
}

.image-preview {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
