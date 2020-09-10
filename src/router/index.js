/*
 * @Author: your name
 * @Date: 2020-09-10 17:08:32
 * @LastEditTime: 2020-09-10 17:19:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yahei-vue\src\router\index.js
 */
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:'hash',
  routes:[
    {
      path:'/',
      component:()=>import('../App.vue'),
      redirect:'/home',
    },
    {
      path:'/home',
      component:()=>import('../views/home/index.vue')
    },
    {
      path:'/action',
      component:()=>import('../views/action/index.vue')
    }
  ]
})

export default router