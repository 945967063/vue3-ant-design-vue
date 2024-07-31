import { RouteRecordRaw } from 'vue-router';
const SystemSettingsRouter: RouteRecordRaw = {
  path: '/systemSettings',
  name: 'SystemSettings',
  component: () => import('@/layout/index.vue'),
  redirect: '/systemSettingsLog',
  meta: {
    name: '系统设置',
    icon: 'Homeshouye',
    btnPermission: [],
  },
  children: [
    {
      path: '/systemSettingsLog',
      name: 'SystemSettingsLog',
      component: () => import('@/views/systemSettings/systemLog/index.vue'),
      meta: {
        keepAlive: true,
        name: '系统日志',
        icon: 'Homeshouye',
        btnPermission: [],
      },
    },
  ],
};
export default SystemSettingsRouter;
