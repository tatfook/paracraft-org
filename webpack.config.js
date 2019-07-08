'use strict';
// Document：https://www.yuque.com/easy-team/easywebpack 和 https://www.yuque.com/easy-team/egg-vue 
module.exports = {
  plugins: {
    imagemini: false
  },
  alias: {
    '@': 'app/web',
    asset: 'app/web/assets',
  },
  loaders: {
    scss: true,
  },
};