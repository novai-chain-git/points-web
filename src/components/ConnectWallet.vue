<template>
	<div class="fyc h100%">
		<!-- <el-dropdown v-if="shortAccount" trigger="hover" @command="accountMenu">
      <el-button class="bg-to7 border-none h34" type="primary">
        {{ shortAccount }}
        <el-icon>
          <ArrowDown />
        </el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="Disconnect">Disconnect</el-dropdown-item>
        </el-dropdown-menu>
      </template>
</el-dropdown> -->
		<!--    <el-button v-else class="bg-to7 border-none h34" @click="linkEvmWallet" :disabled="loading" :loading="loading" type="primary">-->
		<!--			Connect Wallet-->
		<!--		</el-button>-->
		<div v-if="shortAccount" class="h100% fyc h36 bg-to5 bdr8 p1">
			<!-- <div class="fyc bdr8 h34 bg-[#181a20] font-['OrbitronMedium'] px15" text="14 c9">
        <div class="fyc bdr12 h38" :class="{ 'bg-bg9': commonStore.novaiBalance }">
          <div class="px10 <md:hidden" text="16 c3" v-if="commonStore.novaiBalance">{{ commonStore.novaiBalance }} NOVAI</div>
          <el-button class="min-w110 h36 bdr-12 bg-bg10! text-18 px10 text-c9! mx1 <md:(px8) hovar" border="1 solid #222222 !important">
            {{ shortAccount }}
            <div v-html="iconDom" class="ml10 w16 h16"></div>
          </el-button>
        </div>
        <div class="dropdown_quit_box px20 fyc bg-bg10 h42 bdr10 cursor-pointer <md:(text-13 px10)" :class="[isShowQuit ? 'dropdown_quit' : 'dropdown_quits']" border="1 solid #222222" text="14 c9" @click="accountMenu('Disconnect')">
          <img src="@/assets/images/home/quit.png" alt="" class="h15 mr10" />
          <span>Disconnect</span>
        </div>
      </div> -->

			<div class="fyc bdr8 h33 bg-[#181a20] font-['OrbitronMedium'] px15" text="14 c9">
				<div class="<md:hidden" v-if="commonStore.novaiBalance">{{ commonStore.novaiBalance }} NOV</div>
				<div class="w0 h0 ml16 <md:(hidden)" border="5 solid transparent" border-t="#959698" border-b="none"
					v-if="commonStore.novaiBalance"></div>
				<div class="w1 h18 bg-[#959698] mx16 <md:(hidden)" v-if="commonStore.novaiBalance"></div>
				<div class="h100% fyc cursor-pointer relative" @mouseenter="isShowQuit = true" @mouseleave="isShowQuit = false">
					<div class="h100% fyc">
						<span class="line-height-17" border-b="1 solid #fff">{{ shortAccount }}</span>
						<div v-html="iconDom" class="ml10 w16 h16"></div>
					</div>
					<!-- <div class="dropdown_quit_box px16 fyc bg-[#ffffff] h40 bdr10 mt14 cursor-pointer <md:(text-13 px10)"
						:class="[isShowQuit ? 'dropdown_quit' : 'dropdown_quits']" text="14 [#000]"
						@click="accountMenu('Disconnect')">
						<img src="@/assets/images/home/quit.png" alt="" class="h15" />
						<p class="whitespace-nowrap ml4 mr8 text-16 text-[#333] font-['OrbitronMedium']">Disconnect</p>

					</div> -->
					<div class="bg-to5 dropdown_quit_box p-[1px] mt14 bdr10" :class="[isShowQuit ? 'dropdown_quit' : 'dropdown_quits']">
						<div class=" px16 fyc bg-[#181a20] h40 bdr10  cursor-pointer <md:(text-13 px10)"
							 text="14 [#ffffff]"
							@click="accountMenu('Disconnect')">
							<img src="@/assets/images/home/quits.png" alt="" class="h15" />
							<p class="whitespace-nowrap ml4 mr8 text-16 text-[#ffffff] font-['OrbitronMedium']">Disconnect</p>

						</div>

					</div>
				</div>
			</div>
		</div>
		<!-- <div v-else :type="plain" class="w20" @click="linkEvmWallet" :disabled="loading" :loading="loading" link>
      <img src="@/assets/svg/qianb.svg" class="w20" alt="" />
    </div> -->
		<img v-else @click="linkEvmWallet" src="@/assets/svg/qianb.svg" alt=""
			class="w20 h20 cursor-pointer <md:(w16 h16)" />
		<!--		<div class="i-icon:telegram"></div>-->
		<LinkWallet />
	</div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useCommonStore } from '@/store/modules/common.js';
