<template>
  <div class="w100% h74 px23 absolute left-0 fyc z-100 <md:(h54 px15)"
	:class="[scrollPosition >= 70 ? 'backdrop-blur-[10px]' : '']" position="fixed top-0 left-0" ref="headerRef">
    <div class="w100% h100% fyc">
      <div class="mr-auto">
        <a href="https://www.novaichain.com/#/">
          <img class="cursor-pointer h-42 <md:(h-29)" src="@/assets/images/logo.svg" alt="" />
        </a>
      </div>

      <div class="fyc <md:hidden" text="14">
        <div v-for="(item, i) in routers">
          <router-link :to="item.path" class="flex h34 line-height-34 cursor-pointer mr40 hover:(b-b-2 b-b-solid b-b-#7BD375)" :class="{ 'b-b-2  b-b-solid b-b-#7BD375': route.path === item.path }" :key="i">
            {{ item.name }}
          </router-link>
        </div>
      </div>
      <ConnectWallet />

      <!--      <div class="flex <md:hidden">-->
      <!--        <a class="ml-24 <md:ml8" href="https://x.com/NovaiActivity" target="_blank">-->
      <!--          <div class="i-icon:twitter"></div>-->
      <!--        </a>-->
      <!--        <a class="ml-24 <sm:ml8" href="https://t.me/Novaichain" target="_blank">-->
      <!--          <div class="i-icon:telegram"></div>-->
      <!--        </a>-->
      <!--&lt;!&ndash;        <a class="ml-24 <sm:ml8" href="https://www.facebook.com/alphahomeRWA" target="_blank">&ndash;&gt;-->
      <!--&lt;!&ndash;          <div class="i-icon:facebook"></div>&ndash;&gt;-->
      <!--&lt;!&ndash;        </a>&ndash;&gt;-->
      <!--      </div>-->
      <!--      <div class="w20 hidden <md:(block ml-auto)" @click="drawer = true">-->
      <!--        <img src="@/assets/images/menu.png" alt="" class="w20" />-->
      <!--      </div>-->
    </div>
  </div>
  <el-drawer v-model="drawer" direction="rtl" :before-close="handleClose" lock-scroll :show-close="false" :with-header="false" size="150" class="munu_drawer">
    <div class="fcc mb20">
      <ConnectWallet />
    </div>
    <div v-for="(item, i) in routers">
      <router-link :to="item.path" class="block w100% h44 line-height-44 cursor-pointer mr40 text-14 text-center border-none hover:()" :class="{ 'bg-bg8 text-c16': route.path === item.path }" :key="i" @click="drawer = false">
        {{ item.name }}
      </router-link>
    </div>
    <div class="flex justify-around mt20">
      <a class="ml-24 <md:ml8" href="https://x.com/novaichain?s=11" target="_blank">
        <div class="i-icon:twitter"></div>
      </a>
      <a class="ml-24 <sm:ml8" href="https://t.me/Novaichain" target="_blank">
        <div class="i-icon:telegram"></div>
      </a>
      <!--      <a class="ml-24 <sm:ml8" href="https://www.facebook.com/alphahomeRWA" target="_blank">-->
      <!--        <div class="i-icon:facebook"></div>-->
      <!--      </a>-->
    </div>
  </el-drawer>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ConnectWallet from './ConnectWallet.vue';

const router = useRouter();
const route = useRoute();
const toHome = () => {
  router.push('/');
};
const headerRef = ref(null);
let scrollY = window.scrollY;

const pageScroll = () => {
  const currentY = window.scrollY;
  if (currentY <= scrollY) {
    // 向上
    //headerRef.value.classList.remove('header_hidder');
  } else {
    // 向下
    //headerRef.value.classList.add('header_hidder');
  }
  if (currentY <= 67) {
    headerRef.value.classList.add('bg0');
  } else {
    headerRef.value.classList.remove('bg0');
  }
  scrollY = currentY;
};

const routers = [
  // {
  //   name: 'Daily Tasks',
  //   path: '/dailyTasks'
  // },
  // {
  //   name: 'Airdrop Rules',
  //   path: '/airdropRules'
  // }
];

const drawer = ref(false);

const handleClose = () => {
  drawer.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', pageScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', pageScroll);
});

const scrollPosition = ref(0);
function handleScroll() {
  scrollPosition.value = window.scrollY || document.documentElement.scrollTop;
}
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
window.addEventListener('scroll', handleScroll);
</script>

<style lang="scss" scoped>
.header_hidder {
  transform: translateY(-100%);
}
.bg0 {
  background: transparent;
}
</style>
<style lang="scss">
.el-drawer__body {
  padding: 0 !important;
  padding-top: 30px !important;
}
</style>
