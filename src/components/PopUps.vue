<template>
  <div>
    <el-dialog class="dialog-wrap" v-model="modelValue" :width="width" v-bind="$attrs" :show-close="false"
      :align-center="true">
      <template v-if="isHeader" #header="{ close }">
        <div class="fcc relative min-h25">
          <h4 class="m0" text="18"><slot name="title">{{ title }}</slot></h4>
          <div class="fcc cursor-pointer" position=" absolute top-0 right-0" @click="closeDialog">
            <el-icon size="24" color="#BFBFBF">
              <Close />
            </el-icon>
          </div>
        </div>
      </template>
      <div>
        <slot></slot>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>

/**
 * modelValue  是否显示弹窗
 * title 标题，不传不显示
 * isHeader 是否显示头部（标题，关闭按钮）
 * width 弹窗宽度
 * close 关闭弹窗方法
 */
const modelValue = defineModel({
  type: Boolean,
  default: false
});
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  isHeader: {
    type: Boolean,
    default: true
  },
  width: {
    type: Number,
    default: 360
  }
})
const closeDialog = () => {
  modelValue.value = false;
};

</script>

<style>
.dialog-wrap {
  padding: 30px 20px;
  border-radius: 10px;
  /* background: #171E21 url('@/assets/images/home/popupsbg.png') no-repeat; */
	.el-dialog__header{
		padding-bottom: 0;
	}
}
</style>
