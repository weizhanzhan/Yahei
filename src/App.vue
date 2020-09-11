<!--
 * @Author: your name
 * @Date: 2020-09-09 12:09:48
 * @LastEditTime: 2020-09-11 14:30:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yahei-vue\src\App.vue
-->
<template>
  <div id="app">  
   <v-app>
      <!-- <router-link to="/home">home</router-link>
      <router-link to="/action">action</router-link> -->
      <router-view></router-view>
   </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted(){
  
  },
  methods:{
  
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
