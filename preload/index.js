const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    // 窗口控制事件通信函数(randerer ==> main)
    windowCtl: (type) => ipcRenderer.send('win-ctl', type)
})