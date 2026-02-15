<script setup>
defineProps({
  title: {
    type: String,
    default: 'Page Header',
  },
  description: {
    type: String,
    default: '',
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
  <div class="animate-fade-in">
    <h1 class="text-3xl font-bold text-foreground dark:text-gray-100">
      {{ title }}
    </h1>
    <p class="text-gray-500 dark:text-gray-400">
      {{ description }}
    </p>
  </div>
  <!-- <div class="flex items-center justify-between">
    <h1 class="text-xl font-bold tracking-tight">
      {{ title }}
    </h1>
  </div> -->
  <!-- <PBreadcrumb :model="items" /> -->
</template>
