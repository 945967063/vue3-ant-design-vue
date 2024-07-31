import { RouteRecordRaw } from 'vue-router';
const HomeRouter: RouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: () => import('@/layout/index.vue'),
  redirect: '/home',
  meta: {
    name: '仪表盘',
    icon: 'Homeshouye',
    btnPermission: [],
    keepAlive: true,
  },
  children: [
    {
      path: '/home',
      name: 'HomeIndex',
      component: () => import('@/views/home/index.vue'),
    },
  ],
};
export default HomeRouter;
