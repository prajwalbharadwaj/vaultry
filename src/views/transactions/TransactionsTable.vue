<script setup>
import { statusMap } from '~/common/utils/constants.js';
import { formatCurrency } from '~/common/utils/util';

const props = defineProps({
  transactions: {
    type: Array,
    required: false,
    default: () => [],
  },
});

const columns = [
  { field: 'code', header: 'Date' },
  { field: 'type', header: 'Type' },
  { field: 'name', header: 'Account' },
  { field: 'category', header: 'Category' },
  { field: 'payment_mode', header: 'Payment Mode' },
  { field: 'amount', header: 'Amount' },
];
</script>

<template>
  <PDataTable :value="props.transactions" paginator :rows="10" size="small">
    <!-- <PColumn header="type" class="text-sm">
      <template #body="slotProps">
        <div class="flex items-center">
          <div>
            <IconTablerCircleArrowUpFilled v-if="slotProps.data?.type === 'expense'" class="size-6" :style="{ color: statusMap.expense.color }" />
            <IconTablerCircleArrowDownFilled v-else-if="slotProps.data?.type === 'income'" class="size-6" :style="{ color: statusMap.income.color }" />
            <IconTablerCircleArrowRightFilled v-else-if="slotProps.data?.type === 'transfer'" class="size-6" :style="{ color: statusMap.transfer.color }" />
          </div>
        </div>
      </template>
    </PColumn> -->
    <PColumn v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" class="text-sm">
      <template #body="{ data }">
        <div v-if="col.field === 'type'" class="flex items-center">
          <div>
            <IconTablerCircleArrowUpFilled v-if="data?.type === 'expense'" class="size-6" :style="{ color: statusMap.expense.color }" />
            <IconTablerCircleArrowDownFilled v-else-if="data?.type === 'income'" class="size-6" :style="{ color: statusMap.income.color }" />
            <IconTablerCircleArrowRightFilled v-else-if="data?.type === 'transfer'" class="size-6" :style="{ color: statusMap.transfer.color }" />
          </div>
        </div>
        <p v-else-if="col.field === 'amount'" :style="{ color: statusMap?.[data?.type]?.color }" class="font-medium">
          {{ formatCurrency(data?.amount) }}
        </p>
        <div v-else>
          {{ data?.[col.field] }}
        </div>
      </template>
    </PColumn>
    <!-- <PColumn header="Amount" class="text-sm">
      <template #body="slotProps">
        <p :style="{ color: statusMap?.[slotProps.data?.type]?.color }">
          {{ formatCurrency(slotProps.data?.amount) }}
        </p>
      </template>
    </PColumn> -->
  </PDataTable>
</template>
