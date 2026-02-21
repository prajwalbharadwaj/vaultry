<script setup>
import { useRoute } from 'vue-router';
import PageHeader from '~/common/components/PageHeader.vue';

const route = useRoute();

const subNavItems = [
  { id: 'preferences', label: 'Preferences', name: 'settings-preferences' },
  { id: 'category', label: 'Category', name: 'settings-category' },
  // { id: 'account', label: 'Account', name: 'settings-account' },
  // { id: 'security', label: 'Security', name: 'settings-security' },
  // { id: 'integrations', label: 'Integrations', name: 'settings-integrations' },
];

function isActive(item) {
  return route.name === item.name;
}
</script>

<template>
  <div class="p-5 grid gap-5">
    <PageHeader title="Settings" />
    <div class="flex gap-8">
      <nav class="shrink-0 w-48 space-y-1" aria-label="Settings sub-navigation">
        <RouterLink
          v-for="item in subNavItems"
          :key="item.id"
          :to="{ name: item.name }"
          class="block rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          :class="isActive(item)
            ? 'bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-100'"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
      <div class="flex-1 min-w-0">
        <RouterView />
      </div>
    </div>
  </div>
</template>
