<template>
  <div class="p-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Search Results
      </h1>
      <p class="text-gray-500 dark:text-gray-400">
        {{ filteredIcons.length }} icons found for "{{ query }}"
      </p>
    </div>

    <!-- Search Input -->
    <!-- <div class="mb-8">
      <div class="relative max-w-md">
        <input
          v-model="searchTerm"
          @keyup="updateSearch"
          type="text"
          placeholder="Search all icons..."
          class="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
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
    </div> -->

    <!-- Results -->
    <div
      v-if="filteredIcons.length > 0"
      class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-3"
    >
      <div
        v-for="icon in filteredIcons"
        :key="`${icon.group}-${icon.name}`"
        class="icon-wrapper aspect-square flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-1 cursor-pointer group border border-gray-200 dark:border-gray-700"
        @click="openDrawer(icon)"
      >
        <component
          :is="icon.component"
          class="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors"
          :title="icon.name"
        />
        <p
          class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors truncate w-full text-center mt-1"
        >
          {{ icon.name }}
        </p>
        <p
          class="text-xs text-gray-400 dark:text-gray-500 truncate w-full text-center"
        >
          {{ icon.group.toUpperCase() }}
        </p>
      </div>
    </div>

    <!-- No Results -->
    <div v-else-if="query" class="text-center py-12">
      <div class="text-gray-400 dark:text-gray-500 mb-4">
        <FiSearch class="mx-auto h-12 w-12" />
      </div>
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
        No icons found
      </h3>
      <p class="text-gray-500 dark:text-gray-400">
        Try searching with different keywords
      </p>
    </div>

    <!-- Icon Details Drawer -->
    <IconDetailsDrawer
      :open="drawerOpen"
      :icon="selectedIcon"
      @close="drawerOpen = false"
      v-if="selectedIcon"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useIconCache } from "../composables/useIconCache";
import IconDetailsDrawer from "../components/IconDetailsDrawer.vue";
import { FiSearch } from "vue-icons-lib/fi";

const route = useRoute();
const router = useRouter();
const { filteredIcons: allIcons } = useIconCache();

const searchTerm = ref("");
const query = computed(() => (route.query.q as string) || "");

// Drawer state
const drawerOpen = ref(false);
const selectedIcon = ref<any | null>(null);

function openDrawer(icon: any) {
  selectedIcon.value = icon;
  drawerOpen.value = true;
}

// Filter icons based on search query
const filteredIcons = computed(() => {
  if (!query.value) return [];
  const searchQuery = query.value.toLowerCase();
  return allIcons.value.filter(
    (icon) =>
      icon.name.toLowerCase().includes(searchQuery) ||
      icon.group.toLowerCase().includes(searchQuery)
  );
});

const updateSearch = () => {
  if (searchTerm.value.trim().length >= 3) {
    router.push(`/search?q=${encodeURIComponent(searchTerm.value.trim())}`);
  }
};

// Update search term when route query changes
watch(query, (newQuery) => {
  searchTerm.value = newQuery;
});

// Initialize search term from route
onMounted(() => {
  searchTerm.value = query.value;
});
</script>
