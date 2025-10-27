<script setup>
import { formatCurrency } from '~/common/utils/util.js';

const data = [
  {
    title: 'Balance',
    amount: '432568',
    lastMonth: '28940',
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
  },
  {
    title: 'Expense',
    amount: '2530',
    lastMonth: '26340',
  },
];
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="item in data" :key="item.title" class="card space-y-2">
      <p class="text-sm font-medium text-gray-500">
        {{ item.title }}
      </p>
      <p class="text-3xl font-bold">
        {{ formatCurrency(item.amount) }}
      </p>
      <p class="flex items-center gap-2 text-sm text-gray-500">
        Last month <span class="font-medium">{{ formatCurrency(item.lastMonth) }}</span>
      </p>
    </div>
  </div>
</template>
