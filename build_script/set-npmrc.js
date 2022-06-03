const fs = require('fs')
const path = require('path')
const packageJSON = require('../package.json')

let archType = 'ia32';
if (process.platform == 'darwin') {
    archType = 'x64';
}
let electronVersion = packageJSON['devDependencies']['electron'];

let targetPath = path.join(__dirname, '../.npmrc');

let content = `runtime=electron
target=${electronVersion}
arch=${archType}
target_arch=${archType}`;

try {
    fs.writeFileSync(targetPath, content)
    console.log(`========== set npmrc success`)
} catch(err) {
    console.log(`========== set npmrc error:`, err)
}