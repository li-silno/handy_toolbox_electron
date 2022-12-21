const { ipcMain } = require("electron");
const modulesConfig = require('../config/modules.json');   // 模块配置
const handleScreenShot = require('./handleScreenShot')

// 模块对应处理函数
const functionConfig = {};
functionConfig[modulesConfig[0].mod_id] = handleScreenShot

// 模块功能控制器
const modulesCtl = () => {
    ipcMain.on('modules-ctl', (event, mod_id) => {
        // 获取处理函数
        let handle_function = functionConfig[mod_id];
        // 执行处理函数
        handle_function();
    });
};

module.exports = modulesCtl;