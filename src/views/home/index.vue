<!--
 * @Author: your name
 * @Date: 2020-09-10 17:05:47
 * @LastEditTime: 2020-09-11 15:40:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yahei-vue\src\views\home\index.vue
-->
<template>
  <div>
    <!-- <v-row justify="space-around">
      <v-col cols="12">
        <v-select
          v-model="color"
          :items="colors"
          label="Color"
        ></v-select>
      </v-col>

      <v-switch
        v-model="drawer"
        class="ma-2"
        label="v-model"
      ></v-switch>

      <v-switch
        v-model="permanent"
        class="ma-2"
        label="Permanent"
      ></v-switch>

      <v-switch
        v-model="miniVariant"
        class="ma-2"
        label="Mini variant"
      ></v-switch>

      <v-switch
        v-model="expandOnHover"
        class="ma-2"
        label="Expand on hover"
      ></v-switch>

      <v-switch
        v-model="background"
        class="ma-2"
        label="Background"
      ></v-switch>

      <v-switch
        v-model="right"
        class="ma-2"
        label="Right"
      ></v-switch>
    </v-row> -->

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
</template>

<script>
export default {
  name: '',

  data () {
    return {
      drawer: true,
        todoMenus: [
          { title: 'Overview', icon: 'mdi-view-dashboard' },
          { title: 'Today', icon: 'mdi-image' },
        ],
        commonMenus: [
         
          { title: 'Setting', icon: 'mdi-help-box' },
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

<style scoped>

</style>
