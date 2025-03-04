<template>
  <div class="quadrilateral" :style="{ width: props.width, height: props.height, backgroundColor: props.backgroundColor }"></div>
</template>

<script setup>
const props = defineProps({
  backgroundColor: {
    type: String,
    default: '#ACDE45'
  },
  width: {
    type: String,
    default: '8px'
  },
  height: {
    type: String,
    default: '6px'
  }
});
</script>

<style scoped lang="scss">
.quadrilateral {
  transform: skew(40deg, 0);
}
</style>
