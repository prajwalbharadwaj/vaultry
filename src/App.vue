<script setup>
import { useCommonImports } from '~/common/composables/common-imports.composable.js';
import AuthLayout from '~/layouts/Auth.layout.vue';

import DefaultLayout from '~/layouts/Default.layout.vue';

const { route } = useCommonImports();

const layout = computed(() => {
  if (route?.meta?.layout === 'auth')
    return AuthLayout;
  else
    return DefaultLayout;
});
</script>

<template>
  <component :is="layout" />
</template>
