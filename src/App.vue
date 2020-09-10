<template>
  <div id="app">
    你好
    <router-link to="/home">home</router-link>
    <router-link to="/action">action</router-link>
    <router-view></router-view>
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