import LinkWallet from '@/components/LinkWallet.vue';
import Jazzicon from 'jazzicon';

const isShowQuit = ref(false);
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const commonStore = useCommonStore();
const iconDom = ref('');

import { MetaMask, useActiveWebState, useActiveWebStateRefs, connectWallet,LinkWalletOKX, getActiveLibrary, Decimals, toReadableAmount, getRpcProviderByChain, BASE_CHAIN_ID } from '@/web3-sdk';
import { ElNotification } from 'element-plus';
import { memberUserBindEvmAddressApi } from '@/api/index.js';
const loading = ref(false);
const { killConnect, metaMaskLogin, setConnectorName, setAccount } = useActiveWebState();
const { shortAccount, account } = useActiveWebStateRefs();
const connectWalletHandle = async () => {
	commonStore.isShowLinkWalletDialog = true;
};

const linkEvmWallet = async () => {
	if (typeof window.okxwallet === 'undefined') {
		ElNotification({
			type: 'warning',
			title: 'Wallet not installed',
			message: 'Please click here to visit the product page. After installing the extension, please refresh the page',
			onClick: () => {
				window.open('https://www.okx.com/zh-hans/download', '_blank');
			}
		});
		return;
	}
	try {
		// await connectWallet();
		 await LinkWalletOKX()
		 userStore.memberAuthLoginApi(account.value);
		// console.log(account.value,'account.value')
		// userStore.memberAuthLoginApi(account.value);
		//
		// let [address] = await window.ethereum.request({
		// 	method: "eth_requestAccounts"
		// });
		//
		// setAccount(address);
		// setConnectorName(MetaMask);
		// commonStore.isShowLinkWalletDialog = false;
		// userStore.memberAuthLoginApi(address);
	} catch (error) {
		console.error('error：', error);
	}
};
const accountMenu = (val) => {
	switch (val) {
		case 'Disconnect':
			killConnect();
			userStore.logout();
			window.location.reload();


			break;

		default:
			break;
	}
};

watch(
	() => account.value,
	async (newAccount) => {
		if (newAccount) {
			const rpcProvider = getRpcProviderByChain(BASE_CHAIN_ID);
			const balance = await rpcProvider.getBalance(newAccount);
			console.log('Decimals.USDT[BASE_CHAIN_ID]', Decimals.USDT[BASE_CHAIN_ID]);
			const num = Number(toReadableAmount(balance, 18)).toFixed(4);
			commonStore.setNovaiBalance(num);
			iconDom.value = Jazzicon(16, parseInt(account.value.slice(2, 10), 16)).outerHTML;
		}
	},
	{
		immediate: true
	}
);
</script>
<style scoped lang="scss">
.dropdown_quit_box {
	position: absolute;
	top: 20px;
	left: 50%;
	transition: all 0.3s;
	transform: translateX(-50%) scale(1);
}

.dropdown_quit {
	transform: translateX(-50%) scale(1);
}

.dropdown_quits {
	transform: translateX(-50%) scale(0);
}

:deep(.el-button:hover) {
	border: 1px solid #222222 !important;
}

@media (max-width: 768px) {
	.dropdown_quit {
		transform: translateX(0) scale(1);
	}

	.dropdown_quits {
		transform: translateX(0) scale(0);
	}

	.dropdown_quit_box {
		position: absolute;
		top: 20px;
		left: 0;
		transition: all 0.3s;
	}
}
</style>
