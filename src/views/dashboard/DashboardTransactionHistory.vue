<script setup>
import { statusMap } from '~/common/utils/constants.js';
import { formatCurrency } from '~/common/utils/util';

const products = ref([
  {
    id: '1000',
    code: 'Fri, 13 Jun 2025',
    name: 'Axis Bank',
    payment_mode: 'Cash',
    description: 'Groceries',
    category: 'Household',
    amount: 24,
    type: 'income',
  },
  {
    id: '1001',
    code: 'Fri, 13 Jun 2025',
    name: 'Axis Bank',
    payment_mode: 'Cash',
    description: 'Groceries',
    category: 'Household',
    amount: 24,
    type: 'expense',
  },
]);

const value = ref('Monthly');
const options = ref(['Monthly', 'Weekly', 'Today']);

const columns = [
  { field: 'code', header: 'Date' },
  { field: 'name', header: 'Account' },
  { field: 'category', header: 'Category' },
  { field: 'payment_mode', header: 'Payment Mode' },
  // { field: 'quantity', header: 'Note' },
  // { field: 'amount', header: 'Amount' },
  // { field: 'quantity', header: 'Description' },
];
</script>

<template>
  <div class="card">
    <div class="card-header">
      Monthly Expense
    </div>
    <PDataTable :value="products">
      <PColumn v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" />
      <PColumn header="Amount">
        <template #body="slotProps">
          <p :style="{ color: statusMap?.[slotProps.data?.type]?.color }">
            {{ formatCurrency(slotProps.data?.amount) }}
          </p>
        </template>
      </PColumn>
    </PDataTable>
  </div>
</template>
