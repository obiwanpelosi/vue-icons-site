<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
      Icon Collections
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <IconGroupTile
        v-for="group in iconGroups"
        :key="group.path"
        :name="group.name"
        :path="group.path"
        :count="group.count"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import IconGroupTile from "../components/IconGroupTile.vue";
import { useIconCache } from "../composables/useIconCache";

const { iconGroups: iconGroupsData } = useIconCache();

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
      iconGroupsData[group.shortName as keyof typeof iconGroupsData] || {}
    ).length,
  }))
);
</script>
