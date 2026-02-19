<script setup>
import IconTablerFileSpreadsheet from '~icons/tabler/file-spreadsheet';
import IconTablerPlus from '~icons/tabler/plus';
import { usePreferencesStore } from '~/stores/preferences.js';

const preferencesStore = usePreferencesStore();
const emit = defineEmits(['close', 'saved']);

const state = reactive({
  visible: false,
  mode: 'form', // 'form' | 'import'
  form: {
    type: { title: 'Expense', value: 'expense' },
    date: '',
    amount: null,
    category: null,
    account: null,
    note: '',
    description: '',
  },
  excelFile: null,
});

const typeOptions = [
  { title: 'Income', value: 'income' },
  { title: 'Expense', value: 'expense' },
  { title: 'Transfer', value: 'transfer' },
];

const categoryOptions = [
  { name: 'Household', value: 'Household' },
  { name: 'Groceries', value: 'Groceries' },
  { name: 'Transport', value: 'Transport' },
  { name: 'Entertainment', value: 'Entertainment' },
  { name: 'Utilities', value: 'Utilities' },
  { name: 'Healthcare', value: 'Healthcare' },
  { name: 'Shopping', value: 'Shopping' },
  { name: 'Other', value: 'Other' },
];

const accountOptions = [
  { name: 'Axis Bank', value: 'Axis Bank' },
  { name: 'Cash', value: 'Cash' },
  { name: 'Credit Card', value: 'Credit Card' },
  { name: 'Savings', value: 'Savings' },
  { name: 'Other', value: 'Other' },
];

function resetForm() {
  state.form = {
    type: { title: 'Expense', value: 'expense' },
    date: new Date().toISOString().slice(0, 10),
    amount: null,
    category: null,
    account: null,
    note: '',
    description: '',
  };
  state.excelFile = null;
}

function openDialog() {
  state.visible = true;
  state.mode = 'form';
  resetForm();
}

function onFileChange(event) {
  const file = event.target.files?.[0];
  if (file && (file.name.endsWith('.xlsx') || file.name.endsWith('.xls'))) {
    state.excelFile = file;
  } else {
    state.excelFile = null;
  }
}

function handleImportExcel() {
  // TODO: Wire up Excel import logic (e.g. xlsx library to parse file)
  if (state.excelFile) {
    state.visible = false;
  }
}

function handleSubmitForm() {
  // TODO: Wire up form submit - emit to parent or call API
  emit('saved', { ...state.form });
  state.visible = false;
}
</script>

<template>
  <div>
    <PButton
      type="button"
      class="flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium bg-primary-600 hover:bg-primary-500 text-white transition-colors"
      @click="openDialog"
    >
      <IconTablerPlus class="size-4" />
      New Transaction
    </PButton>
    <PDialog
      v-model:visible="state.visible"
      modal
      header="New Transaction"
      :style="{ width: '32rem' }"
      :draggable="false"
      @hide="emit('close')"
    >
      <div class="space-y-6">
        <!-- Mode selector -->
        <div class="flex rounded-lg border border-gray-200 dark:border-gray-600 p-1">
          <button
            type="button"
            class="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors"
            :class="state.mode === 'form' ? 'bg-primary-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'"
            @click="state.mode = 'form'"
          >
            <IconTablerPlus class="size-4" />
            Add Manually
          </button>
          <button
            type="button"
            class="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors"
            :class="state.mode === 'import' ? 'bg-primary-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'"
            @click="state.mode = 'import'"
          >
            <IconTablerFileSpreadsheet class="size-4" />
            Import Excel
          </button>
        </div>

        <!-- Import Excel -->
        <div v-if="state.mode === 'import'" class="space-y-4">
          <label class="block">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Upload file (.xlsx, .xls)</span>
            <input
              type="file"
              accept=".xlsx,.xls"
              class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 dark:file:bg-primary-900/30 dark:file:text-primary-400"
              @change="onFileChange"
            >
          </label>
          <p v-if="state.excelFile" class="text-sm text-gray-600 dark:text-gray-400">
            Selected: {{ state.excelFile.name }}
          </p>
          <PButton
            type="button"
            label="Import"
            :disabled="!state.excelFile"
            @click="handleImportExcel"
          />
        </div>

        <!-- Add Form -->
        <form v-else class="space-y-4" @submit.prevent="handleSubmitForm">
          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Type</label>
            <PSelectButton
              v-model="state.form.type"
              :options="typeOptions"
              option-label="title"
              data-key="value"
              size="small"
              class="w-full"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Date</label>
            <input
              v-model="state.form.date"
              type="date"
              required
              class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
          </div>

          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Amount</label>
            <PInputNumber
              v-model="state.form.amount"
              mode="currency"
              :currency="preferencesStore.preferences.currency || 'USD'"
              locale="en-US"
              placeholder="0.00"
              class="w-full"
              size="small"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Category</label>
            <PSelect
              v-model="state.form.category"
              :options="categoryOptions"
              option-label="name"
              option-value="value"
              placeholder="Select category"
              class="w-full"
              size="small"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Account</label>
            <PSelect
              v-model="state.form.account"
              :options="accountOptions"
              option-label="name"
              option-value="value"
              placeholder="Select account"
              class="w-full"
              size="small"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Note</label>
            <PTextarea
              v-model="state.form.note"
              rows="2"
              placeholder="Optional note"
              class="w-full"
              size="small"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Description</label>
            <PTextarea
              v-model="state.form.description"
              rows="2"
              placeholder="Transaction description"
              class="w-full"
              size="small"
            />
          </div>

          <div class="flex justify-end gap-2 pt-2">
            <PButton type="button" label="Cancel" severity="secondary" @click="state.visible = false" />
            <PButton type="submit" label="Add Transaction" />
          </div>
        </form>
      </div>
    </PDialog>
  </div>
</template>
