import { RouteRecordRaw } from 'vue-router';
const PersonalCenterRouter: RouteRecordRaw = {
  path: '/personalCenter',
  name: 'PersonalCenter',
  component: () => import('@/layout/index.vue'),
  redirect: '/personalCenter',
  meta: {
    name: '个人中心',
    icon: 'Homeshouye',
    btnPermission: [],
  },
  children: [
    {
      path: '/personalCenter',
      name: 'PersonalCenterIndex',
      component: () => import('@/views/personalCenter/index.vue'),
    },
  ],
};
export default PersonalCenterRouter;
