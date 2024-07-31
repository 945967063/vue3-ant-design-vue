import { RouteRecordRaw } from 'vue-router';
const StorageControlRouter: RouteRecordRaw = {
  path: '/storageControl',
  name: 'StorageControl',
  component: () => import('@/layout/index.vue'),
  redirect: '/storageControl',
  meta: {
    name: '存储管理',
    icon: 'Homeshouye',
    btnPermission: [],
  },
  children: [
    {
      path: '/storageControl',
      name: 'StorageControlIndex',
      component: () => import('@/views/storageControl/index.vue'),
    },
  ],
};
export default StorageControlRouter;
