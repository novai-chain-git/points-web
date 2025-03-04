<template>
  <div class="pt67 pb76 <md:px15" bg="[url(@/assets/images/rules/rulesbg.png)] bg4 no-repeat [length:100%]">
    <h1 class="mt42 h44 <md:(mt20 text-20)" text="30 center">Asset Proof Points Collection Task</h1>
    <div class="w1200 mxauto mt30 <md:(w100% mt15)">
      <el-tabs v-model="activeName">
        <!-- BRC-20 快照 -->
        <el-tab-pane label="BRC-20 Snapshot" name="first">
          <div class="flex justify-between mt60 h590 <md:(mt20 hauto flex-col )">
            <div class="w670 h100% <md:(w100%)">
              <img src="@/assets/images/rules/brc20.png" alt="" class="w100% h100%" />
            </div>
            <div class="w440 h100% flex flex-col justify-around <md:(w100%)">
              <div class="flex h-110">
                <img src="@/assets/images/rules/tle.png" alt="" class="w66 h66 mr20 <md:(w40 h40)" />
                <div>
                  <div class="line-height-28 <md:(text-16 line-height-20)" text="20">Snapshot Object</div>
                  <p class="line-height-22 mt10 <md:(text-12 line-height-16)" text="16 c12 ">The wallet holding Brc-20 assets on the BTC layer 1 main chain</p>
                </div>
              </div>
              <div class="flex h-110">
                <img src="@/assets/images/rules/time.png" alt="" class="w66 h66 mr20 <md:(w40 h40)" />
                <div>
                  <div class="line-height-28 <md:(text-16 line-height-20)" text="20">Snapshot Time</div>
                  <p class="line-height-22 mt10 <md:(text-12 line-height-16)" text="16 c12 ">Beijing time May 28 12:00 UTC+8</p>
                </div>
              </div>
              <div class="flex h-110">
                <img src="@/assets/images/rules/standard.png" alt="" class="w66 h66 mr20 <md:(w40 h40)" />
                <div>
                  <div class="line-height-28 <md:(text-16 line-height-20)" text="20">Related Subject Matter</div>
                  <p class="line-height-22 mt10 <md:(text-12 line-height-16)" text="16 c12 ">BTC, SATS, ORDI, RATS, DEPI, BDIN, MICE, MMSS,BTCS, CSAS, PINN, INSC, LIGO, ETHI, POLS, BNBS, PIZZA</p>
                </div>
              </div>
              <div class="flex h-110">
                <img src="@/assets/images/rules/tle.png" alt="" class="w66 h66 mr20 <md:(w40 h40)" />
                <div>
                  <div class="line-height-28 <md:(text-16 line-height-20)" text="20">Data Required</div>
                  <p class="line-height-22 mt10 <md:(text-12 line-height-16)" text="16 c12 ">The number and total value of assets held by all relevant addresses at the time of the snapshot</p>
                </div>
              </div>
              <p class="<md:(text-12)" text="16 c13">The above assets are all calculated based on the BTC value at the snapshot time</p>
            </div>
          </div>
          <h1 class="mt50 mb30 <md:(my20 text-16)" text="20">The corresponding rules between laddering and integration</h1>
          <div class="grid grid-cols-11 <md:(flex flex-col)" flex="~">
            <div class="w100% h164 <md:(flex h60)">
              <div class="bg-bg3 w100% h82 fxc b-r-none! ladder <md:(h60)" text="14">
                <div>Position Value</div>
                <div>(BTC-Based)</div>
              </div>
              <div class="bg-bg3 w100% h82 fcc b-r-none! integral <md:(h60)" text="14">Integral</div>
            </div>
            <div v-for="(item, i) in brc20Rules" :key="i" class="w100% h164 rules <md:(flex h60)">
              <div class="w100% h82 fxc ladder <md:(h60)" text="14">
                <div>{{ item.value }}</div>
              </div>
              <div class="w100% h82 fcc integral <md:(h60)" text="14">{{ item.integral }}</div>
            </div>
          </div>
        </el-tab-pane>
        <!-- Runes 快照 -->
        <el-tab-pane label="Runes Snapshot" name="second">
          <div class="flex justify-between mt60 h590 <md:(mt20 hauto flex-col )">
            <div class="w670 h100% <md:(w100%)">
              <img src="@/assets/images/rules/runes.png" alt="" class="w100% h100%" />
            </div>
            <div class="w440 h100% flex flex-col justify-around <md:(w100%)">
              <div class="flex h-110">
                <img src="@/assets/images/rules/tle.png" alt="" class="w66 h66 mr20 <md:(w40 h40)" />
                <div>
                  <div class="line-height-28 <md:(text-16 line-height-20)" text="20">Snapshot Object</div>
                  <p class="line-height-22 mt10 <md:(text-12 line-height-16)" text="16 c12 ">The wallet holding Runes assets on the BTC layer 1 main chain</p>
                </div>
              </div>
              <div class="flex h-110">
                <img src="@/assets/images/rules/time.png" alt="" class="w66 h66 mr20 <md:(w40 h40)" />
                <div>
                  <div class="line-height-28 <md:(text-16 line-height-20)" text="20">Snapshot Time</div>
                  <p class="line-height-22 mt10 <md:(text-12 line-height-16)" text="16 c12 ">Beijing time May 28 12:00 UTC+8</p>
                </div>
              </div>
              <div class="flex h-110">
                <img src="@/assets/images/rules/standard.png" alt="" class="w66 h66 mr20 <md:(w40 h40)" />
                <div>
                  <div class="line-height-28 <md:(text-16 line-height-20)" text="20">Related Subject Matter</div>
                  <p class="line-height-22 mt10 <md:(text-12 line-height-16)" text="16 c12 ">DOG•GO•TO•THE•MOON, RSIC•GENESIS•RUNE•MEME•ECONOMICS</p>
                </div>
              </div>
              <div class="flex h-110">
                <img src="@/assets/images/rules/tle.png" alt="" class="w66 h66 mr20 <md:(w40 h40)" />
                <div>
                  <div class="line-height-28 <md:(text-16 line-height-20)" text="20">Data Required</div>
                  <p class="line-height-22 mt10 <md:(text-12 line-height-16)" text="16 c12 ">The number and total value of assets held by all relevant addresses at the time of the snapshot</p>
                </div>
              </div>
              <p class="<md:(text-12)" text="16 c13">The above assets are all calculated based on the BTC value at the snapshot time</p>
            </div>
          </div>
          <h1 class="mt50 mb30 <md:(my20 text-16)" text="20">The corresponding rules between laddering and integration</h1>
          <div class="grid grid-cols-11 <md:(flex flex-col)" flex="~">
            <div class="w100% h164 <md:(flex h60)">
              <div class="bg-bg3 w100% h82 fxc b-r-none! ladder <md:(h60)" text="14">
                <div>Position Value</div>
                <div>(BTC-Based)</div>
              </div>
              <div class="bg-bg3 w100% h82 fcc b-r-none! integral <md:(h60)" text="14">Integral</div>
            </div>
            <div v-for="(item, i) in runesRules" :key="i" class="w100% h164 rules <md:(flex h60)">
              <div class="w100% h82 fxc ladder <md:(h60)" text="14">
                <div>{{ item.value }}</div>
              </div>
              <div class="w100% h82 fcc integral <md:(h60)" text="14">{{ item.integral }}</div>
            </div>
          </div>
        </el-tab-pane>
        <!-- Ordinals NFT 快照 -->
        <el-tab-pane label="Ordinals NFT Snapshot" name="third">
          <div class="flex justify-between mt60 h590 <md:(mt20 hauto flex-col )">
            <div class="w670 h100% <md:(w100%)">
              <img src="@/assets/images/rules/ordinals.png" alt="" class="w100% h100%" />
            </div>
            <div class="w440 h100% flex flex-col justify-around <md:(w100%)">
              <div class="flex h-110">
                <img src="@/assets/images/rules/tle.png" alt="" class="w66 h66 mr20 <md:(w40 h40)" />
                <div>
                  <div class="line-height-28 <md:(text-16 line-height-20)" text="20">Snapshot Object</div>
                  <p class="line-height-22 mt10 <md:(text-12 line-height-16)" text="16 c12 ">Ordinals NFT asset holding wallet on BTC layer 1 main chain</p>
                </div>
              </div>
              <div class="flex h-110">
                <img src="@/assets/images/rules/time.png" alt="" class="w66 h66 mr20 <md:(w40 h40)" />
                <div>
                  <div class="line-height-28 <md:(text-16 line-height-20)" text="20">Snapshot Time</div>
                  <p class="line-height-22 mt10 <md:(text-12 line-height-16)" text="16 c12 ">Beijing time May 28 12:00 UTC+8</p>
                </div>
              </div>
              <div class="flex h-110">
                <img src="@/assets/images/rules/standard.png" alt="" class="w66 h66 mr20 <md:(w40 h40)" />
                <div>
                  <div class="line-height-28 <md:(text-16 line-height-20)" text="20">Related Subject Matter</div>
                  <p class="line-height-22 mt10 <md:(text-12 line-height-16)" text="16 c12 ">Bitcoin Puppets, NodeMonkes, Bitcoin Frogs, Quantum Cats, Blob</p>
                </div>
              </div>
              <div class="flex h-110">
                <img src="@/assets/images/rules/tle.png" alt="" class="w66 h66 mr20 <md:(w40 h40)" />
                <div>
                  <div class="line-height-28 <md:(text-16 line-height-20)" text="20">Data Required</div>
                  <p class="line-height-22 mt10 <md:(text-12 line-height-16)" text="16 c12 ">The number and total value of assets held by all relevant addresses at the time of the snapshot</p>
                </div>
              </div>
              <p class="<md:(text-12)" text="16 c13">The above assets are all calculated based on the BTC value at the snapshot time</p>
            </div>
          </div>
          <h1 class="mt50 mb30 <md:(my20 text-16)" text="20">The corresponding rules between laddering and integration</h1>
          <div class="grid grid-cols-11 <md:(flex flex-col)" flex="~">
            <div class="w100% h164 <md:(flex h60)">
              <div class="bg-bg3 w100% h82 fxc b-r-none! ladder <md:(h60)" text="14">
                <div>Position Value</div>
                <div>(BTC-Based)</div>
              </div>
              <div class="bg-bg3 w100% h82 fcc b-r-none! integral <md:(h60)" text="14">Integral</div>
            </div>
            <div v-for="(item, i) in ordinalsRules" :key="i" class="w100% h164 rules <md:(flex h60)">
              <div class="w100% h82 fxc ladder <md:(h60)" text="14">
                <div>{{ item.value }}</div>
              </div>
              <div class="w100% h82 fcc integral <md:(h60)" text="14">{{ item.integral }}</div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeName = ref('first');

