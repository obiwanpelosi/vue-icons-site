import { ref, computed } from "vue";

// Import all icon groups statically
import * as aiIcons from "vue-icons-lib/ai";
import * as bxIcons from "vue-icons-lib/bx";
import * as cgIcons from "vue-icons-lib/cg";
import * as ciIcons from "vue-icons-lib/ci";
import * as diIcons from "vue-icons-lib/di";
import * as fiIcons from "vue-icons-lib/fi";

// Group all icons by category
const iconGroups = ref({
  ai: aiIcons,
  bx: bxIcons,
  cg: cgIcons,
  ci: ciIcons,
  di: diIcons,
  fi: fiIcons,
});

export function useIconCache() {
  const searchTerm = ref("");
  const selectedGroup = ref("all");

  // Get all available groups
  const availableGroups = computed(() => Object.keys(iconGroups.value));

  // Get filtered icons based on search term and selected group
  const filteredIcons = computed(() => {
    let icons: Array<{ name: string; component: any; group: string }> = [];

    // Collect icons from selected group(s)
    if (selectedGroup.value === "all") {
      Object.entries(iconGroups.value).forEach(([group, groupIcons]) => {
        Object.entries(groupIcons).forEach(([name, component]) => {
          icons.push({ name, component, group });
        });
      });
    } else {
      const groupIcons =
        iconGroups.value[selectedGroup.value as keyof typeof iconGroups.value];
      if (groupIcons) {
        Object.entries(groupIcons).forEach(([name, component]) => {
          icons.push({ name, component, group: selectedGroup.value });
        });
      }
    }

    // Filter by search term
    if (searchTerm.value) {
      const term = searchTerm.value.toLowerCase();
      icons = icons.filter(
        (icon) =>
          icon.name.toLowerCase().includes(term) ||
          icon.group.toLowerCase().includes(term)
      );
    }

    return icons;
  });

  // Get a specific icon by name and group
  const getIcon = (group: string, name: string) => {
    const groupIcons = iconGroups.value[group as keyof typeof iconGroups.value];
    return groupIcons ? groupIcons[name as keyof typeof groupIcons] : null;
  };

  // Clear cache function
  const clearCache = () => {
    // Reset search and filter state
    searchTerm.value = "";
    selectedGroup.value = "all";

    // Clear the icon groups cache
    iconGroups.value = {} as typeof iconGroups.value;
  };

  return {
    searchTerm,
    selectedGroup,
    availableGroups,
    filteredIcons,
    getIcon,
    iconGroups,
    clearCache,
  };
}
