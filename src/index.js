const { app, BrowserWindow, ipcMain } = require('electron');
const child = require("child_process");
const path = require('path');
const fs = require('fs');

// console.log(process.argv);

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    title: "Open Source Studio Nightly",
    width: 900,
    height: 600,
    minWidth: 900,
    backgroundColor: '#ffffff',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      imageAnimationPolicy: 'noAnimation',
      v8CacheOptions: 'none',
      webgl: false,
      contextIzolation: true,
      nodeIntegration: false,
      disableBlinkFeatures: 'BarcodeDetector, BlinkExtensionChromeOS, BlinkExtensionChromeOSHID, BlinkExtensionChromeOSWindowManagement, BlinkRuntimeCallStats, CacheStorageCodeCacheHint, ContactsManager, ContactsManagerExtraProperties, ContentIndex, Database, InstalledApp, PaymentApp, PaymentMethodChangeEvent, PaymentRequest, PaymentRequestMerchantValidationEvent, Permissions, DesktopPWAsSubApps, DeviceAttributes, DeviceOrientationRequestPermission, DevicePosture, DocumentCookie, DocumentPictureInPictureAPI, EarlyHintsPreloadForNavigationOptIn, EyeDropperAPI, FaceDetector, FakeNoAllocDirectCallForTesting, FeaturePolicyReporting, FedCm, FedCmIdpSigninStatus, FedCmIdpSignout, FedCmIframeSupport, FedCmLoginHint, FedCmMultipleIdentityProviders, FedCmRpContext, FedCmSelectiveDisclosure, FedCmUserInfo, FencedFrames, FencedFramesAPIChanges, IncomingCallNotifications, InstalledApp, MachineLearningCommon, MachineLearningModelLoader, MachineLearningNeuralNetwork, NotificationContentImage, Notifications, NotificationTriggers, PasswordReveal, PaymentInstruments'
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  ipcMain.handle("os-openFile", (event, file) => {
    // console.log(file);
    fs.readdir(file, (err, data)=>{
      if(err) console.log(`Error: ${err}`);

      if(data) console.log(`Data: ${data}`);
    });


    // child.execFile(file, (err, stdout, stderr) => {
    //   out = stdout;
    // });
    // setTimeout(()=>{
    //   mainWindow.webContents.send("json-content", out);
    // }, 1000);
  });

  ipcMain.handle("os-openFolder", (event, directory) => {
    fs.readdir(directory, (err, data)=>{
      if(err) console.log(`Error: ${err}`);

      if(data){
        mainWindow.webContents.send("openFolderResponse", data);
      }
    });
  });

  ipcMain.on("os-close", (event, args) => {
    mainWindow.close();
  })

  ipcMain.on("os-hide", (event, args) => {
    mainWindow.minimize();
  })


  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
