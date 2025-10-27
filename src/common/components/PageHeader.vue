<script setup>
defineProps({
  title: {
    type: String,
    default: 'Page Header',
  },
  breadcrumb: {
    type: String,
    default: 'Page Header',
  },
});

// const items = ref([
//   { label: 'Electronics' },
//   { label: 'Computer' },
//   { label: 'Accessories' },
//   { label: 'Keyboard' },
//   { label: 'Wireless' },
// ]);
</script>

<template>
  <div class="flex items-center justify-between">
    <h1 class="text-xl font-bold tracking-tight">
      {{ title }}
    </h1>
    <!-- <PBreadcrumb :model="items" /> -->
  </div>
</template>
