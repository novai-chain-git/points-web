<template>
  <el-dropdown trigger="click" @command="changeLanguage">
    <div class="fyc cursor-pointer">
      <!-- <img class="w16" :src="language.logo" alt=""> -->
      {{ $t(language.name) }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in langList" :key="item.value" :command="item.value" :disabled="language === item.value">
          {{ $t(item.name) }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { langList } from '@/lang/index.js';
import { useGlobalStore } from '@/store/modules/global.js';
const i18n = useI18n();
const globalStore = useGlobalStore();
const language = computed(() => langList.find((d) => d.value === globalStore.language) ?? langList[0]);

const changeLanguage = (lang) => {
  i18n.locale.value = lang;
  globalStore.setGlobalState('language', lang);
};
</script>
