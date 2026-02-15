<script setup>
import IconTablerMoon from '~icons/tabler/moon';
import IconTablerSun from '~icons/tabler/sun';
import { useCommonImports } from '~/common/composables/common-imports.composable.js';
import { useThemeStore } from '~/stores/theme.js';

const { route } = useCommonImports();
const themeStore = useThemeStore();
</script>

<template>
  <section class="grid grid-cols-1 gap-0 lg:grid-cols-12 min-h-screen relative">
    <div class="col-span-7 grid place-content-center">
      <button
        type="button"
        class="absolute top-4 right-4 p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
        @click="themeStore.toggleTheme()"
      >
        <IconTablerSun v-if="themeStore.theme === 'dark'" class="size-6" />
        <IconTablerMoon v-else class="size-6" />
      </button>
      <RouterView />
    </div>
    <div class="col-span-5">
      <img v-if="route.name === 'login'" src="../assets/images/login.jpg" alt="" class="h-full object-cover">
      <img v-else-if="route.name === 'register'" src="../assets/images/register.jpg" alt="" class="h-full object-cover">
      <img v-else-if="route.name === 'verification'" src="../assets/images/two-step-verification.jpg" alt="" class="h-full object-cover">
    </div>
  </section>
</template>
