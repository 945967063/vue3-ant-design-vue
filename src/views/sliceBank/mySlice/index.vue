<template>
  <a-directory-tree
    class="w-[200px]"
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    multiple
    :tree-data="treeData"
  ></a-directory-tree>
</template>
<script lang="ts" setup>
  import type { TreeProps } from 'ant-design-vue';
  import { ref } from 'vue';

  const expandedKeys = ref<string[]>(['0-0', '0-1']);
  const selectedKeys = ref<string[]>([]);
  const treeData: TreeProps['treeData'] = [
    {
      title: 'parent 0',
      key: '0-0',
      children: [
        {
          title: 'leaf 0-0',
          key: '0-0-0',
          children: [
            {
              title: 'leaf 0-0',
              key: '0-0-0-1',
              children: [
                {
                  title: 'leaf 0-0',
                  key: '0-0-1-1',
                  children: [
                    {
                      title: 'leaf 0-0',
                      key: '0-0-2-1',
                      isLeaf: true,
                    },
                    {
                      title: 'leaf 0-1',
                      key: '0-0-2-2',
                      isLeaf: true,
                    },
                  ],
                },
                {
                  title: 'leaf 0-1',
                  key: '0-0-1-2',
                  isLeaf: true,
                },
              ],
            },
            {
              title: 'leaf 0-1',
              key: '0-0-0-2',
              isLeaf: true,
            },
          ],
        },
        {
          title: 'leaf 0-1',
          key: '0-0-1',
          isLeaf: true,
        },
      ],
    },
    {
      title: 'parent 1',
      key: '0-1',
      children: [
        {
          title: 'leaf 1-0',
          key: '0-1-0',
          isLeaf: true,
        },
        {
          title: 'leaf 1-1',
          key: '0-1-1',
          isLeaf: true,
        },
      ],
    },
  ];
</script>
