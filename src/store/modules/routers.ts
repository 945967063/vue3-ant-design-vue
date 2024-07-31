import { BaseRoutes, PageNotFound, AsyncRoutes } from '@/router/index';
import { RouteRecordRaw } from 'vue-router';
export default defineStore('routers', {
  state: () => {
    return {
      router: [] as RouteRecordRaw[],
      asyncRouter: [] as RouteRecordRaw[],
      selectedKeys: ['/'],
      openKeys: [] as string[],
    };
  },

  actions: {
    /**获取路由 */
    async getAsyncRouter() {
      this.router = BaseRoutes.concat(AsyncRoutes).concat(PageNotFound);
      this.asyncRouter = AsyncRoutes;
      return this.router;
    },
    /**重置数据 */
    resetAllRouter() {
      this.router = [];
      this.asyncRouter = [];
      this.selectedKeys = ['/'];
      this.openKeys = [];
    },
  },
  //按需配置数据持久化 这里指定变量num保持持久化
  persist: {
    //默认名称为当前store唯一标识 这里即home
    key: 'vue-login',
    //默认localStorage 本地储存
    //这里建议临时储存sessionStorage 也可写成window.sessionStorage
    storage: localStorage,
    //默认当前store里的所有变量都持久化
    paths: ['selectedKeys', 'openKeys'],
  },
});
