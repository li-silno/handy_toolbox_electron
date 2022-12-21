const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');      // path模块
const windowCtl = require('./controller/windowCtl');

// 创建一个窗口
const createWindow = () => {
    const mainWindow  = new BrowserWindow({
        // 自定义窗口状态
        width: 840,
        height: 630,
        minWidth: 840,
        minHeight: 630,
        maxWidth: 840,
        maxHeight: 630,
        webPreferences: {
            // 预加载js
            preload: path.join(__dirname, './preload/index.js')
        },
        frame: false,   // 删除默认的标题栏
        show: false,    // 暂时不显示，等待加载完毕
    });

    mainWindow.loadURL('http://127.0.0.1:5173/');

    // 添加窗口控制
    windowCtl(mainWindow);
    // 等待加载完毕再显示窗口 
    mainWindow.on('ready-to-show',()=>{
        mainWindow.show();
    })

    // 打开调试工具
    mainWindow.webContents.openDevTools();
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