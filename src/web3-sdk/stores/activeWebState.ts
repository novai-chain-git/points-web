import type { ethers } from 'ethers';
import piniaPersistConfig from '@/config/piniaPersist.js';
import { defineStore, storeToRefs } from 'pinia';
import { shortenAddress } from '../utils/contract';
import { useUserStore } from '@/store/modules/user.js';
import { BASE_CHAIN_ID } from '../constants';
interface ActiveWebState {
  _account: string; // 钱包地址
	publicKey: string; // 公钥
  chainId: number; // 钱包链id
  connectorName?: string; // 钱包链接方式
  isKill?: boolean; // 是否断开链接
  addressData: string;
}
const chainId = BASE_CHAIN_ID;
/*
  1.判断地址栏是否有观察钱包参数 watch_a
  2.如果有就改变 store 的 viewAddress 地址
  3.如果没有就把 store 的 viewAddress 地址置为空
  4.需要做一个路由监听  在跳转的时候需要带上参数地址 以确保刷新是能用

*/
export const UNISAT = 'unisat';
export const OKX = 'okx';

export const MetaMask = 'MetaMask';
export const useActiveWebState = defineStore({
  id: 'web-activeWebState',
  state: (): ActiveWebState => ({
    _account: '',
		publicKey: '',
    chainId: BASE_CHAIN_ID,
    connectorName: UNISAT,
    isKill: false,
    addressData: ''
  }),

  getters: {
    account(): string {
      return this._account;
    },
    accountLower(): string {
      return this.account?.toLowerCase();
    },
    viewAddress(): string {
      return this._viewAddress;
    },
    shortAccount(): string {
			console.log('this.account：', this._account);
      return shortenAddress(this._account);
    },
  },
  // 等下  这个搞不得哦   我有地方在用 不影响你使用
  actions: {
    setAccount(account: string) {
      this._account = account;
    },
    setChainId(chainId: number) {
      this.chainId = chainId;
    },
    setConnectorName(connectorName: string) {
      this.connectorName = connectorName;
    },
    killConnect() {
      this.isKill = true;
      this._account = '';
    },
    setAddress(connector: any) {
      this.addressData = connector;
    }
  },
  persist: piniaPersistConfig('web-activeWebState', null)
});

export const useActiveWebStateRefs = () => storeToRefs(useActiveWebState());

