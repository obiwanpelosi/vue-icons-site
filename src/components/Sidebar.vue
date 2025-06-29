<template>
  <aside
    class="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 z-20 transform transition-transform duration-300 ease-in-out md:translate-x-0"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- Mobile Close Button -->
    <div class="flex items-center justify-between mb-6 md:hidden">
      <div class="text-2xl font-bold text-green-600 dark:text-green-400">
        Vue Icons
      </div>
      <button
        @click="$emit('close-sidebar')"
        class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
        title="Close sidebar"
      >
        <CgClose class="w-6 h-6" />
      </button>
    </div>

    <!-- Desktop Logo (Hidden on Mobile) -->
    <div
      class="hidden md:block text-2xl font-bold text-green-600 dark:text-green-400 mb-8"
    >
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
        <FiSearch
          class="absolute left-3 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-500"
        />
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
        @click="$emit('close-sidebar')"
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
          @click="$emit('close-sidebar')"
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
        <DiGithub class="w-4 h-4" />
        obiwanpelosi
      </a>
    </div>
  </aside>

  <!-- Mobile Overlay -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
    @click="$emit('close-sidebar')"
  ></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CgClose } from "vue-icons-lib/cg";
import { FiSearch } from "vue-icons-lib/fi";
import { useRouter } from "vue-router";
import { DiGithub } from "vue-icons-lib/di";

defineProps<{
  isOpen: boolean;
}>();

defineEmits(["close-sidebar"]);

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
