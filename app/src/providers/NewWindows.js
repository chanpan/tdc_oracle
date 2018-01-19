const electron = require('electron');
const path = require("path");
const BrowserWindow = electron.remote.BrowserWindow;
const ipc = electron.ipcRenderer;

class NewWindows {
    static new_window(){
        let win = new BrowserWindow({ width: 800, height: 600 });
        let modalPath = path.join('file://', __dirname, '../index.html');
        win.loadURL(modalPath);
        win.webContents.openDevTools();
        win.show();

        ipc.send('show-index-page', modalPath);

        win.on('closed', () => win = null);
        win.on('window-all-closed', function () {
            if (process.platform !== 'darwin') {
                win.quit()
            }
        });
    }

}
export default NewWindows;