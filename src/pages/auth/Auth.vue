<template>
  <main class="login">
    <div class="container min-h-screen flex justify-center items-center">
      <div
        class="main w-[636px] h-[666px] flex flex-col items-center p-10 rounded-3xl"
      >
        <h1 class="text-[44px] text-center font-bold text-white font-[Inter]">
          Ahyo.uzning admini
        </h1>
        <p class="text-[32px] text-center font-normal text-white font-[Inter]">
          Xush kelibsiz!
        </p>
        <vee-form :validation-schema="schema" @submit="save" class="mt-[80px]">
          <VInput label="Email" name="email" type="email" placeHolderProps="Enter email"></VInput>
          <!-- <VTelInput
            type="text"
            name="phone"
            label="Telefon raqam"
            placeholder="(00) 000 00 00"
          ></VTelInput> -->
          <VPassINput
            name="password"
            type="text"
            label="Parol"
            placeholder="********"
          ></VPassINput>
          <VButton class="mt-[60px]" btn_type="primary" :isLoading="loading">{{
            btn_title
          }}</VButton>
        </vee-form>
        <!-- <div v-if="authstore.roles.length > 0">
          <select v-model="selected">
            <option
              :value="item"
              v-for="(item, index) in authstore.roles"
              :key="index"
            >
              {{ item }}
            </option>
          </select>
          <button @click="saveForm">Save form</button>
        </div> -->
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import VTelInput from "../../components/form/VTelInput.vue";
import VPassINput from "../../components/form/VPassINput.vue";
import VButton from "../../components/form/VAuthButton.vue";
import VInput from '../../components/form/VInput.vue'
import { useAuthStore } from "../../stores/auth";
const authstore = useAuthStore();
const schema = computed(() => {
  return {
    email: "required|min:14|max:35",
    password: "required|min:3|max:24",
  };
});
const loading = ref(false);
const btn_title = computed(() => {
  if (loading.value) {
    return "Loading";
  } else {
    return "Kirish";
  }
});

const save = async (values) => {
  loading.value = true;
 
  let payload = {
    email: values.email,
    password: values.password,
  };
  await authstore.authLogin(payload)
  loading.value = false;

};


</script>

<style scoped>
.main {
  box-shadow: 0px 0px 15px 15px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12.5px); /* Adjust the blur value as needed */
}
.login {
  background-image: url("../../assets/images/b.jpg");
  background-size: cover;
  background-position: center;
}
</style>
