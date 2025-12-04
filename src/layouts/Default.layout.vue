<script setup>
// import Navbar from '~/common/components/Navbar.vue';
import SidebarNavigation from '~/common/components/SidebarNavigation.vue';

const state = reactive({
  isMiniSidebar: true,
});
</script>

<template>
  <div class="relative h-full min-h-screen">
    <div class="flex">
      <SidebarNavigation
        :is-mini-sidebar="state.isMiniSidebar" class="fixed overflow-y-auto shrink-0 top-0 bottom-0 transition-all duration-300 ease-in-out"
        :class="state.isMiniSidebar ? 'w-20' : 'w-[220px]'"
      />
      <div class="flex-1 transition-all duration-300 ease-in-out" :class="state.isMiniSidebar ? 'ml-20' : 'ml-[220px]'">
        <!-- <Navbar :is-mini-sidebar="state.isMiniSidebar" @toggle-mini-sidebar="state.isMiniSidebar = $event" /> -->
        <RouterView />
      </div>
    </div>
  </div>
</template>
