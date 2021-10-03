import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import { initIpcMain } from './ipcMainHandlers';

const createWindow = async () => {
  // Crate the browser window
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (isDev) {
    await mainWindow.loadURL('http://localhost:3000/index.html');
  } else {
    // 'build/index.html'
    await mainWindow.loadURL(`file://${__dirname}/../index.html`);
  }

  // Hot Reloading
  if (isDev) {
    // 'node_modules/.bin/electronPath'
    // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron'),
      forceHardReset: true,
      hardResetMethod: 'exit',
    });
  }

  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // main -> renderer ipc example
  setInterval(() => {
    const date = new Date();
    mainWindow.webContents.send('sendSecond', String(date.getSeconds()));
  }, 1000);
};

app.whenReady().then(createWindow);
app.once('window-all-closed', () => app.quit());

initIpcMain();
