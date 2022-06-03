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
    minHeight: 640,
    show: false
  });

  global.mainWindow.loadURL(global.PAGE_URL);
  global.mainWindow.setMenuBarVisibility(false);

  // Emitted when the window is closed.
  global.mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    global.mainWindow = null;
  });

  // While loading the page, the ready-to-show event will be emitted 
  // when the renderer process has rendered the page for the first time if the window has not been shown yet. 
  // Showing the window after this event will have no visual flash:
  global.mainWindow.once('ready-to-show', () => {
    global.mainWindow.show();
    global.mainWindow.focus();
})



}