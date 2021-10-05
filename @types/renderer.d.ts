declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

// TODO: same interface defined at CardPreviewer
interface Card {
  id: string;
  boardId: string;
  mdStr: string;
  color: string;
  previewEnabled: boolean;
}

export interface IElectronAPI {
  openDialog: (str: string) => void;
  onReceiveSearchResults: (listener: (event: Electron.Event, results: Card[]) => void) => void;
  removeOnReceiveMainTime: () => void;
}
