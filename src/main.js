/*
 * @Author: your name
 * @Date: 2020-09-09 12:09:48
 * @LastEditTime: 2020-09-11 13:32:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yahei-vue\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify' 
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
