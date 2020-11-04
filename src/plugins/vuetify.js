/*
 * @Author: weizhanzhan
 * @Date: 2020-09-11 13:31:09
 * @LastEditTime: 2020-09-14 11:08:11
 * @LastEditors: weizhanzhan
 * @Description: 增加主题色
 * @FilePath: \yahei-vue\src\plugins\vuetify.js
 */
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

const opts = {
  theme:{
    themes:{
      light:{
        primary:'#333460',
        secondary:'#40a9ff'
      }
    }
  }
}

export default new Vuetify(opts)