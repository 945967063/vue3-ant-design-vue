const plugins = [];
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console');
}
module.exports = {
  plugins: plugins,
  presets: ['@vue/cli-plugin-babel/preset'],
};
