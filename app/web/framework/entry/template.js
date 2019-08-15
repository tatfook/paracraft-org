import Layout from 'component/layout/index';
import plugin from 'framework/plugin';
import VueQrcode from '@chenfengyuan/vue-qrcode';

export default function(Vue) {
  Vue.use(plugin);
  Vue.component(Layout.name, Layout);
  Vue.component(VueQrcode.name, VueQrcode)
}