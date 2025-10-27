<script setup>
import { formatCurrency } from '~/common/utils/util.js';

const value = ref([
  { label: 'Apps', color: '#34d399', value: 16, amount: 100 },
  { label: 'Messages', color: '#fbbf24', value: 8, amount: 100 },
  { label: 'Media', color: '#60a5fa', value: 24, amount: 100 },
  { label: 'System', color: '#c084fc', value: 10, amount: 100 },
]);
</script>

<template>
  <div class="card">
    <div class="card-header">
      Monthly Expense
    </div>
    <div>
      <PMeterGroup :value="value">
        <template #label="{ value: labels }">
          <div class="space-y-0 max-h-[338px] overflow-y-auto">
            <div v-for="label of labels" :key="label.label" class="flex items-center justify-between py-3 border-b border-gray-200">
              <div class="flex items-center gap-2">
                <div class="size-3 rounded-full" :style="{ background: label.color }" />
                <span class="text-sm text-gray-500">{{ label.label }}</span>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-sm font-medium">{{ formatCurrency(label.amount) }}</span>
                <span class="text-sm text-gray-500 w-8">{{ label.value }}%</span>
              </div>
            </div>
          </div>
        </template>
      </PMeterGroup>
    </div>
  </div>
</template>
