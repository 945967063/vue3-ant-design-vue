<script setup lang="ts">
  import enUS from 'ant-design-vue/es/locale/en_US';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import useStore from '@/store';
  import useLocale from '@/hooks/locale';
  import { theme } from 'ant-design-vue';
  import 'dayjs/locale/zh-cn';
  const { currentLocale } = useLocale();
  const { configuration } = useStore();
  const locale = computed(() => {
    switch (currentLocale.value) {
      case 'cn':
        return zhCN;
      case 'en':
        return enUS;
      default:
        return enUS;
    }
  });
</script>

<template>
  <a-config-provider
    :locale="locale"
    :theme="{
      token: {
        colorPrimary: configuration.configuration.themeColor,
      },
      algorithm:
        configuration.configuration.themeType === 'dark'
          ? theme.darkAlgorithm
          : theme.defaultAlgorithm,
    }"
  >
    <a-layout class="min-h-screen">
      <slot></slot>
    </a-layout>
  </a-config-provider>
</template>

<style></style>
