import request from '@/utils/request.js';
import axios from 'axios';

// 刷新令牌
export const memberAuthRefreshTokenApi = (data) => {
  return request.post('/app-api/member/auth/refresh-token', data);
};

// 使用钱包地址登录
export const memberAuthLoginApi = (data) => {
  return request.post('/app-api/member/auth/login', data);
};

// 是否有Create状态交易
export const assetTransactionGetApi = (data) => {
  return request.put('/app-api/asset/transaction/get', data);
};

// 创建交易
export const assetTransactionCreateApi = (data) => {
  return request.post('/app-api/asset/transaction/create', data, { showLoading: false });
};

// 更新交易
export const assetTransactionUpdateApi = (data) => {
  return request.put('/app-api/asset/transaction/update', data);
};

// 获取手续费
export const getGasFeesApi = (network) => {
  return axios.get(`https://mempool.space/${network}/api/v1/fees/recommended`);
};
// 获取未花费的 utxo
export const getWaitUtxoApi = (network, address) => {
  return axios.get(`https://mempool.space/${network}/api/address/${address}/utxo`);
};
// 获得NFT列表
export const assetNftListApi = (params) => {
  return request.get('/app-api/asset/nft/list', { params });
};

// 获得交易分页
export const assetTransactionPageApi = (params) => {
  return request.get('/app-api/asset/transaction/page', { params });
};

// 获得推广任务分页
export const promotionTaskListApi = (params) => {
  return request.get('/app-api/promotion/task/list', { params });
};

// 获得邀请用户分页
export const promotionPromoterPageInviteApi = (params) => {
  return request.get('/app-api/promotion/promoter/page-invite', { params });
};

// 获得推广信息
export const promotionPromoterGetApi = (params) => {
  return request.get('/app-api/promotion/promoter/get', { params });
};

// 获取Telegram配置
export const memberUserTelegramConfigApi = () => {
  return request.get('/app-api/member/user/telegram-config');
};

// 绑定Telegram
export const memberUserBindTelegramApi = (data) => {
  return request.post('/app-api/member/user/bind-telegram', data);
};

// 获取Twitter授权URL
export const memberUserTwitterAuthorizeUrlApi = (params) => {
  return request.get('/app-api/member/user/twitter-authorize-url', { params });
};

// 绑定Twitter
export const memberUserBindTwitterApi = (data) => {
  return request.post('/app-api/member/user/bind-twitter', data);
};

// 获得信息
export const memberUserGetApi = (params) => {
  return request.get('/app-api/member/user/get', { params });
};

// 关注Twitter
export const memberUserFollowTwitterApi = () => {
  return request.post('/app-api/member/user/follow-twitter');
};

// 发布Twitter
export const memberUserRetweetsApi = () => {
  return request.post('/app-api/member/user/retweets');
};

// 加入Telegram
export const memberUserJoinTelegramApi = (data) => {
  return request.post('/app-api/member/user/join-telegram', data);
};

// 绑定EVM钱包地址
export const memberUserBindEvmAddressApi = (data) => {
  return request.post('/app-api/member/user/bind-evm-address', data);
};

// 完成任务
export const promotionTaskCompleteApi = (data) => {
  return request.post('/app-api/promotion/task/complete', data);
};

// 发Twitter
export const memberUserCreateTweetsApi = (data) => {
  return request.post('/app-api/member/user/create-tweets', data);
};

// Novai官方推特互动
export const memberUserInteractionXApi = () => {
  return request.post('/app-api/member/user/interaction-x');
};

// Novai官方推特互动次数
export const memberUserGetInteractionXApi = (params) => {
  return request.get('/app-api/member/user/get-interaction-x', { params });
};

// 绑定TG-OKX钱包地址
export const memberUserBindAddressApi = (data) => {
  return request.post('/app-api/member/user/bind-address', data);
};
