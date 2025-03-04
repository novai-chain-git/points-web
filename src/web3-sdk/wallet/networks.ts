import { ChainId, ChainIdList } from './config';
import { BASE_CHAIN_ID } from '@/web3-sdk';
// import novaiIcon from '@/assets/img/home/novai.png';
// import ethIcon from '@/assets/img/home/eth.png';
// import maticIcon from '@/assets/img/home/matic.png';
// import bnbIcon from '@/assets/img/home/bnb.png';
// import tronIcon from '@/assets/img/home/tron.png';
// import btcIcon from '@/assets/img/home/btc.png';
// import bnb from '@/assets/img/token/bnb.png'
// import eth from '@/assets/img/token/eth.png'
// import nusd from '@/assets/img/token/nusd.png'
// import usdc from '@/assets/img/token/usdc.png'
// import usdt from '@/assets/img/token/usdt.png'
// import wbtc from '@/assets/img/token/wbtc.png'
// import tron from '@/assets/img/token/tron.png'
// import hubnb from '@/assets/img/token/hubnb.png'
// import hubtc from '@/assets/img/token/hubtc.png'
// import hueth from '@/assets/img/token/hueth.png'
// import hutron from '@/assets/img/token/hutron.png'
// import huusdc from '@/assets/img/token/huusdc.png'
// import huwbtc from '@/assets/img/token/huwbtc.png'

export const EmptyAddress = {
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.MATIC_MAINNET]: ''
};

// 区块链浏览器地址配置
export const MAIN_BSC_SCAN_URLS = {
  [ChainId.NOVAI_MAINNET]: 'https://scan.novaichain.com/',
  [ChainId.ETH_MAINNET]: 'https://etherscan.io/',
  [ChainId.MATIC_MAINNET]: 'https://polygonscan.com/',
  [ChainId.BSC_MAINNET]: 'https://bscscan.com/',

};
export const TEST_BSC_SCAN_URLS = {
  [ChainId.NOVAI_TESTNET]: 'https://scan.novaichain.com/',
  [ChainId.ETH_TESTNET]: 'https://sepolia.etherscan.io/',
  [ChainId.MATIC_TESTNET]: 'https://amoy.polygonscan.com/',
  [ChainId.BSC_TESTNET]: 'https://testnet.bscscan.com/',
};
export const BASE_BSC_SCAN_URLS = {
  ...MAIN_BSC_SCAN_URLS,
  ...TEST_BSC_SCAN_URLS
};

// BTC链
export const BTC_CHAIN ={
  [ChainId.BTC_TEST_NET]: {
    chainId: ChainId.BTC_TEST_NET,
    chainOriginalId: ChainId.BTC_TEST_NET,
    chainName: 'BTC Testnet',
    nativeCurrency: {
      name: 'BTC',
      symbol: 'BTC',
      decimals: 18
    },
    rpcUrls: [],
    blockExplorerUrls: [],
    //icon: hubtc
  },
  [ChainId.BTC_MAIN_NET]: {
    chainId: ChainId.BTC_MAIN_NET,
    chainOriginalId: ChainId.BTC_MAIN_NET,
    chainName: 'BTC Mainnet',
    nativeCurrency: {
      name: 'BTC',
      symbol: 'BTC',
      decimals: 18
    },
    rpcUrls: [],
    blockExplorerUrls: [],
    //icon: hubtc
  }
}

// 波场链
export const TRON_CHAIN ={
  [ChainId.TRON_TEST_NET]: {
    chainId: ChainId.TRON_TEST_NET,
    chainOriginalId: ChainId.TRON_TEST_NET,
    chainName: 'Tron Testnet',
    nativeCurrency: {
      name: 'TRX',
      symbol: 'TRX',
      decimals: 18
    },
    rpcUrls: [],
    blockExplorerUrls: [],
    //icon: tron
  },
  [ChainId.TRON_MAIN_NET]: {
    chainId: ChainId.TRON_MAIN_NET,
    chainOriginalId: ChainId.TRON_MAIN_NET,
    chainName: 'Tron Mainnet',
    nativeCurrency: {
      name: 'TRX',
      symbol: 'TRX',
      decimals: 18
    },
    rpcUrls: [],
    blockExplorerUrls: [],
    //icon: tron
  }
}