// BRC-20 快照阶梯化与积分对应规则
const brc20Rules = [
  {
    value: '0-0.002',
    integral: 200
  },
  {
    value: '0.002-0.01',
    integral: 500
  },
  {
    value: '0.01-0.02',
    integral: 1100
  },
  {
    value: '0.02-0.04',
    integral: 2400
  },
  {
    value: '0.04-0.1',
    integral: 3300
  },
  {
    value: '0.1-0.2',
    integral: 5000
  },
  {
    value: '0.2-0.4',
    integral: 6000
  },
  {
    value: '0.4-1',
    integral: 8000
  },
  {
    value: '1-2',
    integral: 10000
  },
  {
    value: '2 or more',
    integral: 25000
  }
];
// Runes 快照阶梯化与积分对应规则
const runesRules = [
  {
    value: '0-0.002',
    integral: 200
  },
  {
    value: '0.002-0.01',
    integral: 500
  },
  {
    value: '0.01-0.02',
    integral: 1100
  },
  {
    value: '0.02-0.04',
    integral: 2400
  },
  {
    value: '0.04-0.1',
    integral: 3300
  },
  {
    value: '0.1-0.2',
    integral: 5000
  },
  {
    value: '0.2-0.4',
    integral: 6000
  },
  {
    value: '0.4-1',
    integral: 8000
  },
  {
    value: '1-2',
    integral: 10000
  },
  {
    value: '2 or more',
    integral: 25000
  }
];
// Ordinals NFT 快照阶梯化与积分对应规则
const ordinalsRules = [
  {
    value: '0-0.002',
    integral: 200
  },
  {
    value: '0.002-0.01',
    integral: 500
  },
  {
    value: '0.01-0.02',
    integral: 1100
  },
  {
    value: '0.02-0.04',
    integral: 2400
  },
  {
    value: '0.04-0.1',
    integral: 3300
  },
  {
    value: '0.1-0.2',
    integral: 5000
  },
  {
    value: '0.2-0.4',
    integral: 6000
  },
  {
    value: '0.4-1',
    integral: 8000
  },
  {
    value: '1-2',
    integral: 10000
  },
  {
    value: '2 or more',
    integral: 25000
  }
];
</script>

