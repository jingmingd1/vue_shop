import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import global from './css/global.css'
import '../fonts/iconfont.css'

import axios from 'axios' //引入axios
axios.defaults.baseURL = "https://www.liulongbin.top:8888/api/private/v1"
Vue.prototype.$axios = axios; //把axios挂载到vue上


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
    global,
}).$mount('#app')