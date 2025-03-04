<template>
  <el-drawer v-model="modelValue" direction="btt" :show-close="false" :with-header="false" size="auto" lock-scroll>
    <slot></slot>
    <el-button type="primary" class="mt20 w100% bg-to7 border-none! h50! bdr25! text-16!" @click="buy">Buy</el-button>
  </el-drawer>
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
