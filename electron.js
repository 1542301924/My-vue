const { app, BrowserWindow } = require('electron');
const path = require('path');


function createWindow() {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,    // 启用 Node.js 集成
      contextIsolation: false   // 禁用上下文隔离
    }
  });

  // 加载 Vue 应用
  win.loadURL('http://localhost:8080'); // 访问开发服务器
}

// 初始化应用
app.whenReady().then(createWindow);

// 退出时关闭窗口
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
