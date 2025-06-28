<template>
  <aside
    class="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 z-20"
  >
    <div class="text-2xl font-bold text-green-600 dark:text-green-400 mb-8">
      Vue Icons
    </div>

    <!-- Search Bar -->
    <div class="mb-6">
      <div class="relative">
        <input
          v-model="searchQuery"
          @keyup="handleSearch"
          type="text"
          placeholder="Search all icons..."
          class="w-full px-4 py-2 pl-10 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
        <svg
          class="absolute left-3 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>

    <nav class="space-y-2">
      <router-link
        to="/"
        class="block px-4 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
        :class="{
          'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400':
            $route.path === '/',
        }"
      >
        Home
      </router-link>

      <div class="pt-4">
        <div
          class="px-4 text-sm font-medium text-gray-400 dark:text-gray-500 uppercase"
        >
          Icon Groups
        </div>
        <router-link
          v-for="group in iconGroups"
          :key="group.name"
          :to="`/icons/${group.path}`"
          class="block px-4 py-2 mt-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          :class="{
            'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400':
              $route.path.includes(group.path),
          }"
        >
          {{ group.name }}
        </router-link>
      </div>
    </nav>

    <div
      class="absolute bottom-4 left-0 w-full flex justify-center items-center"
    >
      <span class="text-xs text-gray-400 dark:text-gray-500 mr-1"
        >built by</span
      >
      <a
        href="https://www.github.com/obiwanpelosi"
        target="_blank"
        rel="noopener"
        class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 font-semibold"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
          />
        </svg>
        obiwanpelosi
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const searchQuery = ref("");

const handleSearch = () => {
  if (searchQuery.value.trim().length >= 3) {
    router.push(`/search?q=${encodeURIComponent(searchQuery.value.trim())}`);
  }
};

const iconGroups = [
  { name: "Ant Icons", path: "ant-icons" },
  { name: "Box Icons", path: "box-icons" },
  { name: "Circum Icons", path: "circum-icons" },
  { name: "CSS.GG Icons", path: "css-gg-icons" },
  { name: "Dev Icons", path: "dev-icons" },
  { name: "Feather Icons", path: "feather-icons" },
];
</script>
