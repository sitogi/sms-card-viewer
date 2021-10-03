import { dialog, ipcMain } from 'electron';

export const initIpcMain = (): void => {
  ipcMain.handle('openDialog', async (event, str: string) => {
    await dialog.showMessageBox({ title: 'Opened by Renderer', message: str });
  });
};
