/*
 * @Author: weizhanzhan
 * @Date: 2020-09-09 12:09:48
 * @LastEditTime: 2020-09-14 11:00:00
 * @LastEditors: weizhanzhan
 * @Description: 增加全局样式
 * @FilePath: \yahei-vue\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify' 
import moment from 'moment'
import './assets/style/global.scss'
Vue.config.productionTip = false
Vue.prototype.$moment = moment

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
