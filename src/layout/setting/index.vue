<template>
  <a-drawer
    placement="right"
    :closable="false"
    :open="configuration.configuration.isDrawerOpen"
    @close="configuration.configuration.isDrawerOpen = false"
  >
    <a-descriptions title="主题色" :column="9">
      <a-descriptions-item v-for="item in themeColors" :key="item.key">
        <div class="cursor-pointer select-none">
          <a-tooltip :title="item.title">
            <a-tag :color="item.value" @click="setThemeColor(item.value)">
              <span :style="{ visibility: getThemeColorVisible(item.value) }">✔</span>
            </a-tag>
          </a-tooltip>
        </div>
      </a-descriptions-item>
    </a-descriptions>

    <a-descriptions title="导航模式" :column="5">
      <a-descriptions-item v-for="item in layouts" :key="item.value">
        <div
          class="style-checbox-item"
          :class="{ active: configuration.configuration.navMode === item.value }"
          @click="setLayout(item.value)"
        >
          <div
            v-if="item.value === 'sidemenu'"
            class="w-[40px] h-[38px] cursor-pointer bg-[url('@/assets/svg/sidemenu.svg')] bg-center bg-cover bg-no-repeat"
          ></div>
          <div
            v-if="item.value === 'topmenu'"
            class="w-[40px] h-[38px] cursor-pointer bg-[url('@/assets/svg/topmenu.svg')] bg-center bg-cover bg-no-repeat"
          ></div>
        </div>
      </a-descriptions-item>
    </a-descriptions>

    <a-descriptions title="页面显示" :column="1">
      <a-descriptions-item v-for="item in uiSettings" :key="item.value">
        <div class="w-full flex justify-between">
          {{ item.label }}
          <a-switch
            v-model:checked="configuration.configuration[item.value]"
            checked-children="开"
            un-checked-children="关"
          />
        </div>
      </a-descriptions-item>
    </a-descriptions>
  </a-drawer>
</template>

<script lang="ts" setup>
  import useStore from '@/store';
  import { uiSettings, themeColors, layouts } from './constant';
  const { configuration } = useStore();
  const setThemeColor = (color: string) => {
    configuration.configuration.themeColor = color;
    const app = document.getElementById('app');
    app?.style.setProperty('--theme-color', color);
  };
  const getThemeColorVisible = (color: string) =>
    configuration.configuration.themeColor === color ? 'visible' : 'hidden';

  const setLayout = (layout: string) => {
    configuration.configuration.navMode = layout;
    configuration.configuration.isDrawerOpen = false;
  };
</script>

<style lang="scss" scoped>
  .style-checbox-item {
    position: relative;
    cursor: pointer;

    &.active::after {
      content: '✔';
      position: absolute;
      right: 8px;
      bottom: 4px;
      color: var(--theme-color);
    }
  }
</style>
