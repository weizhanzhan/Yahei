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
      component:()=>import('../views/home/index.vue'),
      children:[
        {
          path:'/overview',
          component:()=>import('../views/overview/index.vue')
        },
        {
          path:'/todo',
          component:()=>import('../views/everdo/index.vue')
        },
        {
          path:'/setting',
          component:()=>import('../views/setting/index.vue')
        }
      ]
    },
    {
      path:'/action',
      component:()=>import('../views/action/index.vue')
    }
  ]
})

export default router