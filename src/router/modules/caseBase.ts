import { RouteRecordRaw } from 'vue-router';
const CaseBaseRouter: RouteRecordRaw = {
  path: '/caseBase',
  name: 'CaseBase',
  component: () => import('@/layout/index.vue'),
  redirect: '/caseBase',
  meta: {
    name: '病例库',
    icon: 'Homeshouye',
    btnPermission: [],
  },
  children: [
    {
      path: '/caseBase',
      name: 'CaseBaseIndex',
      component: () => import('@/views/caseBase/index.vue'),
    },
  ],
};
export default CaseBaseRouter;
