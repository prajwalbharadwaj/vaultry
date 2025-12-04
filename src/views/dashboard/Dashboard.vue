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
    <PageHeader title="Dashboard" description="Welcome back! Here's your financial overview." />
    <DashboardTopCards />

    <div class="grid lg:grid-cols-12 gap-5">
      <DashboardBalanceTrends class="lg:col-span-9" />
      <DashboardMonthlyExpense class="lg:col-span-3" />
    </div>
    <div class="grid lg:grid-cols-12 gap-5">
      <DashboardUpcomingPayments class="lg:col-span-3" />
      <DashboardIncomeExpense class="lg:col-span-9" />
    </div>
    <DashboardTransactionHistory />
  </div>
</template>
