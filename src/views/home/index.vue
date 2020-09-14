<!--
 * @Author: your name
 * @Date: 2020-09-10 17:05:47
 * @LastEditTime: 2020-09-14 09:25:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yahei-vue\src\views\home\index.vue
-->
<template>
  <div class="d-flex homepage">
    <div style="width:200px">
      <v-navigation-drawer
        width="200"
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :right="right"
        :permanent="permanent"
        :src="bg"
        absolute
        dark
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="https://zhan961023.gitee.io/zhanwei/manda.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>weizhanzhan</v-list-item-title>
              <v-list-item-subtitle>挖矿者</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in todoMenus"
            :key="item.title"
            link
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

            <v-divider></v-divider>

          <v-list-item
            v-for="item in commonMenus"
            :key="item.title"
            link
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      drawer: true,
        todoMenus: [
          { title: 'Overview', icon: 'mdi-view-dashboard',path:'/overview' },
          { title: 'EverDo', icon: 'mdi-image', path:'/todo'},
        ],
        commonMenus: [
         
          { title: 'Setting', icon: 'mdi-help-box',path:'/setting' },
        ],
        color: 'primary',
        colors: [
          'primary',
          'blue',
          'success',
          'red',
          'teal',
        ],
        right: false,
        permanent: true,
        miniVariant: false,
        expandOnHover: false,
        background: true,
    }
  },
  computed: {
      bg () {
        // var bg = 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg'
        // var bg1 = 'https://cdn.pixabay.com/photo/2020/08/31/09/33/beach-5531919_960_720.jpg'
        return this.background ? 'https://picb.zhimg.com/v2-72ffea44c4b8bbf7f4241e62370d7a86_r.jpg' : undefined
      },
    },
}
</script>

<style lang="scss" scoped>
.homepage{
  height: 100%;
  .content{
    flex: 1;
    overflow: auto;
  }
}

</style>
