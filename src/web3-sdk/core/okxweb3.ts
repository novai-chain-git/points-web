import { useActiveWebState, MetaMask, useActiveWebStateRefs } from '../stores/activeWebState';
import { BASE_CHAIN_ID, BASE_URL } from '../constants';
import { getLibrary } from './web3Core';
import { ETHEREUM_CHAIN } from '../wallet/networks';

export const chainId = BASE_CHAIN_ID;
export const LinkWalletOKX = async () => {

  const { setConnectorName, setAccount, setChainId } = useActiveWebState();
  if (typeof window.okxwallet !== 'undefined') {
    // window.okxwallet.disconnect();
    const accounts = await window.okxwallet.request({
      method: 'eth_requestAccounts'
    });
    setAccount(accounts[0]);

    // 切换链ID
    const _chainId = await getChainIdOKX();
    if (_chainId !== ETHEREUM_CHAIN[chainId]) {
      await okxwalletSwitchChain();
    }
    return accounts[0];
  } else {
    window.open('https://www.okx.com/zh-hans/download');
		
  }
};

export const getOkxActiveLibrary = () => {
  if (window.okxwallet) {
    return getLibrary(window.okxwallet);
  }
  console.log('请安装OKX钱包, ');
  return null;
};
//获取okx当前链
export const getChainIdOKX = async () => {
  const { setConnectorName, setAccount, setChainId } = useActiveWebState();
  if (typeof window.okxwallet !== 'undefined') {
    // window.okxwallet.disconnect();
    const library = getOkxActiveLibrary();
    if (library) {
      const chainId = await library.send('eth_chainId', []);
      return Number(chainId);
    }
    //setChainId(chainId);
    // return chainId;
  } else {
    window.open('https://www.okx.com/zh-hans/download');
  }
};

/**
 * @dev 添加链
 * @returns 如果成功返回链id
 */
export const okxWalletAddChain = async (): Promise<unknown> => {
  if (window.okxwallet) {
    try {
      const data = { ...ETHEREUM_CHAIN[chainId] };
      delete data.chainOriginalId;
      delete data.icon;
      // 添加当前DAPP使用的链
      await window.okxwallet.request({
        method: 'wallet_addEthereumChain',
        params: [data]
      });
    } catch (error) {
      console.error(error);
    }
  }
  return undefined;
};

/**
 * @dev 切换链
 * @returns 如果成功返回链id
 */

export const okxwalletSwitchChain = async (): Promise<unknown> => {
  // await walletAddChain();
  await okxWalletChangeChain();
};
//切换链
export const okxWalletChangeChain = async () => {
  const { setConnectorName, setAccount, setChainId } = useActiveWebState();
  // if (typeof window.okxwallet !== 'undefined') {
  //   // window.okxwallet.disconnect();
  //   return;
  // }
  try {
    console.log(ETHEREUM_CHAIN[chainId]?.chainId, chainId, 'ETHEREUM_CHAIN[chainId]?.chainId');
    // 切换至当前DAPP使用的链
    await window.okxwallet.request({
      method: 'wallet_switchEthereumChain',
      params: [
        {
          chainId: ETHEREUM_CHAIN[chainId]?.chainId
        }
      ]
    });
  } catch (error) {
    if (error?.message?.includes('Unrecognized chain ID')) {
      await okxWalletAddChain();
      await okxWalletSwitchChain();
    }
    console.error('切换链报错', error);
  }
  // const connector = new MetaMask();
  // await connector.activate(chainId);
  // setConnectorName(connector.name);
  // setAccount(connector.account);
};

/**
 * @dev 切换链
 * @returns 如果成功返回链id
 */
export const okxWalletSwitchChain = async (): Promise<unknown> => {
  // await walletAddChain();
  await walletChangeChain();
};
