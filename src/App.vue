<script setup lang="ts">
import { ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";

const sidebarOpen = ref(false);
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
  >
    <Sidebar :is-open="sidebarOpen" @close-sidebar="sidebarOpen = false" />
    <Header @toggle-sidebar="sidebarOpen = !sidebarOpen" />
    <main class="md:ml-64 pt-16">
      <router-view></router-view>
    </main>
  </div>
</template>
