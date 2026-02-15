<script setup>
import IconTablerPig from '~icons/tabler/pig';
import IconTablerTrendingDown from '~icons/tabler/trending-down';
import IconTablerTrendingUp from '~icons/tabler/trending-up';
import { statusMap } from '~/common/utils/constants.js';
import { formatCurrency } from '~/common/utils/util.js';
import { useThemeStore } from '~/stores/theme.js';

const themeStore = useThemeStore();
const data = [
  {
    title: 'Balance',
    amount: '432568',
    lastMonth: '28940',
    type: 'balance',
    icon: IconTablerWallet,
  },
  {
    title: 'Total Savings',
    amount: '12700',
    lastMonth: '21230',
    type: 'savings',
    icon: IconTablerPig,
  },
  {
    title: 'Income',
    amount: '24560',
    lastMonth: '23890',
    type: 'income',
    icon: IconTablerTrendingUp,
  },
  {
    title: 'Expense',
    amount: '2530',
    lastMonth: '26340',
    type: 'expense',
    icon: IconTablerTrendingDown,
  },
];
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
    <div v-for="item in data" :key="item.title" class="card flex justify-between items-start">
      <div class="space-y-2">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
          {{ item.title }}
        </p>
        <p class="text-3xl font-bold" :style="{ color: themeStore.theme === 'dark' ? statusMap[item.type]?.dark_color : statusMap[item.type]?.color }">
          {{ formatCurrency(item.amount) }}
        </p>
        <p class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          Last month <span class="font-medium">{{ formatCurrency(item.lastMonth) }}</span>
        </p>
      </div>
      <div class="size-12 flex items-center justify-center rounded-xl" :style="{ backgroundColor: statusMap[item.type]?.backgroundColor }">
        <Component :is="item.icon" class="size-6" :style="{ color: statusMap[item.type]?.color }" />
      </div>
    </div>
  </div>
</template>
