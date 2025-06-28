<template>
  <div class="p-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {{ groupName }}
      </h1>
      <p class="text-gray-500 dark:text-gray-400">
        {{ filteredIcons.length }} icons
      </p>
    </div>

    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search icons..."
      class="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-full mb-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
    />

    <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      <div
        v-for="icon in filteredIcons"
        :key="`${icon.group}-${icon.name}`"
        class="icon-wrapper aspect-square flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-2 cursor-pointer group border border-gray-200 dark:border-gray-700"
        @click="openDrawer(icon)"
      >
        <component
          :is="icon.component"
          class="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors"
          :title="icon.name"
        />
        <p
          class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors truncate w-full text-center mt-2"
        >
          {{ icon.name }}
        </p>
      </div>
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
import { computed, watch, ref } from "vue";
import { useRoute } from "vue-router";
import { useIconCache } from "../composables/useIconCache";
import IconDetailsDrawer from "../components/IconDetailsDrawer.vue";

const route = useRoute();
const { searchTerm, selectedGroup, filteredIcons, clearCache } = useIconCache();

// Drawer state
const drawerOpen = ref(false);
const selectedIcon = ref<any | null>(null);

function openDrawer(icon: any) {
  selectedIcon.value = icon;
  drawerOpen.value = true;
}

const groupPath = computed(() => route.params.group as string);
const groupName = computed(() => {
  const name = groupPath.value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return name;
});

// Map route group to icon group short name
const groupMapping: Record<string, string> = {
  "ant-icons": "ai",
  "box-icons": "bx",
  "circum-icons": "ci",
  "css-gg-icons": "cg",
  "dev-icons": "di",
  "feather-icons": "fi",
  "bootstrap-icons": "bs",
};

// Update selected group when route changes
watch(
  groupPath,
  (newGroup) => {
    selectedGroup.value = groupMapping[newGroup] || "all";
  },
  { immediate: true }
);
</script>
