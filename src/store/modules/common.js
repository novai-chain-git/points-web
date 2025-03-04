import { defineStore } from 'pinia';

export const useCommonStore = defineStore({
  id: 'alphahome-common',
  state: () => ({
    loginVisible: false,
    registerVisible: false,
    inviteCode: '', // 邀请码
		isShowLinkWalletDialog:false,
    // NOVAI余额
    novaiBalance: 0
  }),
  actions: {
    setCommonState(...args) {
      this.$patch({ [args[0]]: args[1] });
    },
    setNovaiBalance(value) {
      this.novaiBalance = value;
    }
  },
	getters:{
	}
});
