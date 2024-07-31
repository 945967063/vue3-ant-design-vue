import { defineStore } from 'pinia';
import router from '@/router';
export default defineStore('login', {
  state: () => ({
    num: 0,
    /**菜单是否折叠 */
    isCollapse: false,
    /**暗黑切换 */
    theme: 'light',
  }),
  actions: {
    /**退出登录 */
    logout() {
      router.push('/');
    },
  },
  //数据持久化配置 这里是当前所有变量都持久化
  // persist:true

  //按需配置数据持久化 这里指定变量num保持持久化
  persist: {
    //默认名称为当前store唯一标识 这里即home
    key: 'vue-login',
    //默认localStorage 本地储存
    //这里建议临时储存sessionStorage 也可写成window.sessionStorage
    storage: localStorage,
    //默认当前store里的所有变量都持久化
    paths: [],
  },
});
