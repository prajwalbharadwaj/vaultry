<script setup>
import { statusMap } from '~/common/utils/constants.js';
import { formatCurrency } from '~/common/utils/util.js';

const data = [
  {
    title: 'Balance',
    amount: '432568',
    lastMonth: '28940',
    type: 'balance',
  },
  {
    title: 'Total Period Change',
    amount: '245860',
    lastMonth: '21230',
  },
  {
    title: 'Income',
    amount: '24560',
    lastMonth: '23890',
    type: 'income',
  },
  {
    title: 'Expense',
    amount: '2530',
    lastMonth: '26340',
    type: 'expense',
  },
];
</script>

<template>
  <div class="grid md:grid-cols-4 gap-5">
    <div v-for="item in data" :key="item.title" class="card space-y-2">
      <p class="text-sm font-medium text-gray-500">
        {{ item.title }}
      </p>
      <p class="text-3xl font-bold" :style="{ color: statusMap[item.type]?.color }">
        {{ formatCurrency(item.amount) }}
      </p>
      <p class="flex items-center gap-2 text-sm text-gray-500">
        Last month <span class="font-medium">{{ formatCurrency(item.lastMonth) }}</span>
      </p>
    </div>
  </div>
</template>
