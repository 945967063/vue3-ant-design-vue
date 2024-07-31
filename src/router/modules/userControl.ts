import { RouteRecordRaw } from 'vue-router';
const UserControlRouter: RouteRecordRaw = {
  path: '/userControl',
  name: 'UserControl',
  component: () => import('@/layout/index.vue'),
  redirect: '/userControl',
  meta: {
    name: '用户管理',
    icon: 'Homeshouye',
    btnPermission: [],
  },
  children: [
    {
      path: '/userControl',
      name: 'UserControlIndex',
      component: () => import('@/views/userControl/index.vue'),
    },
  ],
};
export default UserControlRouter;
