// Basic init
const electron = require('electron')
const { app, BrowserWindow } = electron

// Let electron reloads by itself when webpack watches changes in ./app/
// require('electron-reload')(__dirname)

// To avoid being garbage collected
let mainWindow
let childWindow
app.on('ready', () => {
    // let mainWindow = new BrowserWindow({ width: 1000, height: 800 })
    // mainWindow.loadURL(`file://${__dirname}/index.html`)
    // mainWindow.webContents.openDevTools();

    // mainWindow.on('closed', function () {
    //     mainWindow = null
    //     childWindow = null
    //     app.quit(0);
    // });

    childWindow = new BrowserWindow({ width: 600, height: 600 , maxWidth:600, maxHeight:400, parent:mainWindow, modal:true,frame:false})
    childWindow.loadURL(`file://${__dirname}/login.html`)
    childWindow.webContents.openDevTools();

    childWindow.on('closed', function () {
        childWindow = null
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
