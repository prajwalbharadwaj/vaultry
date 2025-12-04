<script setup>
const props = defineProps({
  filters: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['update:filters']);

const filterDurations = ref([
  { name: 'All Transactions', value: 'all_transactions' },
  { name: 'Last 7 days', value: 'last_7_days' },
  { name: 'Last 30 days', value: 'last_30_days' },
  { name: 'Last 90 days', value: 'last_90_days' },
]);

const options = ref([
  { title: 'All', value: 'all' },
  { title: 'Income', value: 'income' },
  { title: 'Expense', value: 'expense' },
  { title: 'Transfer', value: 'transfer' },
]);

function updateFilters(key, value) {
  emit('update:filters', { ...props.filters, [key]: value });
}
</script>

<template>
  <div class="flex gap-4 justify-between">
    <div class="flex gap-4">
      <PInputText :model-value="filters.search" type="text" placeholder="Search..." class="w-64" size="small" @update:model-value="updateFilters('search', $event)" />
      <PSelect :model-value="filters.selectedType" :options="filterDurations" option-label="name" placeholder="Select duration" class="w-full md:w-48" size="small" @update:model-value="updateFilters('selectedType', $event)">
        <template #option="{ option }">
          <div class="flex items-center text-sm">
            {{ option?.name }}
          </div>
        </template>
      </PSelect>
    </div>
    <PSelectButton :model-value="filters.filterType" option-label="title" data-key="value" :options="options" size="small" @update:model-value="updateFilters('filterType', $event)" />
  </div>
</template>
