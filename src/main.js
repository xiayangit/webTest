import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import AmapVue from '@amap/amap-vue'

AmapVue.config.version = '2.0'
AmapVue.config.key = 'baa0d29e0d1edb86ae76a721a6270600'
Vue.use(AmapVue);
new Vue({
  render: h => h(App),
}).$mount('#app')
