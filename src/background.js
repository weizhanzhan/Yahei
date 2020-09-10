'use strict'

import { app, protocol, BrowserWindow ,ipcMain} from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
// import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
const autoUpdater = require('electron-updater').autoUpdater
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 960,
    height: 640,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
  /**
   * 添加响应事件
   */
  setElectronEvent()
  /**
   * 注册自动更新
   */
  initUpdate()
  win.on('closed', () => {
    win = null
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      // await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}



function setElectronEvent() {
  /**
   * @desc -最小化窗口
   */
  ipcMain.on('window-min', () => {
    win&&win.minimize()
  })
  ipcMain.on('window-close', () => {
    win&&win.close()
  })
  ipcMain.on('app-version', () => {
    win&&win.webContents.send('getVersion', app.getVersion())
  })
  ipcMain.on('check-for-update', () => {
    // 执行自动更新检查
    console.log('执行更新')
    autoUpdater.checkForUpdates()
  })
  /**
   * 重启更新
   */
  ipcMain.on('updateNow', () => {
    autoUpdater.quitAndInstall()
  })
}



/**
 * @param 返回检查更新返回消息
 */
function sendUpdateMessage(data) {
  win&&win.webContents.send('updateMsg', data)
}


function initUpdate() {
  autoUpdater.setFeedURL('http://localhost:8081/update/')
  autoUpdater.on('checking-for-update', () => {
    sendUpdateMessage({ state: 1 })
  })

  autoUpdater.on('update-not-available', () => {
    sendUpdateMessage({ state: -1 })
  })

  autoUpdater.on('update-available', () => {
    sendUpdateMessage({ state: 2 })
  })

  autoUpdater.on('download-progress', (info) => {
    sendUpdateMessage({ state: 3, info })
  })
  autoUpdater.on('update-downloaded', () => {
    sendUpdateMessage({ state: 4 })
  })
}

