<script setup lang="ts">
  import LaySider from './lay-sider/index.vue';
  import LayHeader from './lay-header/index.vue';
  import LayContent from './lay-content/index.vue';
  import Setting from './setting/index.vue';
  import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
  import useStore from '@/store';
  const { configuration } = useStore();
  configuration.applySystemTheme();
  const collapsed = ref<boolean>(false);
</script>

<template>
  <Configprovider>
    <LayHeader>
      <template v-if="configuration.configuration.navMode === 'topmenu'" #menu>
        <LaySider />
      </template>
    </LayHeader>

    <a-layout>
      <a-layout-sider
        v-if="configuration.configuration.navMode === 'sidemenu'"
        :theme="configuration.configuration.themeType"
        v-model:collapsed="collapsed"
        collapsible
      >
        <template #trigger>
          <menu-unfold-outlined v-if="collapsed" class="trigger" />
          <menu-fold-outlined v-else class="trigger" />
        </template>
        <LaySider />
      </a-layout-sider>

      <LayContent></LayContent>
    </a-layout>
    <Setting />
  </Configprovider>
</template>

<style lang="scss" scoped></style>
