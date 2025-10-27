<script setup>
const props = defineProps({
  isMiniSidebar: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['toggleMiniSidebar']);
</script>

<template>
  <div class="bg-white h-14 w-full flex justify-between items-center px-5 sticky top-0 shadow z-1">
    <PButton icon="pi" severity="secondary" @click="emit('toggleMiniSidebar', !props.isMiniSidebar)">
      <IconTablerMenu2 />
    </PButton>
  </div>
</template>
