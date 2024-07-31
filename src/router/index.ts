import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { App } from 'vue';
import { CreateRouterGuards } from './guards';
import HomeRouter from './modules/home';
import SliceBankRouter from './modules/sliceBank';
import CaseBaseRouter from './modules/caseBase';
import UserControlRouter from './modules/userControl';
import StorageControlRouter from './modules/storageControl';
import AuthControlRouter from './modules/authControl';
import PersonalCenterRouter from './modules/personalCenter';
import SystemSettingsRouter from './modules/systemSettings';
export const BaseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
];
export const PageNotFound: RouteRecordRaw = {
  path: '/:path(.*)',
  name: '404',
  component: () => import('@/views/errer/index.vue'),
};
export const AsyncRoutes: RouteRecordRaw[] = [
  /**仪表盘 */
  HomeRouter,
  /**切片库 */
  SliceBankRouter,
  /**病例库 */
  CaseBaseRouter,
  /**用户管理 */
  UserControlRouter,
  /**存储管理 */
  StorageControlRouter,
  /**权限管理 */
  AuthControlRouter,
  /**个人中心 */
  PersonalCenterRouter,
  /**系统设置 */
  SystemSettingsRouter,
];
const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes: BaseRoutes,
});
export function mountRouter(app: App) {
  app.use(router);
  CreateRouterGuards(router);
}
export default router;
