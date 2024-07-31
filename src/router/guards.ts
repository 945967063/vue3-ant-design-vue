import { Router, RouteRecordRaw } from 'vue-router';
import useStore from '@/store';
import router from './index';

// 白名单(不需要登录检测)
const whiteList = ['Login'];

export function CreateRouterGuards(router: Router) {
  router.beforeEach(async (to) => {
    const { routers } = useStore();
    if (!whiteList.some((n) => n === to.name)) {
      // 如果没有登录 跳转到登录页页面
    }
    // 如果路由没有初始化 则初始化路由
    if (routers.router.length === 0) {
      const list = await routers.getAsyncRouter();
      list.forEach((item: RouteRecordRaw) => {
        router.addRoute(item);
      });
      return to.fullPath;
    }
    return;
  });
  router.onError((error) => {
    console.log(error);
  });
  router.afterEach(() => {
    //do nothing
  });
}
/**
 * 重置路由器，移除不在白名单中的路由
 * 参数： 无
 * 返回值： 无
 */
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !whiteList.some((n) => n === name)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}
