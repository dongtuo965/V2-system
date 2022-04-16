import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from 'vuex'
import * as echarts from 'echarts'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh', // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
  messages: {
    'zh': require('@/lang/zh.js'),  // 本地资源文件，我这里配2个语言，中文&英文，src下根据个人情况放置
    'en': require('@/lang/en.js')
  }
});
// if (process.env.NODE_ENV == "development") {
  require('@/mock/mock.js')
// }

Vue.prototype.$echarts = echarts
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './router/directives.js';
import "@/assets/iconfont/iconfont.css";
import dataV from '@jiaminghi/data-view'

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(dataV)

Vue.use(Viewer);
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
    ak: 'eXZc4QuhhxKLfqQ9PIuidXFUU0M0hhzg'
});
// Viewer.setDefaults

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
