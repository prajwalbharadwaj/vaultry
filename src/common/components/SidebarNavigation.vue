<script setup>
import IconTablerHome from '~icons/tabler/home';
import { useCommonImports } from '~/common/composables/common-imports.composable.js';

defineProps({
  isMiniSidebar: {
    type: Boolean,
    default: false,
  },
});
const { route } = useCommonImports();
const navigation = [
  { name: 'Dashboard', to: 'dashboard', icon: IconTablerHome },
  { name: 'Transactions', to: 'transactions', icon: IconTablerHome },
  { name: 'Stats', to: 'stats', icon: IconTablerHome },
  { name: 'Budget', to: 'budget', icon: IconTablerHome },
  { name: 'Goals', to: 'goals', icon: IconTablerHome },
  { name: 'Loans', to: 'loans', icon: IconTablerHome },
  { name: 'Schedule', to: 'schedule', icon: IconTablerHome },
  { name: 'Settings', to: 'settings', icon: IconTablerHome },
];
</script>

<template>
  <div class="bg-white px-4">
    <div class="text-2xl font-bold h-14 grid place-content-center">
      {{ isMiniSidebar ? 'V' : 'Vaultry' }}
    </div>
    <nav class="flex flex-1 flex-col mt-2" aria-label="Sidebar">
      <ul role="list" class="-mx-2 space-y-1">
        <li v-for="item in navigation" :key="item.name">
          <a
            class="group flex gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold cursor-pointer items-center"
            :class="[route.name === item.to ? 'bg-gray-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600']"
          >
            <component :is="item.icon" />
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
