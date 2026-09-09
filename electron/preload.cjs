/** Electron 预加载：向渲染进程暴露受控的桌面能力（显示模式 / 退出）。 */
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('motaDesktop', {
  isDesktop: true,
  /** opts: { mode: 'windowed' | 'fullscreen' | 'borderless', resolution: 'WxH' } */
  setDisplayMode: opts => ipcRenderer.send('display-mode', opts),
  quit: () => ipcRenderer.send('quit-app'),
});
