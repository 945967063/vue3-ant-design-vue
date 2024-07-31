import { RouteRecordRaw } from 'vue-router';
const AuthControlRouter: RouteRecordRaw = {
  path: '/authControl',
  name: 'AuthControl',
  component: () => import('@/layout/index.vue'),
  redirect: '/authControl',
  meta: {
    name: '权限管理',
    icon: 'Homeshouye',
    btnPermission: [],
  },
  children: [
    {
      path: '/authControl',
      name: 'AuthControlIndex',
      component: () => import('@/views/authControl/index.vue'),
    },
  ],
};
export default AuthControlRouter;
