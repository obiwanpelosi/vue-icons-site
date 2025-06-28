<script setup lang="ts">
import { ref, onMounted } from "vue";

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
  }
};

onMounted(() => {
  const savedDarkMode = localStorage.getItem("darkMode");
  if (
    savedDarkMode === "true" ||
    (!savedDarkMode &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
});
</script>

<template>
  <header
    class="fixed top-0 left-64 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10 flex items-center justify-between px-6"
  >
    <div class="flex items-center space-x-4">
      <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
        Vue Icons Library
      </h1>
    </div>

    <!-- Dark Mode Toggle -->
    <button
      @click="toggleDarkMode"
      class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
      :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <!-- Sun icon for dark mode -->
      <svg
        v-if="isDark"
        class="w-5 h-5 text-yellow-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <!-- Moon icon for light mode -->
      <svg
        v-else
        class="w-5 h-5 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  </header>
</template>
