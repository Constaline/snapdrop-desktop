// modifies asar file to protect it from extraction

const { Asarmor, Trashify, FileCrash } = require('asarmor');
const path = require("path");

exports.default = async ({ appOutDir, packager }) => {
    try {
        const asarPath = path.join(packager.getResourcesDir(appOutDir), 'app.asar');
        console.log(`applying asarmor protections to ${asarPath}`);
        const asarmor = new Asarmor(asarPath);
        // add trash files
        asarmor.applyProtection(new Trashify(['.git', '.env', 'LICENSE.txt']));
        // crash files
        asarmor.applyProtection(new FileCrash('README.md'))
        await asarmor.write(asarPath);
    } catch (err) {
        console.error(err);
    }
};
