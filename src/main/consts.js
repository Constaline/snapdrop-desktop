const { app } = require('electron');
const path = require('path');

// rewrite __static path in production
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, 'static').replace(/\\/g, '\\\\')
}

// set server running port
global.PORT = 30003;
global.PAGE_URL = `http://127.0.0.1:${global.PORT}`;
process.env.PORT = global.PORT;

// set server running mode
global.SERVER_MODE = 'LAN';
// process.argv differs in built electron apps
// https://github.com/electron/electron/issues/4690#issuecomment-422617581
if (app.isPackaged) {
  process.argv.unshift(null)
}
process.argv = [...process.argv, global.SERVER_MODE];

let pageDirPath = __static
if(process.env.NODE_ENV !== 'development') {
  pageDirPath = global.__static
} 
global.CLIENT_PAGE_PATH = path.join(pageDirPath, 'client');

console.log('global.CLIENT_PAGE_PATH:', global.CLIENT_PAGE_PATH)

// set mainWindow value
global.mainWindow