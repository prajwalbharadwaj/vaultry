<script setup>
import PageHeader from '~/common/components/PageHeader.vue';
import TransactionsFilters from '~/views/transactions/TransactionsFilters.vue';
import TransactionsTable from '~/views/transactions/TransactionsTable.vue';
</script>

<template>
  <div class="p-5 grid gap-5">
    <PageHeader title="Transactions" />
    <div class="card">
      <div class="card-header">
        Transaction History
      </div>
      <div class="grid gap-3">
        <TransactionsFilters />
        <TransactionsTable />
      </div>
    </div>
  </div>
</template>
