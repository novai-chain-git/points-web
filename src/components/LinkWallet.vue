<template>
  <PopUps append-to-body v-model="commonStore.isShowLinkWalletDialog" title="Connect Wallet">
    <div @click="connectUniSat" class="LinkWallet cursor-pointer border-1px border-solid border-[#E2DEDE] font-bold txet-14 text-white px-20 mt-20 h-54 fyc bg-[rgba(79,115,163,0.04)] bdr-10">
      <el-image class="w-26 h-26 bdr-26" :src="unisatIcon" fit="cover" />
      <span class="ml-10">UniSat Wallet</span>
    </div>
    <div @click="connectOkx" class="LinkWallet cursor-pointer border-1px border-solid border-[#E2DEDE] font-bold txet-14 text-white px-20 mt-20 h-54 fyc bg-[rgba(79,115,163,0.04)] bdr-10">
      <el-image class="w-26 h-26 bdr-26" :src="okxIcon" fit="cover" />
      <span class="ml-10">OKX Wallet</span>
    </div>
  </PopUps>
</template>

<script setup>
import PopUps from '@/components/PopUps.vue';
import unisatIcon from '@/assets/svg/unisat.svg';
import okxIcon from '@/assets/svg/okx.svg';
import { ElMessage } from 'element-plus';
import { ElNotification } from 'element-plus';
import { useActiveWebState, UNISAT, OKX } from '@/web3-sdk';
import { memberUserBindEvmAddressApi } from '@/api/index.js';
const { setAccount, setConnectorName } = useActiveWebState();
const userStore = useUserStore();
const okxMethodsKey = import.meta.env.VITE_APP_NODE_ENV === 'development' ? 'bitcoinTestnet' : 'bitcoin';
const commonStore = useCommonStore();

const connectUniSat = async () => {
  if (typeof window.unisat === 'undefined') {
    ElNotification({
      type: 'warning',
      title: 'UniSat Wallet not installed',
      message: 'Please click here to visit the product page. After installing the extension, please refresh the page.',
      onClick: () => {
        window.open('https://unisat.io/download', '_blank');
      }
    });
    return;
  }
  try {
    const [address] = await unisat.requestAccounts();
    // setAccount(address);
    // setConnectorName(UNISAT);
    // commonStore.isShowLinkWalletDialog = false;
    // userStore.memberAuthLoginApi(address);

    await memberUserBindEvmAddressApi({
      evmAddress: address
    });
    commonStore.isShowLinkWalletDialog = false;
  } catch (error) {
    console.error('error：', error);
  }
};
const connectOkx = async () => {
  if (typeof window.okxwallet === 'undefined') {
    ElNotification({
      type: 'warning',
      title: 'OKX Wallet not installed',
      message: 'Please click here to visit the product page. After installing the extension, please refresh the page',
      onClick: () => {
        window.open('https://www.okx.com/web3', '_blank');
      }
    });
    return;
    console.error('error：', error);
  }
  try {
    const { address } = await window.okxwallet[okxMethodsKey].connect();
    // console.log('res：', address);
    // setAccount(address);
    // setConnectorName(OKX);
    // commonStore.isShowLinkWalletDialog = false;
    // userStore.memberAuthLoginApi(address);
    await memberUserBindEvmAddressApi({
      evmAddress: address
    });
    commonStore.isShowLinkWalletDialog = false;
  } catch (error) {
    console.error('error：', error);
  }
};
</script>

<style scoped>
.LinkWallet:active {
  border: 1px solid #00c9a6;
}
</style>
