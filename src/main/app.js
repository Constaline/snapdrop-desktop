const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  createMainWindow()
});

app.on('window-all-closed', () => {
  app.quit();
});

function createMainWindow() {
  global.mainWindow = new BrowserWindow({ 
    width: 960, 
    height: 640,
    minWidth: 960,
    minHeight: 640
  });

  global.mainWindow.on('closed', () => win = null);

  global.mainWindow.loadURL(global.PAGE_URL);
  global.mainWindow.setMenuBarVisibility(false);
}