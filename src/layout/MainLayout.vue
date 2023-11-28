<template>
  <div class="w-full h-screen flex">
    <Sidebar />
    <div class="w-full flex flex-col">
        <Navbar /> 
        <router-view class="overflow-x-auto"></router-view>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/partials/Sidebar.vue";
import Navbar from "../components/partials/Navbar.vue";
</script>

<style lang="scss" scoped></style>
