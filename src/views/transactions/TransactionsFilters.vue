<script setup>
const state = reactive({
  search: '',
  selectedType: { name: 'All Transactions', value: 'all_transactions' },
  filterType: { title: 'All', value: 'all' },
});

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
</script>

<template>
  <div class="flex gap-4 justify-between">
    <div class="flex gap-4">
      <PInputText v-model="state.search" type="text" placeholder="Search..." class="w-64" size="small" />
      <PSelect v-model="state.selectedType" :options="filterDurations" option-label="name" placeholder="Select duration" class="w-full md:w-48" size="small">
        <template #option="{ option }">
          <div class="flex items-center text-sm">
            {{ option?.name }}
          </div>
        </template>
      </PSelect>
    </div>
    <PSelectButton v-model="state.filterType" option-label="title" data-key="value" :options="options" size="small" />
  </div>
</template>
