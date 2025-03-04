import { defineStore } from 'pinia';
import piniaPersistConfig from '@/config/piniaPersist';
import { memberAuthLoginApi } from '@/api/index.js';
import router from '@/router/index.js';

export const useUserStore = defineStore({
  id: 'web-user',
  state: () => ({
    token: '',
    refreshToken: '',
    userInfo: {
      userName: '',
      roleCode: '',
      token: ''
    }
  }),
  actions: {
    setUserState(...args) {
      this.$patch({ [args[0]]: args[1] });
    },
    async memberAuthLoginApi(address) {
      const { inviteCode } = useCommonStore();
      let res = await memberAuthLoginApi({ address, inviteCode });
      if (res && !res.hasErrors) {
        this.setToken(res.data);
      }
    },
    setToken(token) {
      this.token = token.accessToken;
      this.refreshToken = token.refreshToken;
    },
    logout() {
      this.userInfo = {};
      this.token = '';
      this.refreshToken = '';
      this.inviteCode = '';
    }
  },
  persist: piniaPersistConfig('web-user')
});
