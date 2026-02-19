<script setup>
import { computed, ref } from 'vue';
import IconTablerDeviceFloppy from '~icons/tabler/device-floppy';
import IconTablerMoon from '~icons/tabler/moon';
import IconTablerSun from '~icons/tabler/sun';
import { currencies } from '~/common/utils/constants.js';
import { usePreferencesStore } from '~/stores/preferences.js';
import { useThemeStore } from '~/stores/theme.js';

const themeStore = useThemeStore();
const preferencesStore = usePreferencesStore();

const currencyOptions = computed(() =>
  Object.values(currencies).map(c => ({ code: c.code, name: c.name })),
);

const dateFormatOptions = [
  { code: 'MM/DD/YYYY', name: 'MM/DD/YYYY' },
  { code: 'DD/MM/YYYY', name: 'DD/MM/YYYY' },
  { code: 'YYYY-MM-DD', name: 'YYYY-MM-DD' },
  { code: 'DD-MM-YYYY', name: 'DD-MM-YYYY' },
];

const selectedCurrency = ref(preferencesStore.preferences.currency);
const selectedDateFormat = ref(preferencesStore.preferences.dateFormat);
const notificationsEnabled = ref(preferencesStore.preferences.notifications);

function saveSettings() {
  preferencesStore.updatePreferences({
    currency: selectedCurrency.value,
    dateFormat: selectedDateFormat.value,
    notifications: notificationsEnabled.value,
  });
}
</script>

<template>
  <div class="card p-6">
    <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
      Preferences
    </h2>

    <div class="space-y-6">
      <!-- Theme -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">
            Theme
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Choose between light and dark mode
          </p>
        </div>
        <div class="flex gap-2 shrink-0">
          <PButton
            type="button"
            class="flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors"
            :class="themeStore.theme === 'light'
              ? 'border-2 border-green-500 text-green-600 dark:text-green-400 bg-white dark:bg-gray-800'
              : 'border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 hover:border-gray-400'"
            @click="themeStore.setTheme('light')"
          >
            <IconTablerSun class="size-5" />
            Light
          </PButton>
          <PButton
            type="button"
            class="flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors"
            :class="themeStore.theme === 'dark'
              ? 'border-2 border-green-500 text-green-600 dark:text-green-400 bg-white dark:bg-gray-800'
              : 'border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 hover:border-gray-400'"
            @click="themeStore.setTheme('dark')"
          >
            <IconTablerMoon class="size-5" />
            Dark
          </PButton>
        </div>
      </div>

      <!-- Currency -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">
            Currency
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Select your preferred currency
          </p>
        </div>
        <PSelect
          v-model="selectedCurrency"
          :options="currencyOptions"
          option-label="code"
          option-value="code"
          placeholder="Select currency"
          class="w-full sm:w-40 min-w-32"
          size="small"
        />
      </div>

      <!-- Date Format -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">
            Date Format
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            How dates are displayed
          </p>
        </div>
        <PSelect
          v-model="selectedDateFormat"
          :options="dateFormatOptions"
          option-label="name"
          option-value="code"
          placeholder="Select format"
          class="w-full sm:w-40 min-w-32"
          size="small"
        />
      </div>

      <!-- Notifications -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">
            Notifications
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Receive budget alerts
          </p>
        </div>
        <PInputSwitch v-model="notificationsEnabled" />
      </div>
    </div>

    <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
      <PButton
        type="button"
        class="flex items-center gap-2 w-full sm:w-auto justify-center px-6 py-2.5 rounded-lg font-medium bg-green-500 hover:bg-green-600 text-white transition-colors"
        @click="saveSettings"
      >
        <IconTablerDeviceFloppy class="size-5" />
        Save Settings
      </PButton>
    </div>
  </div>
</template>
