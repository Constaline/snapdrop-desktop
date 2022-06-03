const bytenode = require('bytenode');
const fse = require('fs-extra');
const v8 = require('v8');
const path = require('path');

v8.setFlagsFromString('--no-lazy');

const ROOT_PATH = path.join(__dirname, '../');
const DIST_PATH = path.join(ROOT_PATH, './dist/main/');
const MAINJS_PATH = path.join(DIST_PATH, './main.js');
const JSC_PATH = path.join(DIST_PATH, './main.jsc');

let newContent = `
const bytenode = require('bytenode');
const v8 = require('v8');
v8.setFlagsFromString('--no-lazy');
require('./main.jsc');
`;

try {
    bytenode.compileFile(MAINJS_PATH, JSC_PATH);

    fse.outputFileSync(MAINJS_PATH, newContent);
    console.log(`[${new Date()}] Build bytenode success`);
} catch (err) {
    console.log(`[${new Date()}] Build bytenode error:`, err);
}

process.exit()