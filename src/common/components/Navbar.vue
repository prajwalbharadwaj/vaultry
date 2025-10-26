<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div>
    <span @click="toggleDark()">change theme</span>
  </div>
</template>
