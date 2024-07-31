const { defineConfig } = require('@vue/cli-service');
const { AntDesignVueResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const Timestamp = new Date().getTime();
module.exports = defineConfig({
  publicPath: process.env.VUE_APP_BASE_URL,
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
      require('unplugin-auto-import/webpack')({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue', 'vue-router', 'pinia'],
        dts: 'src/auto-import.d.ts',
        eslintrc: {
          enabled: true, // <-- this
        },
      }),
    ],
    output: {
      filename: 'js/[name].' + Timestamp + '.js',
      chunkFilename: 'js/[name].' + Timestamp + '.js',
    },
  },

  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      });
      return definitions;
    });
  },
  devServer: {
    client: {
      overlay: false,
    },
    open: true,
    port: 9527,
  },
});
