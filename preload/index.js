const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    // 窗口控制事件通信函数(randerer ==> main)
    callWindowCtl: (type) => ipcRenderer.send('win-ctl', type),
    // 点击功能模块，传递模块id，主进程执行处理方法
    callModuleMethod: (mod_id) => ipcRenderer.send('modules-ctl', mod_id)
}) 