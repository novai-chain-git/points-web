<template>
	<PopUps append-to-body v-model="isShowLinkWalletDialog" title="Connecting Telegrams">
		<div class="flex mt-20 justify-between">
			<div @click="connectUniSat" class="w150 text-center LinkWallet cursor-pointer border-1px border-solid border-[#E2DEDE] font-bold txet-14 text-white px-20 mt-20 h-54 fyc bg-[rgba(79,115,163,0.04)] bdr-10">

				<span class=" mx-auto">Joined</span>
			</div>
			<div @click="connectOkx" class="w150 LinkWallet cursor-pointer border-1px border-solid border-[#E2DEDE] font-bold txet-14 text-white px-20 mt-20 h-54 fyc bg-[rgba(79,115,163,0.04)] bdr-10">

				<span class=" mx-auto">Not joined</span>
			</div>
		</div>
	</PopUps>
</template>

<script setup>
import PopUps from '@/components/PopUps.vue';
import unisatIcon from '@/assets/svg/unisat.svg';
import okxIcon from '@/assets/svg/okx.svg';
import { ElMessage } from 'element-plus';
import { ElNotification } from 'element-plus';
import { ref } from 'vue'
const emit = defineEmits(['onSubmit'])
const isShowLinkWalletDialog = ref(false)

const setIisShowLinkWalletDialog = () => {
	isShowLinkWalletDialog.value = !isShowLinkWalletDialog.value
}
const connectUniSat = async () => {
	setIisShowLinkWalletDialog()
	emit('onSubmit')
};
const connectOkx = async () => {
	setIisShowLinkWalletDialog()
};

defineExpose({
	setIisShowLinkWalletDialog
})
</script>

<style scoped>
.LinkWallet:active {
	border: 1px solid #00c9a6;
}
</style>
