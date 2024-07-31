## 介绍

基于 Vue3+Pnpm+ant-design-vue+Vue-Router+Tailwindcss+Eslint+Prettier+Husky+lint-staged+commitlint 的项目。

## 开始

```bash
# 克隆项目
git clone https://github.com/945967063/vue3-ant-design-vue.git

# 进入项目目录
cd vue3-ant-design-vue

# 安装 pnpm
npm i -g pnpm

# 安装依赖
pnpm i

# 启动服务
pnpm dev

```

```bash
# 查看源
pnpm get registry
# 切换淘宝源
pnpm config set registry http://registry.npmmirror.com
#切换默认源
pnpm config set registry https://registry.npmjs.org
```

服务启动成功后，浏览器访问 [http://localhost:9527](http://localhost:9527)

## 预览和修复

```bash

# 代码格式检查
pnpm lint

# 代码格式检查并自动修复
pnpm fix
```

## 规范

#### 1. Git 提交规范

`由于用了commitlint插件，git commit信息里的类型是必须要写的，并且要带英文冒号和空一格，不然提交会报错。`

```bash
feat: 新功能
fix: 修复 bug
add: 增加内容
del: 删除功能
update: 更新功能
docs: 文档更新
style: 颜色、字体大小等变动（不影响代码运行）
build: 构造工具或相关依赖变更
refactor: 代码重构
revert: 撤销，版本回退
test: 添加或修改测试
perf: 提高性能的改动
chore: 构建过程或辅助工具的变更
ci: CI 配置，脚本文件等改动
```

```bash
# <type>后面必须加英文冒号，并且后跟一个空格
git commit -m <type>(<scope>): <description>

# 举个栗子
git commit -m 'fix: 修复了登录缓存问题'
git commit -m 'fix(user): 修复了用户模块token传参问题'
git commit -m 'docs: 更新了自定义组件文档'
```

#### 2. 使用 Husky+Lint-Staged+Commitlint 规范提交

`Husky` 是 git 提交的 hooks 钩子工具。  
`Lint-Staged` 插件会监测暂存区的代码，通过了则允许提交。  
`Commitlint` 用来监测 git 提交的信息规范。
