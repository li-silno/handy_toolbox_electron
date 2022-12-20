const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');      // path模块

// 创建一个窗口
const createWindow = () => {
    const win = new BrowserWindow({
        // 自定义窗口状态
        width: 800,
        height:600,
        minWidth: 800,
        minHeight: 600,
        maxWidth: 800,
        maxHeight: 600,
        webPreferences: {
            // 预加载js
            preload: path.resolve(__dirname, './preload/index.js')
        },
        show: false,    // 暂时不显示，等待加载完毕
    });

    win.loadURL('http://127.0.0.1:5173/');

    // 等待加载完毕再显示窗口 
    win.on('ready-to-show',()=>{
        win.show();
    })

    // 打开调试工具
    win.webContents.openDevTools();
};

// 禁用菜单，一般情况下，不需要禁用
Menu.setApplicationMenu(null);

app.whenReady().then(() => {
    // 创建
    createWindow();
    // 在没有窗口可用的情况下激活应用时会打开新的窗口(macos)
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });
    // 关闭所有窗口通常会完全退出一个应用程序(windows&linux)
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    });
});