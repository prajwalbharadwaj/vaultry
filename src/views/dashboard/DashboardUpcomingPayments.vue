<script setup>
import { statusMap } from '~/common/utils/constants.js';
import { formatCurrency } from '~/common/utils/util.js';

const data = [
  { title: 'Electricity', amount: '450.00', date: '5 january 2024', status: 'cancel' },
  { title: 'Water', amount: '450.00', date: '10 january 2024', status: 'paid' },
  { title: 'Internet', amount: '450.00', date: '11 january 2024', status: 'paid' },
  { title: 'TV', amount: '450.00', date: '15 january 2024', status: 'due' },
  { title: 'Phone', amount: '450.00', date: '25 january 2024', status: 'paid' },
  { title: 'Car', amount: '450.00', date: '27 january 2024', status: 'paid' },
];
</script>

<template>
  <div class="card">
    <div class="card-header">
      Upcoming Payments
    </div>
    <div class="grid gap-4 max-h-[384px] overflow-y-auto">
      <div v-for="value in data" :key="value.title" class="flex justify-between items-center gap-4">
        <div class="flex flex-col gap-0.5">
          <span class="font-medium">{{ value.title }}</span><span class="text-xs text-muted-foreground">{{ value.date }}</span>
        </div><div class="text-right gap-2">
          <div class="font-medium">
            {{ formatCurrency(value.amount) }}
          </div>
          <div
            class="inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 rounded-md font-normal"
            :style="{ color: statusMap[value.status]?.color, backgroundColor: statusMap[value.status]?.backgroundColor }"
          >
            {{ statusMap[value.status]?.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
