import { ChainId } from '../wallet/config';

// 看注释 看注释 看注释
// BSC_MAINNET是正式链 对应的链ID为56
// BSC_TESTNET是正式链 对应的链ID为97
// 这是合约地址配置文件
// 合约的地址请务必在这个地添加 请务必在这个地方添加 请务必在这地方添加

/**
 * @请认真阅读上面注释
 */
const addresses = {
  USDT: {
    [ChainId.NOVAI_TESTNET]: '0xd0564fDbf1D17a0C740ec818d5FdF6668c122941',
    [ChainId.ETH_TESTNET]: '0xd5dC3FC992b3a5a3B56802F317ac9bD86E3a9835',
    [ChainId.MATIC_TESTNET]: '0x23a0e316EBf0676c84438e4f96E729398d76f0A8',
    [ChainId.BSC_TESTNET]: '0x95CeA4B9a55e1835F7272B974bE12985BD7320bb',
  },
  // 跨链合约
  ChainConnect: {
    [ChainId.NOVAI_TESTNET]: '0x95CeA4B9a55e1835F7272B974bE12985BD7320bb',
    [ChainId.ETH_TESTNET]: '0xed05920e9327B8296F9F029Add2e0a0eEF1Cd45a',
    [ChainId.MATIC_TESTNET]: '0xc7bf7B3002dC512f7d7b4E0F7d343b37f9751A3F',
    [ChainId.BSC_TESTNET]: '0xd5dC3FC992b3a5a3B56802F317ac9bD86E3a9835',
    [ChainId.TRON_TEST_NET]: 'TDCGiN9Y4X1JuV767Lx3aEErG2dGHVjCrk'
  }
};
const addressesProduction = {
  USDT: {
    [ChainId.NOVAI_MAINNET]: '0xd3840df3E470B4db31A56F3c4365e61B4444e58E',
    [ChainId.ETH_MAINNET]: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    [ChainId.MATIC_MAINNET]: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
    [ChainId.BSC_MAINNET]: '0x55d398326f99059ff775485246999027b3197955'
  },
  // 跨链合约
  ChainConnect: {
    [ChainId.NOVAI_MAINNET]: '0xD5623e87466Ec6CcA12A7EB259Ae87B0490F0b72',
    [ChainId.ETH_MAINNET]: '0x4e66a122f169443ead833b6b6567cc403a18dd95',
    [ChainId.MATIC_MAINNET]: '0xea0909f3da3e58040e81e6a4bd1826caaacb9cad',
    [ChainId.BSC_MAINNET]: '0xcc02c76bb2fb5064fbb76391cbebfc3fb96a2c45',
    [ChainId.TRON_MAIN_NET]: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
  }
}
export default import.meta.env.VITE_APP_NODE_ENV === 'development' ? addresses : addressesProduction;
