<template>
  <div class="p-8">
    <!-- Installation Section -->
    <div
      class="mb-12 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-green-200 dark:border-gray-600"
    >
      <div class="text-center mb-6">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Vue Icons Library
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
          The React Icons equivalent for Vue developers. Tree-shakeable,
          TypeScript-ready, and lightweight.
        </p>
      </div>

      <!-- Installation Commands -->
      <div class="space-y-4">
        <div class="text-center">
          <h3
            class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide"
          >
            Install with your preferred package manager
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <!-- npm -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="text-red-500 font-bold text-sm">npm</span>
                <code
                  class="text-sm text-gray-700 dark:text-gray-300 font-mono"
                >
                  install vue-icons-lib
                </code>
              </div>
              <button
                @click="copyToClipboard('npm install vue-icons-lib')"
                class="text-gray-400 hover:text-green-600 transition-colors"
                :title="copyStatus === 'npm' ? 'Copied!' : 'Copy command'"
              >
                <FiClipboard />
              </button>
            </div>
          </div>

          <!-- yarn -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="text-blue-500 font-bold text-sm">yarn</span>
                <code
                  class="text-sm text-gray-700 dark:text-gray-300 font-mono"
                >
                  add vue-icons-lib
                </code>
              </div>
              <button
                @click="copyToClipboard('yarn add vue-icons-lib')"
                class="text-gray-400 hover:text-green-600 transition-colors"
                :title="copyStatus === 'yarn' ? 'Copied!' : 'Copy command'"
              >
                <FiClipboard />
              </button>
            </div>
          </div>

          <!-- pnpm -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="text-orange-500 font-bold text-sm">pnpm</span>
                <code
                  class="text-sm text-gray-700 dark:text-gray-300 font-mono"
                >
                  add vue-icons-lib
                </code>
              </div>
              <button
                @click="copyToClipboard('pnpm add vue-icons-lib')"
                class="text-gray-400 hover:text-green-600 transition-colors"
                :title="copyStatus === 'pnpm' ? 'Copied!' : 'Copy command'"
              >
                <FiClipboard />
              </button>
            </div>
          </div>
        </div>

        <!-- Quick Start -->
        <div
          class="mt-6 bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
        >
          <h4
            class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Quick Start
          </h4>
          <div class="bg-gray-50 dark:bg-gray-900 rounded p-3">
            <code class="text-xs text-gray-700 dark:text-gray-300 font-mono">
              &lt;script setup&gt;<br />
              &nbsp;&nbsp;import { FiHeart } from "vue-icons-lib/fi";<br />
              &lt;/script&gt;<br /><br />
              &lt;template&gt;<br />
              &nbsp;&nbsp;&lt;FiHeart /&gt;<br />
              &lt;/template&gt;
            </code>
          </div>
        </div>
      </div>
    </div>

    <!-- Package Links Section -->
    <div
      class="mb-12 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-600 shadow-sm"
    >
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Get Started
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          View the package details, documentation, and community resources
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- NPM Package -->
        <a
          href="https://www.npmjs.com/package/vue-icons-lib"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center space-x-3 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 transition-all duration-200 group"
        >
          <DiNpm class="w-8 h-8 text-red-500" />
          <div class="text-left">
            <div
              class="font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400"
            >
              NPM Package
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              View on npmjs.com
            </div>
          </div>
          <CgArrowTopRightR
            class="w-4 h-4 text-gray-400 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors"
          />
        </a>

        <!-- GitHub Repository -->
        <a
          href="https://github.com/obiwanpelosi/vue-icons-package"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center space-x-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-lg p-4 transition-all duration-200 group"
        >
          <DiGithub class="w-8 h-8 text-gray-900 dark:text-white" />
          <div class="text-left">
            <div
              class="font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300"
            >
              GitHub
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              View source code
            </div>
          </div>
          <CgArrowTopRightR
            class="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors"
          />
        </a>

        <!-- Documentation -->
      </div>
    </div>

    <!-- Icon Collections Section -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Icon Collections
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <IconGroupTile
        v-for="group in iconGroups"
        :key="group.path"
        :name="group.name"
        :path="group.path"
        :count="group.count"
      />
    </div>

    <!-- Notification Toast -->
    <NotificationToast
      :show="showNotification"
      :message="notificationMessage"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import IconGroupTile from "../components/IconGroupTile.vue";
import NotificationToast from "../components/NotificationToast.vue";
import { useIconCache } from "../composables/useIconCache";
import { FiClipboard } from "vue-icons-lib/fi";
import { DiNpm, DiGithub } from "vue-icons-lib/di";
import { CgArrowTopRightR } from "vue-icons-lib/cg";
const { iconGroups: iconGroupsData } = useIconCache();
const copyStatus = ref<string>("");
const showNotification = ref(false);
const notificationMessage = ref("");

const groupConfig = [
  { name: "Ant Icons", path: "ant-icons", shortName: "ai" },
  { name: "Box Icons", path: "box-icons", shortName: "bx" },
  { name: "Circum Icons", path: "circum-icons", shortName: "ci" },
  { name: "CSS.GG Icons", path: "css-gg-icons", shortName: "cg" },
  { name: "Dev Icons", path: "dev-icons", shortName: "di" },
  { name: "Feather Icons", path: "feather-icons", shortName: "fi" },
];

const iconGroups = computed(() =>
  groupConfig.map((group) => ({
    ...group,
    count: Object.keys(
      iconGroupsData.value[
        group.shortName as keyof typeof iconGroupsData.value
      ] || {}
    ).length,
  }))
);

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.value = text.includes("npm")
      ? "npm"
      : text.includes("yarn")
      ? "yarn"
      : "pnpm";

    // Show notification
    showNotification.value = true;
    notificationMessage.value = "Installation command copied!";

    setTimeout(() => {
      copyStatus.value = "";
      showNotification.value = false;
      notificationMessage.value = "";
    }, 2000);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};
</script>