// ETH 链主网
export const ETHEREUM_CHAIN_MAINNET = {
  [ChainId.NOVAI_MAINNET]: {
    chainId: `0x${ChainId.NOVAI_MAINNET.toString(16)}`,
    chainOriginalId: ChainId.NOVAI_MAINNET,
    chainName: 'Novai Chain Mainnet',
    nativeCurrency: {
      name: 'NOVAI',
      symbol: 'NOVAI',
      decimals: 18
    },
    rpcUrls: [
      'https://rpc.novaichain.com'
    ],
    blockExplorerUrls: [BASE_BSC_SCAN_URLS[ChainId.NOVAI_MAINNET]],
    //icon: novaiIcon
  },
  [ChainId.ETH_MAINNET]: {
    chainId: `0x${ChainId.ETH_MAINNET.toString(16)}`,
    chainOriginalId: ChainId.ETH_MAINNET,
    chainName: 'Ethereum Mainnet',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: [
      'https://rpc.mevblocker.io',
      'https://eth.drpc.org'
    ],
    blockExplorerUrls: [BASE_BSC_SCAN_URLS[ChainId.ETH_MAINNET]],
    //icon: eth
  },
  [ChainId.MATIC_MAINNET]: {
    chainId: `0x${ChainId.MATIC_MAINNET.toString(16)}`,
    chainOriginalId: ChainId.MATIC_MAINNET,
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: [
      'https://polygon-rpc.com/',
    ],
    blockExplorerUrls: [BASE_BSC_SCAN_URLS[ChainId.MATIC_MAINNET]],
    //icon: maticIcon
  },
  [ChainId.BSC_MAINNET]: {
    chainId: `0x${ChainId.BSC_MAINNET.toString(16)}`,
    chainOriginalId: ChainId.BSC_MAINNET,
    chainName: 'BNB Chain Mainnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    },
    rpcUrls: [
      'https://endpoints.omniatech.io/v1/bsc/mainnet/public/',
    ],
    blockExplorerUrls: [BASE_BSC_SCAN_URLS[ChainId.BSC_MAINNET]],
    //icon: bnb
  }
}

// ETH 测试网
export const ETHEREUM_CHAIN_TESTNET = {
  [ChainId.NOVAI_TESTNET]: {
    chainId: `0x${ChainId.NOVAI_TESTNET.toString(16)}`,
    chainOriginalId: ChainId.NOVAI_TESTNET,
    chainName: 'Novai Chain Testnet',
    nativeCurrency: {
      name: 'NOVAI',
      symbol: 'NOVAI',
      decimals: 18
    },
    rpcUrls: [
      'http://192.168.101.44:8545'
    ],
    blockExplorerUrls: [BASE_BSC_SCAN_URLS[ChainId.NOVAI_TESTNET]],
    //icon:  novaiIcon
  },
  [ChainId.ETH_TESTNET]: {
    chainId: `0x${ChainId.ETH_TESTNET.toString(16)}`,
    chainOriginalId: ChainId.ETH_TESTNET,
    chainName: 'Eth Testnet',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: ['https://endpoints.omniatech.io/v1/eth/sepolia/public','https://1rpc.io/sepolia'],
    blockExplorerUrls: [BASE_BSC_SCAN_URLS[ChainId.ETH_TESTNET]],
    //icon: eth
  },
  [ChainId.MATIC_TESTNET]: {
    chainId: `0x${ChainId.MATIC_TESTNET.toString(16)}`,
    chainOriginalId: ChainId.MATIC_TESTNET,
    chainName: 'Polygon PoS Chain Testnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: [
      'https://polygon-amoy.blockpi.network/v1/rpc/public',
      'https://polygon-amoy-bor-rpc.publicnode.com'
    ],
    blockExplorerUrls: [BASE_BSC_SCAN_URLS[ChainId.MATIC_TESTNET]],
    //icon: maticIcon
  },
  [ChainId.BSC_TESTNET]: {
    chainId: `0x${ChainId.BSC_TESTNET.toString(16)}`,
    chainOriginalId: ChainId.BSC_TESTNET,
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'TBNB',
      symbol: 'tBNB',
      decimals: 18
    },
    rpcUrls: ['https://bsc-testnet.blockpi.network/v1/rpc/public'],
    blockExplorerUrls: [BASE_BSC_SCAN_URLS[ChainId.BSC_TESTNET]],
    //icon: bnb
  }
}
export const ETHEREUM_CHAIN = {
  ...ETHEREUM_CHAIN_MAINNET,
  ...ETHEREUM_CHAIN_TESTNET,
  ...BTC_CHAIN,
  ...TRON_CHAIN
};


 
// 正式链


console.log('ETHEREUM_CHAIN',ETHEREUM_CHAIN);

export const TokenInfo ={
}

export type EthereumChain = keyof typeof ETHEREUM_CHAIN;

export const ChainList = ChainIdList.map((item) => ETHEREUM_CHAIN[item])
.filter(
  (item) => item.chainOriginalId !== BASE_CHAIN_ID
);

