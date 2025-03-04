<template>
  <TempDialog v-model="modelValue" :width="564" :confirm="buy" :close-on-click-modal="false" :close-on-press-escape="false">
    <slot></slot>
  </TempDialog>
</template>

<script setup>
const modelValue = defineModel({
  type: Boolean,
  default: false
});
const props = defineProps({
  buy: {
    type: Function,
    default: () => {}
  },
  showPopup: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped lang="scss"></style>
