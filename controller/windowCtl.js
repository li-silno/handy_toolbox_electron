const { ipcMain } = require("electron");

const windowCtl = (mainWindow) => {
    ipcMain.on('win-ctl', (event, type) => {
        if (type == 'min') {
            mainWindow.minimize();
        } else if (type == 'max') {
            if (mainWindow.isMaximized()) {
                mainWindow.unmaximize();
            } else {
                mainWindow.maximize();
            }
        } else if (type == 'close') {
            mainWindow.close();
        }
    });
};

module.exports = windowCtl;