<style scoped lang="scss">
:deep(.el-tabs__nav) {
  height: 68px;
  width: 100%;
  justify-content: space-around;
}
:deep(.el-tabs__item) {
  height: auto;
  color: var(--font-color12);
  padding: 0;
  font-size: 20px;
}
:deep(.el-tabs__item.is-active) {
  color: var(--font-color9);
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
    height: 2px;
    background: var(--font-color13);
  }
}
:deep(.el-tabs__nav-wrap::after) {
  background-color: var(--bg6);
}

.ladder {
  border-top: 1px solid rgba(255, 255, 255, 0.14);

  &:nth-child(n + 1) {
    border-right: 1px solid rgba(255, 255, 255, 0.14);
  }
}
.integral {
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  &:nth-child(n + 1) {
    border-right: 1px solid rgba(255, 255, 255, 0.14);
  }
}

@media (max-width: 768px) {
  :deep(.el-tabs__nav) {
    height: 50px;
  }
  :deep(.el-tabs__item) {
    font-size: 14px;
    &:nth-child(3) {
      padding: 0 20px;
    }
  }
  :deep(.el-tabs__nav-scroll) {
    overflow-x: auto;
  }
  .ladder {
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    border-left: 1px solid rgba(255, 255, 255, 0.14);
    border-right: none !important;
  }
  .integral {
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    border-left: 1px solid rgba(255, 255, 255, 0.14);
    border-bottom: none !important;
  }
  .rules {
    &:last-child {
      .ladder {
        border-bottom: 1px solid rgba(255, 255, 255, 0.14);
      }
      .integral {
        border-bottom: 1px solid rgba(255, 255, 255, 0.14) !important;
      }
    }
  }
}
</style>
