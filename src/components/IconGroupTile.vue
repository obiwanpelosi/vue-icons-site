<template>
  <router-link
    :to="`/icons/${path}`"
    class="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-green-100 dark:hover:border-green-800"
  >
    <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
      {{ name }}
    </h3>
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-500 dark:text-gray-400"
        >{{ count }} icons</span
      >
      <span class="text-green-600 dark:text-green-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  path: string;
  count: number;
}>();
</script>
