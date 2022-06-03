let baseConfig = {
  "productName": "Snapdrop",
  "appId": "com.snapdrop.desktop",
  "directories": {
    "output": "build"
  },
  "dmg": {
    "contents": [
      {
        "x": 410,
        "y": 150,
        "type": "link",
        "path": "/Applications"
      },
      {
        "x": 130,
        "y": 150,
        "type": "file"
      }
    ]
  },
  "mac": {
    "icon": "build/icon/icon.png"
  },
  "nsis": {
    "oneClick": false,
    "allowToChangeInstallationDirectory": true,
    "perMachine": true,
    "runAfterFinish": true,
    "allowElevation": true,
    "artifactName": "${name}-${version}.${ext}",
    "createDesktopShortcut": false
  },
  "win": {
    "target": [
      {
        "target": "nsis",
        "arch": [
          "ia32"
        ]
      }
    ],
    "icon": "build/icon/icon.png"
  }
}

module.exports = baseConfig
