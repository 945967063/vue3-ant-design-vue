/** 界面显示相关 */
export const uiSettings = [
  {
    label: '导航栏多语言是否显示',
    value: 'languageVisible',
  },
  {
    label: '导航栏暗黑模式是否显示',
    value: 'darkModeVisible',
  },
] as const;

/** 主题色 */
export const themeColors = [
  {
    title: '酱紫（默认）',
    key: 'purple',
    value: '#650FAA',
  },
  {
    title: '薄暮',
    key: 'dust',
    value: '#F5222D',
  },
  {
    title: '火山',
    key: 'volcano',
    value: '#FA541C',
  },
  {
    title: '日暮',
    key: 'sunset',
    value: '#FAAD14',
  },
  {
    title: '明青',
    key: 'cyan',
    value: '#13C2C2',
  },
  {
    title: '极光绿',
    key: 'green',
    value: '#52C41A',
  },
  {
    title: '极客蓝',
    key: 'geekblue',
    value: '#2F54EB',
  },
  {
    title: '日出',
    key: 'sunrise',
    value: '#fadb14',
  },
] as const;

/** 导航模式（布局方式） */
export const layouts = [
  {
    label: '侧边菜单布局',
    value: 'sidemenu',
  },
  {
    label: '顶部菜单布局',
    value: 'topmenu',
  },
] as const;
