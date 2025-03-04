<template>
  <div class="   ">
    <div id="bg-dom" class="absolute z-0 w-full h-100vh"></div>
    <div class="max-w1172 w100% mxauto pt-74 <xl:(px-70) <lg:(px-30) <md:(pt-70 px-10)">
      <div class="flex justify-between items-center <md:(w100% h100%) relative <lg:(mx-auto)">
        <div class="z-3">
          <div style="text-shadow: 0px 0px 20px #2ec301" text="50" class="text-50 font-[OrbitronBold] lh-none <md:(text-25)">Get your points</div>
          <div class="font-500 text-16 z-3 pt-20px relative <md:(text-18)">
            Secure your spot to obtain Novai Chain's governance token $NOVAI<br />
            by staking your assets and accumulating points
          </div>
        </div>
        <div class="relative z-2">
          <div class="none w-459 right-[-36px] top-37 <md:(hidden)">
            <img src="@/assets/images/tasks/coinCharts.svg" alt="" class="animations w100% h100%" />
          </div>
          <!-- <div class="none centered-x w-507 top-37 <md:(hidden)">
									<img src="@/assets/images/tasks/coinCharts.svg" alt="" class="animations w100% h100%" />
								</div> -->
        </div>
      </div>
      <div class="w100% py58 px60 bg-[#191919] <md:(mt13 block py30) z-3 relative"
			flex="~ justify-between items-center">
        <img src="@/assets/svg/left.svg" alt="" class="absolute select-none pointer-events-none w114
				left-0 top-0  <md:(w80)" />
        <img src="@/assets/svg/right.svg" alt="" class="absolute select-none pointer-events-none
				w114 right-0 bottom-0 <md:(w80)" />
        <img src="@/assets/svg/8889.png" alt="" class="absolute select-none pointer-events-none left-0 top-0 h-[100%] <md:(none)" />
        <div class="flex items-center  <lg:(pl-30) <md:(pl0 fcc)" >
          <img class="w100 inline-block <lg:(text-80) <md:(w60)" style="cursor: pointer" src="@/assets/svg/8814.svg" alt="" />
          <div class="pl-32 flex flex-col justify-between h-[56px] <md:(pl-10)">
            <div text=" 28 c9" class="<lg:(text-24) <md:(text-20) font-[600] lh-none font-[OrbitronBold]">

							my points
							<!--  -->
            </div>
            <!-- <div text=" 16 " class="<md:(text-12) text-[#ffffff]/[.54] ">My Points</div> -->
            <div text=" 18 c9" class="font-[OrbitronMedium] <lg:(text-16) <md:(text-12) lh-none whitespace-nowrap">
							Current points
						</div>
          </div>
        </div>
				<div class="h-none font-[OrbitronBold] text-50 <md:(text-25 text-center pt-10)">{{walletInfo.point}}</div>
        <!-- <div class="flex pr-60  <lg:(pr-30) <md:(pr0 pt-30 pl-0 fcc) items-center " >
          <img class="w100 inline-block <lg:(text-80) <md:(w60)" style="cursor: pointer" src="@/assets/svg/8815.svg" alt="" />
          <div class="pl-32 flex flex-col justify-between h-[56px] <md:(pl-10)">
            <div text=" 28 c9 " class="<lg:(text-24) <md:(text-20) font-[600] lh-none font-[OrbitronBold]">
              Position value
            </div>
            <div text=" 18 c12" class="font-[OrbitronMedium] <lg:(text-16) <md:(text-12) lh-none whitespace-nowrap">BTC standard 500,000</div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="relative pt60 overflow-hidden bg-[#131315]  z-1 <md:(pt-70 px-10)" shadow="[0px_-12px_20px_20px_#131315]">
      <img src="@/assets/images/home/yzuo.png" alt="" class="absolute select-none pointer-events-none w-[38.64%] left-0 top-91 z-1" />
      <img src="@/assets/images/home/yyou.png" alt="" class="absolute select-none pointer-events-none w-[38.64%] right-0 top-337 z-1" />
      <div class="max-w1172 w100% <xl:(px-70) <lg:(px-30) <md:(px-10) mxauto relative z-3">
        <div class="">
          <div>
            <div class="flex items-center gap-6">
              <p class="font-[OrbitronBold] text-18 <md:(text-16)" text="14 c18">Earn points</p>
              <div class="flex gap-4">
                <Quadrilateral backgroundColor="rgba(255, 255, 255, .7)" />
                <Quadrilateral backgroundColor="rgba(255, 255, 255, .6)" />
                <Quadrilateral backgroundColor="rgba(255, 255, 255, .5)" />
                <Quadrilateral backgroundColor="rgba(255, 255, 255, .4)" />
                <Quadrilateral backgroundColor="rgba(255, 255, 255, .3)" />
                <Quadrilateral backgroundColor="rgba(255, 255, 255, .2)" />
                <Quadrilateral backgroundColor="rgba(255, 255, 255, .1)" />
              </div>
            </div>
            <p class="font-[OrbitronBold] text-26 <md:(text-18)">Points task</p>
          </div>
          <div class="min-h-728 bdr-14 relative z-3">
            <div class="fyc pr-30 pb20 pt28 <md:(pb-10 pt-10 hidden) font-[OrbitronBold]">
              <div class="w96 fcc" text="14 c12">Order</div>
              <div class="flex-1 ml62 <md:(w100 text-12 ml10)" text="14 c12">Task</div>
              <div class="w150 fcc <md:(w80 text-12 )" text="14 c12">Integral</div>
              <div class="flex-1 fcc" text="14 c12">State</div>
              <div class="w160 fcc" text="14 c12">Schedule</div>
            </div>
            <div v-for="(item, i) in promotionTaskList" :key="i" class="pb20">
              <div class="min-h100 py-10 pr-30 fyc bg-[#191919]/[.8] bdr16 border-1
							border-solid border-[#ACDE45]/[.51] flex-wrap <md:(px-10)">
                <div
                  class="w96 h28 fcc relative promotion_num <md:(text-14 w39 h28 )"
                  :class="{
                    promotion_num_ac: item.canDo === 1 && item.code !== 'AssetAirdrop'
                  }"
                  text="16"
                >
                  {{ i + 1 }}
                </div>
                <div class="md:(flex-1 ml10 ml62)  <md:(w-[calc(100%-50px)]  text-12 pl-8)" text="" :class="{ 'text-[#A9DD47]': item.canDo === 1 && item.code !== 'AssetAirdrop' }">
                  {{ item.remark }}
                </div>
                <div class="md:(w150  fcc) <md:(w50% text-12 fcc py8)" text="">
                  <span class="md:hidden <md:()">Integral: </span>
									<span v-if="item.code === 'Bridge'">{{item.reward}} / 10000</span>
									<span v-else>
										{{ item.maxCount > 1 ? `${item.reward} / ${item.totalReward}` :
									item.maxCount == 0 ? `${item.reward}` : item.totalReward }}
									</span>

                </div>
                <div text="" class="<md:(text-12 w50% py-8 fcc) md:( fcc)">
                  <span class="md:hidden <md:()">State: </span>{{ item.status !== 0 || (item.reward > 0 && item.maxCount == 0)  ? 'Acquired' : 'Not obtained' }}
                </div>
                <div class="md:(w160 fcc) <md:(flex-1 border-t-1px border-t-solid  fye pt-8)
								"  border-t="[#353535]" flex="">
                  <div v-if="item.code === 'AssetAirdrop'" class="w130 <md:(w100) flex justify-center">
                    <img class="w27 inline-block" style="cursor: pointer" src="@/assets/svg/link.svg" @click="jump" alt="" />
                  </div>

                  <el-button v-else-if="item.status === 0 && item.canDo === 0" :class="{ 'bg-[transparent]!': item.code !== 'AssetAirdrop' }" round class="min-w130 h34 bdr25 !text-[#ffffff]/[.54] <md:(!w100 !h34 !text-12)" :disabled="item.code !== 'AssetAirdrop'" @click="item.code === 'AssetAirdrop' && router.push('/airdropRules')">
                    {{ item.name }}
                    <div class="hidden"></div>
                  </el-button>
									<div v-else-if="item.status === 0 && item.canDo === 1 && item.code !== 'AssetAirdrop'">

										<div class="flex justify-center pb-10" v-if="item.code == 'InteractionX' && InteractionXNum != 0">
											<ProgressBar  :total="100" :current="InteractionXNum == 1? 30:InteractionXNum == 2?60:100" />
										</div>
										<el-button
									 :class="{ 'bg-[#131116]!': item.code !== 'AssetAirdrop' }" round type="primary"
									 class="min-w130 h34 bdr25 !border-none bg-to9 !text-[#181A20] <md:(!w100 !h34 !text-12)"
									 @click="btnOperate(item)">{{ item.name }}</el-button>
									</div>


                  <div v-if="item.status === 1" class="w130 <md:(w100) flex justify-center">
                    <!-- <img class="w27" style="cursor: pointer" src="@/assets/svg/8092.svg" alt="" /> -->
                    <ProgressBar :total="100" :current="100" />
                  </div>
                  <!-- <div v-if="item.code === 'AssetAirdrop'" class="w130 <md:(w100) flex justify-center">
                    <img class="w27 inline-block" style="cursor: pointer" src="@/assets/svg/link.svg" @click="jump" alt="" />
                  </div>

                  <el-button v-else-if="(item.status === 0 && item.canDo === 0) || item.code === 'AssetAirdrop'"
									:class="{ 'bg-[transparent]!': item.code !== 'AssetAirdrop' }"
									class="w130 h34 bdr25 !text-[#ffffff]/[.54] <md:(!w100 !h34 !text-12)"
									 :disabled="item.code !== 'AssetAirdrop'"
									 @click="item.code === 'AssetAirdrop' && router.push('/airdropRules')">
                    {{ item.name }}
                    <div class="hidden"></div>
                  </el-button>

                  <el-button v-if="item.status === 0 && item.canDo === 1 && item.code !== 'AssetAirdrop'" :class="{ 'bg-[#131116]!': item.code !== 'AssetAirdrop' }" type="primary" class="w130 h34 bdr25 !border-none bg-to9 !text-[#181A20] <md:(!w100 !h34 !text-12)" @click="btnOperate(item.code)">{{ item.name }}</el-button>

                  <div v-if="item.status === 1" class="w130 <md:(w100) flex justify-center">
                    <img class="w27" style="cursor: pointer" src="@/assets/svg/8092.svg" alt="" />
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt60"></div>
        <div class="relative z1 bg-[#131315]">
          <div class="container mxauto relative z3">
            <el-tabs v-model="activeName" class="">
              <el-tab-pane label="Invited users" name="first">
                <div class="<md:(overflow-x-scroll mt10) bg-[#131315]" border="1px solid [#ffffff]/[.16]" border-rd="[16px]">
                  <table flex="~ col" class="<md:(w100%)" border-rd="[10px]">
                    <thead>
                      <tr class="w100% h48 fyc px15 box-border text-[#FFFFFF]/[.54] !text-14 <md:(shadow-none px0 h48 text-13)" text="14">
                        <th flex="1" class="font-500">Invitation Time</th>
                        <th flex="1" class="font-500">User Address</th>
                        <th flex="1" class="font-500">Mission Status</th>
                      </tr>
                    </thead>
                    <tbody class="history_list_tbody overflow-y-scroll <md:px0">
                      <tr class="history_list_tbody_tr w100% h48 fyc <md:(h48 text-12)" text="14" v-for="(item, i) in invitedList" :key="i">
                        <td flex="1" text="center">
                          {{ dayjs(item.createTime).format('DD/MM/YYYY') }}
                        </td>
                        <td flex="1" text="center">{{ against(item.address) }}</td>
                        <td flex="1" text="center" :class="{ 'text-c13': item.status === 1 }">
                          {{ item.status === 1 ? 'completed' : 'undone' }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="fcc mt30 <md:(mt20)">
                  <el-pagination background layout="prev, pager, next" :total="invitedTotal" :pager-count="5" @current-change="sizeChange" />
                </div>
              </el-tab-pane>
              <el-tab-pane label="Completed Users" name="second">
                <div border-rd="[10px]" class="mt32 <md:(overflow-x-scroll mt10) bg-[#131315]" border="1px solid [#ffffff]/[.16]">
                  <table flex="~ col" class="<md:(w600)">
                    <thead>
                      <tr class="w100% h48 fyc px15 box-border text-[#FFFFFF]/[.54] text-14 <md:(shadow-none px0 h48 text-13)" :border-b="{ '1px solid [#ffffff]/[.16]': completedList.length }" text="14">
                        <th flex="1" class="font-500">Invitation Time</th>
                        <th flex="1" class="font-500">Entry Time</th>
                        <th flex="1" class="font-500">User Address</th>
                        <th flex="1" class="font-500">Mission Status</th>
                        <th flex="1" class="font-500">Invitation Points</th>
                      </tr>
                    </thead>
                    <tbody class="history_list_tbody overflow-y-scroll <md:px0">
                      <tr class="history_list_tbody_tr w100% h48 fyc <md:(h48 text-12)" text="14" v-for="(item, i) in completedList" :key="i">
                        <td flex="1" text="center">
                          {{ dayjs(item.createTime).format('DD/MM/YYYY') }}
                        </td>
                        <td flex="1" text="center">
                          {{ dayjs(item.confirmTime).format('DD/MM/YYYY') }}
                        </td>
                        <td flex="1" text="center">{{ against(item.address) }}</td>
                        <td flex="1" text="center">
                          {{ item.status === 1 ? 'completed' : 'undone' }}
                        </td>
                        <td flex="1" text="center">{{ item.invitePoint }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="fcc pt30 <md:(pt20)">
                  <el-pagination background layout="prev, pager, next" :total="total" :pager-count="5" @current-change="sizeChange" />
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>

    <TgDialog ref="TgDialogRef" @onSubmit="Tim"></TgDialog>

    <el-dialog v-model="dialogVisible" center
		 style="background-color: #131315; padding: 30px 39px; border-radius: 16px; max-width: 80%"
		 customClass="border-1 border-solid border-color-[#222222]" width="558">
      <div class="">
        <div class="text-center">
          <img class="w40 h40 inline-block <md:(w25 h25)" src="@/assets/images/logo.png" alt="" />
        </div>
        <div v-show="!publishX" class="text-center textjb-lv pt-10 pb-20 text-20 <md:text-14">
					Refer a friend to earn 10 points
				</div>
        <div  class="p30 <md:(p8 rounded-[8px] ) rounded-[16px] border-1px border-solid border-color-[#65ad59]">
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <div v-show="!publishX" class="text-[#ffffff]/[.54] text-20 <md:text-14">Your Referral Link</div>
              <div class="text-[14px] <md:(text-13 pt7) text-[#ffffff] pt10">{{
							inviteCode
							 }}</div>
            </div>
            <el-button class="w50 bg-to9 h50 <md:(w30 h30 rounded-[8px]) rounded-[13px]" color="#343434" @click="copyInviteCode">
              <img class="w-[w50] <md:(w30 h30) inline-block" src="@/assets/svg/copy.svg" alt="" />
            </el-button>
          </div>
        </div>
      </div>
				<template #footer>
      <div class="dialog-footer" v-show="publishX">
				<el-button class="w120 bg-to9 h50 <md:(w30 h30 rounded-[8px]) rounded-[13px]" color="#343434" @click="jumps">
              OK
        </el-button>
      </div>
    </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import dayjs from 'dayjs';
import { against } from '@/utils/against.js';
import setIisShowLinkWalletDialog from '@/components/TgDialog.vue';
import Quadrilateral from '@/components/Quadrilateral.vue';
import ProgressBar from '@/components/ProgressBar.vue';
// import { Operate } from './operate.js';

import particlesObj from '@/utils/particles.js';
import { memberUserTelegramConfigApi, memberUserBindEvmAddressApi, memberUserGetInteractionXApi, promotionTaskListApi, promotionPromoterPageInviteApi, promotionPromoterGetApi, memberUserBindTelegramApi, memberUserTwitterAuthorizeUrlApi, memberUserBindTwitterApi, memberUserFollowTwitterApi, memberUserRetweetsApi, memberUserGetApi, memberUserJoinTelegramApi } from '@/api/index.js';
import { OKX, useActiveWebStateRefs, useActiveWebState, connectWallet } from '@/web3-sdk';
import { TelegramLog } from '@/utils/jump';
import { useClipboard } from '@vueuse/core';
import { ElMessage, ElNotification } from 'element-plus';
import { useRouter, useRoute } from 'vue-router';
const { killConnect, metaMaskLogin, setConnectorName, setAccount } = useActiveWebState();

import { ethers } from 'ethers';
import { useOperate } from './operate.js';
const { copy } = useClipboard({
  legacy: true
});

const { judge, judges,publishX, invite, inviteType } = useOperate();
const router = useRouter();
const route = useRoute();
const commonStore = useCommonStore();
const userStore = useUserStore();
const activeName = ref('first');
const { account } = useActiveWebStateRefs();
console.log('router：', router);
const dialogVisible = ref(false);
const inviteCode = ref('');
// 已邀请用户
const invitedList = ref([]);
const invitedInfo = reactive({
  pageNo: 1,
  pageSize: 10
  // status: 1
});
const invitedTotal = ref(0);
// 已完成用户
const completedList = ref([]);

const pageInfo = reactive({
  pageNo: 1,
  pageSize: 10,
  status: 1
});

const total = ref(0);
const InteractionXNum = ref(0);
const sizeChange = (size) => {
  if (activeName.value == 'first') {
    invitedInfo.pageNo = size;
    getPromotionPromoterPageInviteApi(true);
  } else {
    pageInfo.pageNo = size;
    getPromotionPromoterPageInviteApi(false);
  }
};

const promotionTaskList = ref([]);

let widthType = ref(window.innerWidth > 768);
// 获取推广列表
const getList = async () => {
  const res = await promotionTaskListApi();
  if (res && !res.hasErrors) {
    console.log('res', res);
    promotionTaskList.value = res.data;
  }
  let type = promotionTaskList.value.find((item) => item.code == 'InteractionX' && item.canDo == 1);
  if (type) {
    getMemberUserGetInteractionXApi();
  }
};

// 获取推广任务
const getPromotionTaskListApi = async () => {
  try {
    getList();
    //判断是否登录同时已经执行完第二步
    let LinkX = promotionTaskList.value.some((item) => {
      return item.status == 0 && item.code === 'LinkX';
    });
    //判断当前是否登录 是否是执行当前第二步
    if (LinkX && userStore.token && twitterCode.value) {
      twitterLogin(twitterCode.value, false);
    }
  } finally {
  }
};

watch(
  () => commonStore.isShowLinkWalletDialog,
  (value) => {
    if (!value) {
      getList();
    }
  }
);
//发布文案刷新列表
const jumps = async () =>{
	try {
		await judges()
		dialogVisible.value = false
		Tim();
	} catch (e) {}
}

const btnOperate = async (data) => {
  try {
    await judge(data);
		console.log(publishX.value,'asda')
    if (invite.value && inviteType.value) {
      inviteCode.value = invite.value;
      dialogVisible.value = true;
    } else if(publishX.value){
			copy(publishX.value);
			inviteCode.value = publishX.value;
			dialogVisible.value = true;
		}
    ///	if()
    Tim();
  } catch (e) {}

  // switch (code) {
  //   // 链接钱包
  //   case 'LinkWallet':
  //  //   commonStore.isShowLinkWalletDialog = true;
  //     break;
  //   //连接小狐狸
  //   case 'LinkEvmWallet':
  //  //   linkEvmWallet();
  //     break;
  //   // 链接X
  //   case 'LinkX':
  //    // linkTwitter();
  //     break;
  //   // 关注X
  //   case 'FollowX':
  //    // followTwitter();
  //     break;
  //   // 发布X
  //   case 'PublishX':
  //    // retweetsApi();
  //     break;
  //   // 加入TG
  //   case 'JoinTg':
  //   //  loginTelegram();
  //     break;
  //   // 邀请链接
  //   case 'Invite':
  //   //  getPromotionPromoterGetApi();
  //     break;
  //   default:
  //     break;
  // }
};

const getMemberUserGetInteractionXApi = async () => {
  try {
    let res = await memberUserGetInteractionXApi();
    console.log(res, 'res');
    let num = res.data;
    InteractionXNum.value = num;
  } finally {
  }
};
const getPromotionPromoterPageInviteApi = async (type) => {
  try {
    let { data } = await promotionPromoterPageInviteApi(type ? invitedInfo : pageInfo);
    if (type) {
      invitedList.value = data.list;
      invitedTotal.value = data.total;
    } else {
      completedList.value = data.list;
      total.value = data.total;
    }
  } finally {
  }
};

// 复制邀请码
const copyInviteCode = () => {
  copy(inviteCode.value);
  ElMessage({
    message: 'Copy Success',
    type: 'success'
  });
};

const TgDialogRef = ref();
// const tgLink = ref('');
//tg连接
const loginTelegram = async () => {
  // 新的加入tg流程，正常不是这样的，只是本项目特例
  window.open(tgInfo.value.inviteUrl);
  const res = await memberUserJoinTelegramApi();
  if (res && !res.hasErrors) {
    Tim();
  }
  // 旧的加入tg流程，正常是用这样，不用上面的
  // if (isJoinTg.value) {
  //   TgDialogRef.value.setIisShowLinkWalletDialog();
  //   window.open(tgInfo.value.inviteUrl);
  // } else {
  //   let user = await TelegramLog(tgInfo.value.botToken);
  //   await memberUserBindTelegramApi({
  //     telegram: user.id
  //   });
  //   isJoinTg.value = true;
  // }
};
//tg弹框

// 推特登录后的code码
const twitterCode = ref('');
// 链接推特
const linkTwitter = async () => {
  const res = await memberUserTwitterAuthorizeUrlApi();
  if (res && !res.hasErrors) {
    location.replace(res.data);
  }
};
// 推特登录
const twitterLogin = async (code, type = true) => {
  const res = await memberUserBindTwitterApi({ code });
  //console.log(res,'resresres')
  // if (res && !res.hasErrors) {

  // }
  setTimeout(() => {
    router.replace({ path: '/' });
  }, 1000);
};
//定时异步出发
const Tim = () => {
  getList();
	if(userStore.token) getWalletInfo();

};

//关注推特
const followTwitter = async () => {
  const res = await memberUserFollowTwitterApi();
  if (res && !res.hasErrors) {
    Tim();
  }
};
//发布推特
const retweetsApi = async () => {
  const res = await memberUserRetweetsApi();
  if (res && !res.hasErrors) {
    Tim();
  }
};

const jump = () => {
  window.open('https://medium.com/@novaidao/novai-chain-airdrop-rules-detailed-explanation-e8f359153f5f');
};

// 积分持仓等信息
const walletInfo = reactive({
  point: 0,
  holdAmount: 0
});
// 获取钱包信息
const getWalletInfo = () => {
  // const res = await memberUserGetApi();
  // if (res && !res.hasErrors) {
  //
  //   //walletInfo.holdAmount = res.data.holdAmount;
  // }
	memberUserGetApi().then(res =>{
		walletInfo.point = res.data.point;
	})
};
function initCanvas() {
  particlesJS('bg-dom', particlesObj);
}
onMounted(() => {
  console.log('onMounted route.params', account.value);
  if (route.query.code) {
    twitterCode.value = route.query.code;
    if (account.value && userStore.token) {
      twitterLogin(route.query.code);
    }
  } else if (route.query.inviteCode) {
    commonStore.inviteCode = route.query.inviteCode;
  }
  initCanvas();
});
onUnmounted(() => {
  if (pJSDom) {
    pJSDom.forEach((d) => {
      d.pJS.fn.vendors.destroypJS();
    });
    pJSDom = [];
  }
});
watch(
  () => userStore.token,
  (value) => {
    getPromotionTaskListApi();
    if (value) {
      getWalletInfo();
      getPromotionPromoterPageInviteApi(activeName.value == 'first');
    } else {
      //登出后清除数据
      invitedList.value = [];
      completedList.value = [];
      pageInfo.pageNo = 1;
      invitedInfo.pageNo = 1;
      total.value = 0;
      invitedTotal.value = 0;
    }
  },
  {
    deep: true,
    immediate: true
  }
);
watch(
  () => activeName.value,
  (value) => {
    //判断是否登录并没有数据的情况
    if (userStore.token) {
      if (invitedList.value.length == 0 && value === 'first') {
        getPromotionPromoterPageInviteApi(true);
      } else if (completedList.value.length == 0 && value === 'second') {
        getPromotionPromoterPageInviteApi(false);
      }
    }
  },
  {}
);

// 是否加入Tg群
// const isJoinTg = ref(false);
// Tg信息
const tgInfo = ref({});
watch(
  () => promotionTaskList.value,
  async (newList) => {
    let canDo = newList.some((item) => {
      return item.code === 'JoinTg' && item.canDo === 1;
    });

    if (canDo) {

    }
  }
);
</script>

<style scoped lang="scss">
.promotion_num {
  background: url('@/assets/svg/promotionnumbg.svg') no-repeat;
  background-size: 100% 100%;
}

.promotion_num_ac {
  background: url('@/assets/svg/promotionnumbgac.svg') no-repeat;
  background-size: 100% 100%;
}

:deep(.el-tabs__nav) {
  height: 58px;
}

:deep(.el-tabs__item) {
  height: auto;
  color: var(--font-color2);
  font-size: 20px;
  font-family: OrbitronMedium;
}

:deep(.el-dialog__headerbtn) {
  width: 60px;
  height: 60px;
}

:deep(.el-tabs__item.is-active) {
  color: var(--font-color9);
}

:deep(.el-dialog__close) {
  color: #ffffff !important;
  font-size: 24px;
}

:deep(.el-tabs__active-bar) {
  background-color: transparent;

  &::after {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    content: '';
    width: 80%;
    height: 4px;
    background: linear-gradient(180deg, #5ac27c 0%, #b2e235 100%);
  }
}

:deep(.el-tabs__nav-wrap::after) {
  display: none;
}

:deep(.btn-prev) {
  border: 1px solid var(--font-color13);

  .el-icon {
    color: var(--font-color13);
  }
}

:deep(.btn-next) {
  border: 1px solid var(--font-color13);

  .el-icon {
    color: var(--font-color13);
  }
}

:deep(.el-pager) {
  .is-active {
    background: linear-gradient(90deg, #afc540 0%, #15b477 100%);
  }
}

:deep(.el-input-number) {
  display: flex;
  align-items: center;

  .el-input-number__decrease,
  .el-input-number__increase {
    width: 44px !important;
    height: 30px;
    border-radius: 4px;
    top: 0;
    bottom: 0;
    border: none;
    background: var(--bg3);

    .el-icon {
      color: var(--font-color9);
    }
  }

  .el-input {
    width: 44px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;

    .el-input__wrapper {
      padding: 0;
      border-radius: 4px;
      background: var(--bg3);
      border: 1px solid var(--font-color13);
      box-shadow: none !important;

      .el-input__inner {
        height: 28px;
        color: var(--font-color13);
      }
    }
  }
}

.points_title {
  background: url('@/assets/images/tasks/point_bg.png');
  background-size: 100% 100%;
}

@media (max-width: 768px) {
  :deep(.el-tabs__nav) {
    height: 50px;
  }

  :deep(.el-tabs__item) {
    font-size: 14px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1360px;
  }
}

.animations {
  animation: spin 200s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
<style>
.twitter_pop_up {
  padding: 0;

  .el-dialog__header {
    display: none;
  }
}

tbody tr {
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  /* 设置下划线 */
}

tbody tr:not(:first-child) {
  border-top: 1px dashed rgba(255, 255, 255, 0.16);
  /* 设置下划线 */
}

.el-pagination.is-background .btn-prev,
.el-pagination.is-background .btn-next,
.el-pagination.is-background .el-pager li {
  background-color: #ffffff;
  color: #000000;
  font-weight: 500;
  font-size: 14px;
}

.el-pagination.is-background .btn-prev.is-active,
.el-pagination.is-background .btn-next.is-active,
.el-pagination.is-background .el-pager li.is-active {
  background-color: linear-gradient(90deg, #afc540 0%, #15b477 100%);
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
}

.btn-next:disabled {
  background-color: #ffffff;
}
</style>
