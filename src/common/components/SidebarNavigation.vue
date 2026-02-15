<script setup>
import IconTablerCalendarEvent from '~icons/tabler/calendar-event';
import IconTablerChartBar from '~icons/tabler/chart-bar';
import IconTablerCurrencyDollar from '~icons/tabler/currency-dollar';
import IconTablerHome from '~icons/tabler/home';
import IconTablerMoon from '~icons/tabler/moon';
import IconTablerPigMoney from '~icons/tabler/pig-money';
import IconTablerSettings from '~icons/tabler/settings';
import IconTablerSun from '~icons/tabler/sun';
import IconTablerTargetArrow from '~icons/tabler/target-arrow';
import IconTablerTransfer from '~icons/tabler/transfer';
import { useCommonImports } from '~/common/composables/common-imports.composable.js';
import { useThemeStore } from '~/stores/theme.js';

defineProps({
  isMiniSidebar: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['toggleMiniSidebar']);
const themeStore = useThemeStore();
const { route, router } = useCommonImports();
const navigation = [
  { name: 'Dashboard', to: 'dashboard', icon: IconTablerHome },
  { name: 'Transactions', to: 'transactions', icon: IconTablerTransfer },
  { name: 'Stats', to: 'stats', icon: IconTablerChartBar },
  { name: 'Budget', to: 'budget', icon: IconTablerPigMoney },
  { name: 'Goals', to: 'goals', icon: IconTablerTargetArrow },
  { name: 'Loans', to: 'loans', icon: IconTablerCurrencyDollar },
  { name: 'Schedule', to: 'schedule', icon: IconTablerCalendarEvent },
  { name: 'Settings', to: 'settings', icon: IconTablerSettings },
];
</script>

<template>
  <div class="bg-white dark:bg-gray-900 px-4 flex flex-col min-h-full">
    <div class="text-2xl font-bold h-14 grid cursor-pointer place-content-center text-gray-900 dark:text-gray-100" @click="emit('toggleMiniSidebar', !isMiniSidebar)">
      {{ isMiniSidebar ? 'V' : 'Vaultry' }}
    </div>
    <nav class="flex flex-1 flex-col mt-2" aria-label="Sidebar">
      <ul role="list" class="-mx-2 space-y-1">
        <li v-for="item in navigation" :key="item.name" @click="router.push({ name: item.to })">
          <a
            v-tooltip="isMiniSidebar ? item.name : ''"
            class="group flex gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold cursor-pointer items-center"
            :class="[route.name === item.to ? 'bg-gray-50 dark:bg-gray-800 text-primary-600' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600', isMiniSidebar ? 'justify-center' : 'justify-start']"
          >
            <component :is="item.icon" class="shrink-0" />
            <p v-if="!isMiniSidebar">
              {{ item.name }}
            </p>
          </a>
        </li>
      </ul>
    </nav>
    <div class="mt-auto py-4 border-t border-gray-200 dark:border-gray-700">
      <button
        type="button"
        class="flex items-center gap-2 w-full rounded-md p-2 pl-3 text-sm font-semibold cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        :class="isMiniSidebar ? 'justify-center' : 'justify-start'"
        @click="themeStore.toggleTheme()"
      >
        <IconTablerSun v-if="themeStore.theme === 'dark'" class="size-5 shrink-0" />
        <IconTablerMoon v-else class="size-5 shrink-0" />
        <span v-if="!isMiniSidebar">{{ themeStore.theme === 'dark' ? 'Light' : 'Dark' }} mode</span>
      </button>
    </div>
  </div>
</template>
