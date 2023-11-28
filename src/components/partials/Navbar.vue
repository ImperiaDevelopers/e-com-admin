<template>
  <nav
    class="py-[15px] px-5 bg-[#12486B] flex items-center justify-between border-l-2 border-[#E7EDF0] sticky w-full top-0 right-0"
  >
    <button
      class="rounded-[50%] bg-[#486c96] p-[10px] lg:hidden mr-5"
      @click="isOpen = true"
    >
      <svg-icon
        class="text-white"
        type="mdi"
        :path="mdiChevronRight"
      ></svg-icon>
    </button>
    <div class="relative">
      <input
        type="text"
        class="outline-none bg-white py-3 px-[15px] text-[13px] w-[400px] rounded-[100px]"
        placeholder="Qidirish"
      />
      <SearchVue class="search absolute top-0 right-3 translate-y-1/2" />
    </div>
    <div class="account flex items-center">
      <div
        class="w-[35px] h-[35px] rounded-full flex items-center justify-center"
      >
        <Account class="acc" />
      </div>
      <p class="admin text-white text-xs ml-[10px] mr-[26px] capitalize">{{ role}}</p>
      <DownIcon />

      <div
        class="sub_menu absolute w-[160px] h-auto bg-white shadow-lg top-[55px] right-0 rounded-lg overflow-hidden duration-200"
      >
        <div
          class="py-3 px-4 hover:bg-[#12486B] hover:text-white text-[#12486B] duration-200"
        >
          Change Name
        </div>
        <div
          class="py-3 px-4 hover:bg-[#12486B] hover:text-white text-[#12486B] duration-200"
        >
          setting
        </div>
        <div
          @click="logout"
          class="py-3 px-4 hover:bg-[#12486B] hover:text-white text-[#12486B] duration-200"
        >
          Logout
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import Account from "../icons/AccountIcon.vue";
import SearchVue from "../icons/SearchIcon.vue";
import DownIcon from "../icons/DownIcon.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronRight } from "@mdi/js";
import { useSidebar } from "../../hooks/useSidebar";
import router from "../../router/index";
import { ref } from "vue";
const role=ref()
role.value = localStorage.getItem("role");
const isOpen = useSidebar();
const logout = () => {
  localStorage.removeItem("token");
  router.push("/");
};
</script>
<style lang="scss" scoped>
.sub_menu {
  opacity: 0;
  visibility: hidden;
  top: 60px;
}
.account:hover .sub_menu {
  opacity: 1;
  visibility: visible;
  top: 55px;
}
button {
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.4);
}
@media (max-width: 1024px) {
  nav {
    padding: 20px 15px 25px 15px;
  }
  input {
    margin: auto;
  }
}
@media (max-width: 632px) {
  nav {
    padding: 20px 15px 25px 15px;
  }
  input {
    width: 280px;
    margin-right: 15px;
  }
  .search {
    left: 240px;
  }
  button {
    display: flex;
    width: 35px;
    height: 35px;
    align-items: center;
  }
  .admin {
    margin-right: 10px;
  }
}
@media (max-width: 468px) {
  nav {
    padding: 20px 15px 25px 15px;
  }
  input {
    width: 220px;
    margin-right: 5px;
    padding: 10px;
  }
  .search {
    top: -4px;
    left: 187px;
  }
  button {
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    margin-right: 5px;
  }
  .admin {
    margin-right: 5px;
  }
  .acc {
    width: 30px;
  }
}
</style>
