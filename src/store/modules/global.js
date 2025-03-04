import { defineStore } from 'pinia';
import piniaPersistConfig from '@/config/piniaPersist';

export const useGlobalStore = defineStore({
  id: 'alphahome-global',
  // 修改默认值之后，需清除 localStorage 数据
  state: () => ({
    // element 组件大小
    assemblySize: 'default',
    // 当前系统语言
    language: null,
    isLogin: false
  }),
  getters: {},
  actions: {
    setGlobalState(...args) {
      this.$patch({ [args[0]]: args[1] });
    }
  },
  persist: piniaPersistConfig('alphahome-global')
});
