<script setup>
import PageHeader from '~/common/components/PageHeader.vue';
import DashboardBalanceTrends from '~/views/dashboard/DashboardBalanceTrends.vue';
import DashboardIncomeExpense from '~/views/dashboard/DashboardIncomeExpense.vue';
import DashboardMonthlyExpense from '~/views/dashboard/DashboardMonthlyExpense.vue';
import DashboardTopCards from '~/views/dashboard/DashboardTopCards.vue';
import DashboardTransactionHistory from '~/views/dashboard/DashboardTransactionHistory.vue';
import DashboardUpcomingPayments from '~/views/dashboard/DashboardUpcomingPayments.vue';
</script>

<template>
  <div class="p-5 grid gap-5">
    <PageHeader title="Dashboard" />
    <DashboardTopCards />

    <div class="grid md:grid-cols-12 gap-5">
      <DashboardBalanceTrends class="md:col-span-9" />
      <DashboardMonthlyExpense class="md:col-span-3" />
    </div>
    <div class="grid md:grid-cols-12 gap-5">
      <DashboardUpcomingPayments class="md:col-span-3" />
      <DashboardIncomeExpense class="md:col-span-9" />
    </div>
    <DashboardTransactionHistory />
  </div>
</template>
