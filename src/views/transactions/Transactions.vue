<script setup>
import PageHeader from '~/common/components/PageHeader.vue';
import NewTransactions from '~/views/transactions/NewTransactions.vue';
import TransactionsFilters from '~/views/transactions/TransactionsFilters.vue';
import TransactionsTable from '~/views/transactions/TransactionsTable.vue';

const transactions = ref([
  {
    id: '1000',
    code: 'Fri, 13 Sep 2025',
    name: 'Axis Bank',
    payment_mode: 'Cash',
    description: 'Groceries',
    category: 'Household',
    type: 'income',
    amount: 24,
  },
  {
    id: '1001',
    code: 'Fri, 3 Dec 2025',
    name: 'Axis Bank',
    payment_mode: 'Cash',
    description: 'Groceries',
    category: 'Household',
    type: 'expense',
    amount: 24,
  },
  {
    id: '1002',
    code: 'Fri, 13 Jun 2025',
    name: 'Axis Bank',
    payment_mode: 'Cash',
    description: 'Groceries',
    category: 'Household',
    type: 'transfer',
    amount: 24,
  },
]);

const filters = reactive({
  search: '',
  selectedType: { name: 'All Transactions', value: 'all_transactions' },
  filterType: { title: 'All', value: 'all' },
});

const filteredTransactions = computed(() => {
  let result = [...transactions.value];

  // Filter by type (income, expense, transfer)
  if (filters.filterType.value !== 'all') {
    result = result.filter(transaction => transaction.type === filters.filterType.value);
  }

  // Filter by search term
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    result = result.filter((transaction) => {
      return (
        transaction.name?.toLowerCase().includes(searchLower)
        || transaction.description?.toLowerCase().includes(searchLower)
        || transaction.category?.toLowerCase().includes(searchLower)
        || transaction.payment_mode?.toLowerCase().includes(searchLower)
        || transaction.code?.toLowerCase().includes(searchLower)
      );
    });
  }

  // Filter by duration (date range)
  if (filters.selectedType.value !== 'all_transactions') {
    const now = new Date();
    let daysToSubtract = 0;

    switch (filters.selectedType.value) {
      case 'last_7_days':
        daysToSubtract = 7;
        break;
      case 'last_30_days':
        daysToSubtract = 30;
        break;
      case 'last_90_days':
        daysToSubtract = 90;
        break;
    }

    if (daysToSubtract > 0) {
      const cutoffDate = new Date(now);
      cutoffDate.setDate(now.getDate() - daysToSubtract);

      result = result.filter((transaction) => {
        // Parse the date from transaction.code (e.g., 'Fri, 13 Jun 2025')
        const transactionDate = new Date(transaction.code);
        return transactionDate >= cutoffDate;
      });
    }
  }

  return result;
});
</script>

<template>
  <div class="p-5 grid gap-5">
    <PageHeader title="Transactions">
      <template #actions>
        <NewTransactions />
      </template>
    </PageHeader>
    <div class="card">
      <div class="card-header">
        Transaction History
      </div>
      <div class="grid gap-3">
        <TransactionsFilters :filters="filters" @update:filters="Object.assign(filters, $event)" />
        <TransactionsTable :transactions="filteredTransactions" />
      </div>
    </div>
  </div>
</template>
