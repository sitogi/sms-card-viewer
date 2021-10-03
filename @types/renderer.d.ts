declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

export interface IElectronAPI {
  openDialog: (str: string) => void;
  onReceiveMainTime: (listener: (event: Electron.Event, time: string) => void) => void;
  removeOnReceiveMainTime: () => void;
}
