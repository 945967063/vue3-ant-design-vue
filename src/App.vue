<script setup lang="ts">
  import useStore from '@/store';
  const { configuration } = useStore();
  configuration.applySystemTheme();
  const app = document.getElementById('app');
  app?.style.setProperty('--theme-color', configuration.configuration.themeColor);
</script>

<template>
  <Configprovider>
    <router-view />
  </Configprovider>
</template>

<style lang="scss" scoped></style>
