<template>
  <a-sub-menu
    v-if="props.item.children && props.item.children.length && props.item.children[0].meta"
    :key="props.item.children[0].path"
  >
    <template #icon>
      <CrownTwoTone />
    </template>
    <template #title>{{ props.item.meta?.name }}</template>
    <template v-for="child in props.item.children || []" :key="child.name">
      <MenuList :item="child" />
    </template>
  </a-sub-menu>
  <a-menu-item
    :key="props.item.path"
    v-else
    @click="router.push(props.item.path)"
    class="select-none"
  >
    <template #icon>
      <CrownTwoTone />
    </template>
    <span>{{ props.item.meta?.name }}</span>
  </a-menu-item>
</template>
<script lang="ts" setup>
  import { CrownTwoTone } from '@ant-design/icons-vue';
  import { RouteRecordRaw } from 'vue-router';

  const props = defineProps({
    item: {
      type: Object as PropType<RouteRecordRaw>,
      default: () => ({}),
    },
  });
  const router = useRouter();
</script>
