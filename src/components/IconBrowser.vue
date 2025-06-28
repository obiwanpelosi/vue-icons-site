<template>
  <div class="p-4">
    <input
      v-model="query"
      type="text"
      placeholder="Search icons..."
      class="border rounded px-3 py-2 w-full mb-4"
    />

    <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      <component
        v-for="icon in filteredIcons"
        :is="loadIcon(icon.name, icon.group)"
        :key="icon.name"
        class="text-3xl cursor-pointer"
        :title="icon.name"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineAsyncComponent } from "vue";
import Fuse from "fuse.js";
import iconsMeta from "../../../packages/icons-lib/src/metadata/icons.json";

const query = ref("");
const fuse = new Fuse(iconsMeta, {
  keys: ["name"],
  threshold: 0.3,
});

const filteredIcons = computed(() => {
  if (!query.value) return iconsMeta;
  return fuse.search(query.value).map((result) => result.item);
});

const iconCache = new Map<string, any>();
const CHUNK_SIZE = 50;

function loadIcon(name: string, group: string) {
  const key = `${group}/${name}`;
  if (iconCache.has(key)) {
    return iconCache.get(key);
  }

  const component = defineAsyncComponent(
    () => import(`icons-lib/icons/${group}/components/${name}.vue`)
  );
  iconCache.set(key, component);
  return component;
}
</script>

<style scoped>
input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #3b82f6;
}
</style>
