import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { initIpcMain } from './ipcMainHandlers';

const createWindow = async () => {
  // Crate the browser window
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 1000,
    opacity: 0.9,
    frame: true,
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

  // api server for open from alfred
  const apiServer = express();
  apiServer.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  apiServer.use(bodyParser.json());
  apiServer.listen(9999);
  apiServer.post('/', (req, res) => {
    console.log(req.body);
    mainWindow.showInactive();
    res.json(req.body);
  });
};

app.whenReady().then(createWindow);
app.once('window-all-closed', () => app.quit());

initIpcMain();
