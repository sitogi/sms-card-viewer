import { contextBridge, ipcRenderer } from 'electron';

// export const KEY_ON_RECEIVE_MAIN_TIME = 'ON_RECEIVE_MAIN_TIME';

contextBridge.exposeInMainWorld('electronAPI', {
  // renderer -> main
  openDialog: (str: string) => ipcRenderer.invoke('openDialog', str),

  // main -> renderer
  onReceiveMainTime: (callback: (event: Electron.Event, time: string) => void) =>
    ipcRenderer.on('sendSecond', (event, argv) => callback(event, argv)),
  removeOnReceiveMainTime: () => ipcRenderer.removeAllListeners('sendSecond'),
});
