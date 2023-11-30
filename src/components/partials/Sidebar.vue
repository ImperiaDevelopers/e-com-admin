<template>
  <div class="flex bg-white">
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity opacity-50 lg:hidden bg-[#00111380]"
    ></div>
    <div
      :class="isOpen ? 'translate-x-0 ' : '-translate-x-full'"
      class="bg-[#12486B] pt-[73.5px] w-[223px] fixed inset-y-0 left-0 z-20 overflow-y-auto transition duration-300 transform lg:translate-x-0 lg:static"
    >
      <router-link
        v-for="(item, index) in menu"
        :key="index"
        :to="item.path"
        class="flex items-center py-4 px-[30px]"
        :class="{ 'router-link-active': $route.meta.child == `${item.keys}` }"
      >
        <SvgIcon type="mdi" :path="item.icon" class="text-white" />
        <span class="ml-[15px] text-white">{{ item.label }}</span>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { AdminMenu } from "../menu/AdminMenu";
import { useSidebar } from "../../hooks/useSidebar";
import { computed } from "vue";
const isOpen = useSidebar();
let role = localStorage.getItem("role");
const menu = computed(() => {
  if (role == "Admin") {
    return AdminMenu;
  }
});
</script>

<style lang="scss">
.router-link-active {
  background: #f5fccd;
}

.router-link-active span,
.router-link-active Svg {
  color: #12486b;
}
</style>
