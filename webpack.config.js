'use strict';
// Document：https://www.yuque.com/easy-team/easywebpack 和 https://www.yuque.com/easy-team/egg-vue 
const Dotenv = require('dotenv-webpack')
const dotnev = new Dotenv()
module.exports = {
  plugins: {
    imagemini: false,
    dotnev
  },
  alias: {
    '@': 'app/web',
    asset: 'app/web/assets',
  },
  loaders: {
    scss: true,
  },
};