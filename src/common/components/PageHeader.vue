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
  <div className="animate-fade-in">
    <h1 className="text-3xl font-bold text-foreground">
      {{ title }}
    </h1>
    <p className="text-gray-500">
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
