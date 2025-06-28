<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
  >
    <Sidebar />
    <Header />
    <main class="ml-64 pt-16">
      <router-view></router-view>
    </main>
  </div>
</template>
