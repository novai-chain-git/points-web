<template>
  <div class="h20 px8 py7 bg-[#2A2A2A] inline-block">
    <div class="flex gap-2">
      <Quadrilateral v-for="i in progress" :key="i" />
      <Quadrilateral v-for="i in props.grids - progress" :key="i + progress" backgroundColor="rgba(255,255,255,0.09)" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import Quadrilateral from '@/components/Quadrilateral.vue';

const props = defineProps({
  grids: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 0
  },
  current: {
    type: Number,
    default: 0
  }
});

const progress = computed(() => {
  return Math.round((props.current / props.total) * props.grids);
});
</script>

<style scoped lang="scss"></style>
