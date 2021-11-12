import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from 'vuex'
import * as echarts from 'echarts'

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
// Viewer.setDefaults


Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
