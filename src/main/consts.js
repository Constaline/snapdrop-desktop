const { app } = require('electron');
const path = require('path');

// set server running port
global.PORT = 30003;
global.PAGE_URL = `http://127.0.0.1:${30003}`;
process.env.PORT = global.PORT;

// set server running mode
global.SERVER_MODE = 'LAN';
// process.argv differs in built electron apps
// https://github.com/electron/electron/issues/4690#issuecomment-422617581
if (app.isPackaged) {
  process.argv.unshift(null)
}
process.argv = [...process.argv, global.SERVER_MODE];


global.CLIENT_PAGE_PATH = path.join(__static, 'client');

// set mainWindow value
global.mainWindow