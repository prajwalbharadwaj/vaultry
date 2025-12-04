<script setup>
import Navbar from '~/common/components/Navbar.vue';

const state = reactive({
  isMiniSidebar: false,
});
</script>

<template>
  <div class="relative h-full min-h-screen">
    <Navbar :is-mini-sidebar="state.isMiniSidebar" @toggle-mini-sidebar="state.isMiniSidebar = $event" />
    <main class="w-full">
      <RouterView />
    </main>
  </div>
</template>
