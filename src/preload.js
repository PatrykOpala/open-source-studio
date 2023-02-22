// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('mFile', {
  openFile: (file, func) => {
    ipcRenderer.invoke("os-openFile", file);
    // ipcRenderer.on("json-content", (jsonEvent, jsonMessage)=> func(jsonMessage));
  },
  closeProgram: ()=>ipcRenderer.send("os-close"),
  hideProgram: () => ipcRenderer.send("os-hide"),
});
