import { RouteRecordRaw } from 'vue-router';
const SliceBankRouter: RouteRecordRaw = {
  path: '/sliceBank',
  name: 'SliceBank',
  component: () => import('@/layout/index.vue'),
  redirect: '/sliceBank/publicSlice',
  meta: {
    keepAlive: false,
    name: '切片库',
    icon: 'Homeshouye',
    btnPermission: [],
  },
  children: [
    {
      path: '/sliceBank/publicSlice',
      name: 'PublicSlice',
      component: () => import('@/views/sliceBank/publicSlice/index.vue'),
      meta: {
        keepAlive: false,
        name: '公共切片',
        icon: 'Homeshouye',
        btnPermission: [],
      },
    },
    {
      path: '/sliceBank/mySlice',
      name: 'MySlice',
      component: () => import('@/views/sliceBank/mySlice/index.vue'),
      meta: {
        keepAlive: false,
        name: '我的切片',
        icon: 'Homeshouye',
        btnPermission: [],
      },
    },
    {
      path: '/sliceBank/recycle',
      name: 'Recycle',
      component: () => import('@/views/sliceBank/recycle/index.vue'),
      meta: {
        keepAlive: false,
        name: '回收站',
        icon: 'Homeshouye',
        btnPermission: [],
      },
    },
  ],
};
export default SliceBankRouter;
