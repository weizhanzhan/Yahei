<template>
  <div id="app">
    <button @click="minWindow">最小化</button>
    <button @click="checkUpdate">检车更新</button>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: 'App',
  components: {
  },
  mounted(){
    ipcRenderer.on('updateMsg', (event, data) => {
      this.state = data.state
      let msg = ''
      switch (this.state) {
        case -1:msg = '当前已是最新版本'
                break
        case 1:msg = '检查更新中'
               break
        case 2:msg = '发现新版本，准备下载'
               break
        case 3:msg = '下载中...'
               break
        case 4:msg = '下载完成！'
               break
        default:msg = ''
        }
      console.log(msg)
    })
  },
  methods:{
    minWindow(){
      console.log(ipcRenderer)
      ipcRenderer.send('window-min')
      
      //  ipcMain.send('window-min')
    },
    checkUpdate(){
      console.log(123)
      ipcRenderer.send('check-for-update')
    }
  }
}
</script>

<style>

</style>
