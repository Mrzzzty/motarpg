/**
 * Electron 主进程：桌面窗口壳。
 * - 生产：加载 dist/index.html（Vite base='./'，file:// 直开即可）
 * - 开发：设置 VITE_DEV_SERVER_URL 后加载 Vite 热更新服务器
 * - 显示模式：全屏（运行时无缝切换）；窗口化（运行时调整尺寸）；
 *   无边框窗口（frame 为创建期选项，需重建窗口 → 游戏自动存档后重载）
 */
const { app, BrowserWindow, shell, ipcMain, screen, dialog } = require('electron');
const path = require('path');

const DEV_URL = process.env.VITE_DEV_SERVER_URL || '';
let win = null;

function createWindow(opts = {}) {
  if (win) {
    win.destroy();
    win = null;
  }
  const mode = opts.mode || 'windowed';
  const [rw, rh] = String(opts.resolution || '1600x900').split('x').map(Number);
  const frame = mode !== 'borderless';
  let width = rw;
  let height = rh;
  if (mode === 'borderless') {
    const wa = screen.getPrimaryDisplay().workAreaSize;
    width = Math.min(rw, wa.width);
    height = Math.min(rh, wa.height);
  }
  win = new BrowserWindow({
    width,
    height,
    minWidth: 1024,
    minHeight: 640,
    fullscreen: mode === 'fullscreen',
    frame,
    center: true,
    backgroundColor: '#14181f',
    title: '无尽之塔 · 魔塔RPG',
    autoHideMenuBar: !frame,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      spellcheck: false,
    },
  });
  win.setMenuBarVisibility(false);
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
  if (DEV_URL) win.loadURL(DEV_URL);
  else win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
}

function registerIpc() {
  ipcMain.on('display-mode', (_e, opts = {}) => {
    const mode = opts.mode || 'windowed';
    if (!win) {
      createWindow(opts);
      return;
    }
    if (mode === 'fullscreen') {
      win.setFullScreen(true); // 无缝切换，不重载
      return;
    }
    win.setFullScreen(false);
    if (mode === 'windowed') {
      const [w, h] = String(opts.resolution || '1600x900').split('x').map(Number);
      win.setSize(w, h);
      win.center();
      return;
    }
    createWindow(opts); // borderless：frame 是创建期选项，重建窗口（渲染端已先自动存档）
  });

  ipcMain.on('quit-app', () => app.quit());
}

// 单实例锁：重复启动时聚焦已有窗口而不是开第二个实例。
// 两个实例会争抢同一份 Chromium 磁盘缓存目录，产生
// "Unable to move the cache (0x5) / Gpu Cache Creation failed" 报错。
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  // 弹窗告知而不是静默退出（静默退出会被用户当成"闪退"）
  dialog.showErrorBox('无尽之塔', '游戏已在运行中（请查看任务栏）。\n若找不到窗口，请在任务管理器结束 electron.exe 后重试。');
  app.quit();
} else {
  app.on('second-instance', () => {
    if (win) {
      if (win.isMinimized()) win.restore();
      win.show();
      win.focus();
    }
  });
  registerIpc();
  app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
