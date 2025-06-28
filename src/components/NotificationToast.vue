<template>
  <transition name="toast">
    <div
      v-if="show"
      class="fixed top-4 left-1/2 transform -translate-x-1/2 z-[60] bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2"
    >
      <svg
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span class="text-sm font-medium">{{ message }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean;
  message: string;
}>();
</script>

<style scoped>
/* Toast notification transition */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
.toast-enter-to,
.toast-leave-from {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>
