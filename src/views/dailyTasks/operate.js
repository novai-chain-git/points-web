import { LinkWalletOKX } from '@/web3-sdk';
import { ref, onMounted, onUnmounted } from 'vue';
import { useUserStore } from '@/store/modules/user.js';
import { promotionTaskCompleteApi, promotionPromoterGetApi, memberUserInteractionXApi, memberUserCreateTweetsApi, memberUserTwitterAuthorizeUrlApi, memberUserFollowTwitterApi, memberUserBindAddressApi } from '@/api';


export const useOperate = () => {
	const invite = ref('');
	const inviteType = ref(false)
	const publishX = ref("")
	const obj = ref({})
	const userStore = useUserStore();
	// 第一步链接钱包
	const linkWallet = async () => {
		const address = await LinkWalletOKX();

		userStore.memberAuthLoginApi(address);
		// await memberUserBindAddressApi({ address });
		//注册成功
		//刷新列表
		//getList
	};
	// 获取邀请链接
	const getPromotionPromoterGetApi = async () => {
		//if(invite.value ) return
		inviteType.value = true
		//if(invite.value) return
		const res = await promotionPromoterGetApi();
		if (res && !res.hasErrors) {
			// copyInviteCode(res.data.inviteCode);
			invite.value = window.location.origin + '/?inviteCode=' + res.data.inviteCode;
		}
	};
	function judges(){
		joinTg(obj.value.code, obj.value.link)
	}
	function judge(data) {
		inviteType.value = false
		invite.value = ''
		publishX.value = ''
		obj.value = data
		switch (data.code) {
			case 'LinkWallet':
				return linkWallet();
			case 'FollowX':
				return joinTg(data.code, data.link)
			case 'JoinTg':
				return joinTg(data.code, data.link);
			case 'PublishX':
				publishX.value = "Im earning $Novai in Novai Bot, Join me for further more airdrop"

			//	return getPromotionPromoterGetApi();
				break; //joinTg(data.code, data.link);
			case 'DownloadNpay':
				return joinTg(data.code, data.link);
			case 'FinanceRegister':
				return joinTg(data.code, data.link);
			case 'Faucet':
				return joinTg(data.code, data.link);
			case 'FinanceBindInvite':
				return joinTg(data.code, data.link);
			case 'InteractionX':
				return jumpX(data.link);
			case 'Invite':
				return getPromotionPromoterGetApi();
			case 'Bridge':
				return joinTg(data.code, data.link);
			case 'Swap':
				return joinTg(data.code, data.link);
			case 'FinanceStaking':
				return joinTg(data.code, data.link);
		}
	}
	return { judge, invite, inviteType, publishX, judges };
};

//判断执行那个方法函数

//登录注册
const login = async () => { };

//第二步关注twtter
const followTwitter = async () => {
	const res = await memberUserTwitterAuthorizeUrlApi();
	location.replace(res.data);
	//const res = await memberUserFollowTwitterApi();
	// if (res && !res.hasErrors) {
	//   Tim();
	// }
};

// 第三步加入tg
const joinTg = async (code, link) => {
	if (!link) return;
	await promotionTaskCompleteApi({ code });
	jumpLink(link);
};

// 第四步发布一条关于NovaiBot推特
const postTweet = async () => {
	await memberUserCreateTweetsApi();
};
//第九步互动推特
const jumpX = async (link) => {
	if (!link) return;
	jumpLink(link);
	await memberUserInteractionXApi();
};

//跳转下载nPay
const jumpLink = (link) => {
	window.open(link, '_blank');
};
