<script setup lang="ts">
import { ref, onMounted } from "vue";
import { AiOutlineMoon, AiOutlineSun } from "vue-icons-lib/ai";

const isDark = ref(false);
const emit = defineEmits(["toggle-sidebar"]);

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

const toggleSidebar = () => {
  emit("toggle-sidebar");
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
    class="fixed top-0 left-0 md:left-64 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10 flex items-center justify-between px-6"
  >
    <div class="flex items-center space-x-4">
      <!-- Hamburger Menu Button (Mobile Only) -->
      <button
        @click="toggleSidebar"
        class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
        title="Toggle sidebar"
      >
        <svg
          class="w-5 h-5 text-gray-700 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

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
      <AiOutlineSun v-if="isDark" class="w-5 h-5 text-yellow-500" />
      <!-- Moon icon for light mode -->
      <AiOutlineMoon v-else class="w-5 h-5 text-gray-700" />
    </button>
  </header>
</template>
