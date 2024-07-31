import { defineStore } from 'pinia';
export default defineStore('configuration', {
  state: () => ({
    /**设置配置对象 */
    configuration: {
      /**主题色 */
      themeColor: '#650FAA',
      /**dark or light */
      themeType: 'light',
      /**导航栏多语言是否显示 */
      languageVisible: true,
      /**导航栏暗黑模式是否显示 */
      darkModeVisible: true,
      /**菜单宽度 */
      menuWidth: 240,
      /**菜单高度 */
      menuHeight: 48,
      /**是否第一次进入系统 */
      isFirstTime: true,
      /**设置抽屉是否打开 */
      isDrawerOpen: false,
      /**导航模式 */
      navMode: 'sidemenu',
    },
  }),
  actions: {
    /**暗黑切换 */
    toggleDarkMode() {
      if (this.configuration.themeType === 'light') {
        this.configuration.themeType = 'dark';
      } else {
        this.configuration.themeType = 'light';
      }
    },
    /**第一次进入系统，跟随系统主题色  */
    applySystemTheme() {
      if (!this.configuration.isFirstTime) return;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.configuration.themeType = 'dark';
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        this.configuration.themeType = 'light';
      }
      this.configuration.isFirstTime = false;
    },
  },

  //按需配置数据持久化 这里指定变量num保持持久化
  persist: {
    //默认名称为当前store唯一标识 这里即home
    key: 'slice-bank-configuration',
    //默认localStorage 本地储存
    //这里建议临时储存sessionStorage 也可写成window.sessionStorage
    storage: localStorage,
    //默认当前store里的所有变量都持久化
    paths: ['configuration'],
  },
});
