<template>
  <el-config-provider :locale="en" :size="assemblySize" :button="buttonConfig">
		<!-- <div class="absolute video-bg z-0 w-full h-100vh top1  !z-[-1]">
			<video  src="@/assets/video/bgVideo.mp4" class="object-cover w100% h100%" autoplay muted loop playsinline >

			</video>
		</div> -->
    <Header></Header>
    <div  style="min-height: calc( 100vh); ">
			<router-view v-slot="{ Component }">
      <keep-alive :include="configInfoData.includeList">
        <component class="view-wrap" :key="$route.fullPath" :is="Component" />
      </keep-alive>
    </router-view>
		</div>
		<Footers></Footers>
  </el-config-provider>
</template>
<script setup>
import Footers from '@/components/Footer.vue';
import Header from '@/components/header.vue';
const configInfoData = {
  noNavPageNames: ['layout', 'detailsPage', 'evaluate', 'resources'],
  includeList: []
};
import en from 'element-plus/es/locale/lang/en';
const globalStore = useGlobalStore();
/* import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { getBrowserLang } from '@/utils/index.js';
// init language
const i18n = useI18n();

const language = globalStore.language ?? getBrowserLang();
i18n.locale.value = language;

// element language
const locale = computed(() => {
  if (globalStore.language == 'zh') return zhCn;
  if (globalStore.language == 'en') return en;
  return getBrowserLang() == 'zh' ? zhCn : en;
}); */

// element assemblySize
const assemblySize = computed(() => globalStore.assemblySize);

// element button config
const buttonConfig = reactive({ autoInsertSpace: false });
</script>

<style lang="less">


@font-face {
  font-family: 'DINAlternate-Bold';
  // chrome、firefox、opera、Safari, Android, iOS 4.2+
  src: url(data:application/x-font-ttf;charset=utf-8;base64,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SU5BbHRlcm5hdGUtQm9sZERJTlNjaHJpZnRILiBCZXJ0aG9sZCBBRwBDAG8AcAB5AHIAaQBnAGgAdAAgACgAYwApACAAMQA5ADgAOAAsACAAMQA5ADkAMQAsACAAMgAwADAAMwAgAEwAaQBuAG8AdAB5AHAAZQAgAEwAaQBiAHIAYQByAHkAIABHAG0AYgBIACwAIAB3AHcAdwAuAGwAaQBuAG8AdAB5AHAAZQAuAGMAbwBtAC4AIABBAGwAbAAgAHIAaQBnAGgAdABzACAAcgBlAHMAZQByAHYAZQBkAC4ARABJAE4AIABBAGwAdABlAHIAbgBhAHQAZQBCAG8AbABkAEQASQBOACAAQQBsAHQAZQByAG4AYQB0AGUAIABCAG8AbABkADsAIAA5AC4AMABkADIAZQAxADsAIAAyADAAMQAzAC0AMAA1AC0AMQA2AEQASQBOACAAQQBsAHQAZQByAG4AYQB0AGUAIABCAG8AbABkADkALgAwAGQAMgBlADEARABJAE4AQQBsAHQAZQByAG4AYQB0AGUALQBCAG8AbABkAEQASQBOAFMAYwBoAHIAaQBmAHQASAAuACAAQgBlAHIAdABoAG8AbABkACAAQQBHAAIAAAAAAAD/MwBmAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAAA8AEwAUABUAFgAXABgAGQAaABsAHAAuADoATgBaAAA=) format('truetype');
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: 'Orbitron';
  src: url('@/assets/font/orbitron/orbitron-black.ttf') format('truetype');
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: 'OrbitronBold';
  src: url('@/assets/font/orbitron/orbitron-bold.otf') format('opentype');
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: 'OrbitronMedium';
  src: url('@/assets/font/orbitron/orbitron-medium.ttf') format('truetype');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'OrbitronLight';
  src: url('@/assets/font/orbitron/orbitron-light.ttf') format('truetype');
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: 'PoppinsRegular';
  src: url('@/assets/font/Poppins-Regular.ttf') format('truetype');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'OutfitMedium';
  src: url('@/assets/font/Outfit-Medium.ttf') format('truetype');
  font-style: normal;
  font-weight: normal;
}
html{
  line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    font-family: PoppinsRegular, Pingfang, Arial, Helvetica, sans-serif;
	  font-feature-settings: normal;
    font-variation-settings: normal;
}
body {
  --bg: #000;
  margin: 0;
  font-size: 15px;
  color: #fff;
  line-height: inherit;
  font-family: PoppinsRegular, Pingfang, Arial, Helvetica, sans-serif;
  background-color: #131315;
  // background: var(--bg);
}
::-webkit-scrollbar {
  display: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}
* {
  box-sizing: border-box;
}
p {
  margin: 0;
}

ul,
li {
  list-style: none;
	margin :0;
	padding:0
}

#app,
.view-wrap {
  box-sizing: border-box;
  min-height: calc(100vh - 67px);
}

img {
  display: block;
}

a {
  color: var(--font-color1);
  text-decoration: none;
}

.textjb-lv,.jv-container .jv-button,.bg_jb{
  background-image: linear-gradient(180deg, #5AC27C 0%, #B2E235 100%) !important;

}
.textjb-lv,.jv-container .jv-button{
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* 使文字填充为透明 */
  background-clip: text;  /* 非 Webkit 浏览器使用这个 */
  color: transparent;  /* 必须将字体颜色设置为透明 */
}

:root:root {
  --font-color1: #fff;
  --font-color2: rgba(255, 255, 255, 0.4);
  --font-color3: rgba(255, 255, 255, 0.6);
  --font-color4: #acacac;
  --font-color5: #999;
  --font-color6: #12c987;
  --font-color7: #697b8d;
  --font-color8: #888888;
  --font-color9: #ffffff;
  --font-color10: #1a2c30;
  --font-color11: #000000;
  --font-color12: #9da1a7;
  --font-color13: #7BD375;
  --font-color14: #a7a7a7;
  --font-color15: #a7a69d;
  --font-color16: #57bb60;
  --font-color17: #1bc9ea;
  --font-color18: #ACDE45;
  --bg1: #7837d4;
  --bg2: rgba(255, 255, 255, 0.14);
  --bg3: #0f0f0f;
  --bg4: #000000;
  --bg5: #181818;
  --bg6: #40444d;
  --bg7: rgba(34, 34, 34, 0.44);
  --bg8: rgba(87, 187, 96, 0.04);
  --bg9: #222222;
  --bg10: #121214;
  --br1: #eeeeee;
  --br2: rgba(226, 222, 222, 0.21);
}

/* button {
  --el-button-hover-bg-color: #354C70 !important;
  --el-button-hover-border-color: #354C70 !important;
  --el-button-active-bg-color: #354C70 !important;
  --el-button-active-border-color: #354C70 !important;
} */

// 需要页面底部加 padding 页面。有一个元素 class 为 .pbh
.view-wrap:has(.bottom-wrap) {
  padding-bottom: 180px;
}

@keyframes pointMove {
  from {
    background-position-x: 100vw;
  }
  to {
    background-position-x: 0;
  }
}
</style>
