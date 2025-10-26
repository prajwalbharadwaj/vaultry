<script setup>
import { useCommonImports } from '~/common/composables/common-imports.composable.js';

const { route } = useCommonImports();
</script>

<template>
  <section class="grid grid-cols-1 gap-0 lg:grid-cols-12 min-h-screen">
    <div class="col-span-7 grid place-content-center">
      <RouterView />
    </div>
    <div class="col-span-5">
      <img v-if="route.name === 'login'" src="../assets/images/login.jpg" alt="" class="h-full object-cover">
      <img v-else-if="route.name === 'register'" src="../assets/images/register.jpg" alt="" class="h-full object-cover">
      <img v-else-if="route.name === 'verification'" src="../assets/images/two-step-verification.jpg" alt="" class="h-full object-cover">
    </div>
  </section>
</template>
