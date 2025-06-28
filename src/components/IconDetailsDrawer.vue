<template>
  <!-- Overlay with fade transition -->
  <transition name="fade">
    <div
      v-if="open"
      class="fixed inset-0 bg-black bg-opacity-30 z-40"
      @click="$emit('close')"
    ></div>
  </transition>

  <!-- Drawer with slide transition -->
  <transition name="slide">
    <aside
      v-if="open"
      class="fixed right-0 top-0 w-full max-w-md h-full bg-white dark:bg-gray-900 shadow-xl p-8 overflow-y-auto z-50 flex flex-col"
    >
      <button
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white"
        @click="$emit('close')"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div class="flex-1 flex flex-col items-center">
        <div class="mb-6">
          <component
            :is="icon.component"
            :style="{ color: selectedColor, width: '120px', height: '120px' }"
          />
        </div>
        <div class="flex flex-wrap gap-2 mb-6 justify-center">
          <button
            v-for="color in colors"
            :key="color"
            :style="{ background: color }"
            class="w-7 h-7 rounded-full border-2 border-white shadow cursor-pointer"
            :class="{ 'ring-2 ring-green-500': selectedColor === color }"
            @click="selectedColor = color"
          ></button>
        </div>
        <div class="mb-4 text-center">
          <div class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ icon.name }}
          </div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Group: <span class="font-mono">{{ icon.group }}</span>
          </div>
        </div>
        <div class="mb-4 w-full">
          <div class="text-xs text-gray-400 mb-1">Import</div>
          <div
            class="bg-gray-100 dark:bg-gray-800 rounded px-3 py-2 font-mono text-xs text-gray-700 dark:text-gray-200 select-all flex items-center justify-between"
          >
            <span
              >import { {{ icon.name }} } from 'vue-icons-lib/{{
                icon.group
              }}'</span
            >
            <button
              @click="
                copyImport(
                  `import { ${props.icon.name} } from 'vue-icons-lib/${props.icon.group}'`
                )
              "
              class="ml-2 text-gray-400 hover:text-green-600"
            >
              <FiClipboard />
            </button>
          </div>
          <div
            class="mt-4 bg-gray-100 dark:bg-gray-800 rounded px-3 py-2 font-mono text-xs text-gray-700 dark:text-gray-200 select-all flex items-center justify-between"
          >
            <span><{{ icon.name }} /> </span>
            <button
              @click="copyImport(`<${props.icon.name} />`)"
              class="ml-2 text-gray-400 hover:text-green-600"
            >
              <FiClipboard />
            </button>
          </div>
        </div>
      </div>
    </aside>
  </transition>

  <!-- Notification Toast -->
  <NotificationToast :show="showNotification" :message="notificationText" />
</template>

<script setup lang="ts">
import { FiClipboard } from "vue-icons-lib/fi";
import { ref, watch } from "vue";
import NotificationToast from "./NotificationToast.vue";

const props = defineProps<{ open: boolean; icon: any }>();
const emit = defineEmits(["close"]);

const colors = [
  "#222",
  "#555",
  "#888",
  "#fff",
  "#FFD600",
  "#00E5FF",
  "#00C853",
  "#FF4081",
  "#FF1744",
  "#536DFE",
  "#FFEB3B",
  "#00B8D4",
  "#F50057",
  "#FF9100",
];
const selectedColor = ref("#222");
const showNotification = ref(false);
const notificationText = ref("");

watch(
  () => props.open,
  (val) => {
    if (val) {
      selectedColor.value = document.documentElement.classList.contains("dark")
        ? "#fff"
        : "#222";
    }
  }
);

function copyImport(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification.value = true;
    notificationText.value = "Copied to clipboard!";
    setTimeout(() => {
      showNotification.value = false;
      notificationText.value = "";
    }, 2000);
  });
}
</script>

<style scoped>
/* Fade transition for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Slide transition for drawer */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
