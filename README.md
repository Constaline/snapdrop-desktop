# snapdrop-desktop
Just the original [Snapdrop](https://github.com/RobinLinus/Snapdrop), with complete Node.js server.

Modified from [DrBassman/node-snapdrop](https://github.com/DrBassman/node-snapdrop) so that when server & clients are on the same LAN, clients discover each other.

## Quickstart
### development 
```bash
# install all dependencies
npm install

# start application in development
npm start
```

### production
> There is using [bytenode](https://github.com/bytenode/bytenode) to generate .jsc files.

> Please note .jsc files must run with the same Node.js version that was used to compile it (using same architecture of course). Also, .jsc files are CPU-agnostic. However, you should run your tests before and after deployment, because V8 sanity checks include some checks related to CPU supported features, so this may cause errors in some rare cases.

```bash
# build application in production
npm run build
```

## Thanks
* [RobinLinus/Snapdrop](https://github.com/RobinLinus/Snapdrop)
* [Bellisario/node-snapdrop](https://github.com/Bellisario/node-snapdrop)
* [DrBassman/node-snapdrop](https://github.com/DrBassman/node-snapdrop)
