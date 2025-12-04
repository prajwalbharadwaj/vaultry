<script setup>
import { useCommonImports } from '~/common/composables/common-imports.composable.js';
import AuthLayout from '~/layouts/Auth.layout.vue';
import DefaultLayout from '~/layouts/Default.layout.vue';

const { route } = useCommonImports();

const layouts = {
  auth: AuthLayout,
  default: DefaultLayout,
};

const layout = computed(() => {
  const layoutName = route?.meta?.layout || 'default';
  return layouts[layoutName] || layouts.default;
});
</script>

<template>
  <component :is="layout" />
</template>
