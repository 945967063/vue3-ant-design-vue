<template>
  <div class="w-full" :class="{ 'is-side-menu': isSideMenu }">
    <a-menu
      v-model:openKeys="routers.openKeys"
      v-model:selectedKeys="routers.selectedKeys"
      :mode="isSideMenu ? 'inline' : 'horizontal'"
      :theme="theme"
    >
      <template v-for="item in routers.asyncRouter" :key="item.name">
        <MenuList :item="item"></MenuList>
      </template>
    </a-menu>
  </div>
</template>
<script setup lang="ts">
  import useStore from '@/store';
  import { MenuTheme } from 'ant-design-vue';
  import MenuList from './components/menuList.vue';
  const { configuration, routers } = useStore();
  configuration.applySystemTheme();
  const theme = computed(() => {
    return configuration.configuration.themeType as MenuTheme;
  });
  const currentRoute = useRoute();

  // 跟随页面路由变化，切换菜单选中状态
  watch(
    () => currentRoute.fullPath,
    () => {
      routers.selectedKeys = [currentRoute.fullPath] as string[];
      routers.openKeys = currentRoute.matched.map((n) => {
        if (n.redirect) {
          return n.redirect;
        } else {
          return n.path;
        }
      }) as string[];
    },
    {
      immediate: true,
    }
  );

  /** 侧边栏布局 */
  const isSideMenu = computed(() => configuration.configuration.navMode === 'sidemenu');
</script>
<style lang="scss" scoped>
  :deep(.ant-menu-light.ant-menu-root.ant-menu-inline) {
    border-inline-end: none;
  }
  :deep(.ant-menu-light.ant-menu-root.ant-menu-vertical) {
    border-right: none;
  }
  :deep(.ant-layout-sider-trigger) {
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
  :deep(.ant-menu-horizontal) {
    border-bottom: none;
  }

  .is-side-menu {
    height: calc(100vh - 112px);
    overflow: auto;
  }
</style>
