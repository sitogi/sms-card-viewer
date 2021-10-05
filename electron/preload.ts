import { contextBridge, ipcRenderer } from 'electron';

// TODO: same interface defined at CardPreviewer
interface Card {
  id: string;
  boardId: string;
  mdStr: string;
  color: string;
  previewEnabled: boolean;
}

contextBridge.exposeInMainWorld('electronAPI', {
  // renderer -> main
  openDialog: (str: string) => ipcRenderer.invoke('openDialog', str),

  // main -> renderer
  onReceiveSearchResults: (callback: (event: Electron.Event, results: Card[]) => void) =>
    ipcRenderer.on('receiveSearchResults', (event, argv) => callback(event, argv)),
  removeOnReceiveMainTime: () => ipcRenderer.removeAllListeners('receiveSearchResults'),
});
