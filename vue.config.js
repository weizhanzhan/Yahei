/*
 * @Author: your name
 * @Date: 2020-09-10 16:08:37
 * @LastEditTime: 2020-09-10 16:52:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yahei-vue\vue.config.js
 */
module.exports = {
  devServer: {
    port: 1023, // 端口
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
      //   appId: 'xyz.wzhan',
      //   productName: 'yahei',
      //   copyright: 'Yahei Copyright ©2019 Yahei Intelligent Technology',
      //   win: {
      //     icon: '/public/favicon.ico',
      //     target: [
      //         {
      //           target: 'nsis', // 利用nsis制作安装程序
      //           arch: [
      //               'x64', // 64位
      //               'ia32'// 32位
      //           ]
      //         }
      //     ]
      //   },
      //   nsis: {
      //     oneClick: false, // 可单击打开
      //     allowToChangeInstallationDirectory: true, // 允许用户选择安装位置
      //     perMachine: true
      //   },
        publish: [
          {
            provider: 'generic',
            url: 'http://localhost:8081/update/',
            channel: 'latest'
          }
        ]
      },
      nodeIntegration: true
    },
   
  }
}