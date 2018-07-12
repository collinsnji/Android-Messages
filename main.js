'use strict';

const electron = require('electron');
const { app, BrowserWindow, ipcMain, Menu } = electron;
const path = require('path');
const appMenu = require('./src/Menu');

let mainWindow;
let messagesURL = path.join('file://', __dirname, '/index.html'),
  destroyWindow = () => {
    mainWindow = null;
  },
  closeAllWindow = () => {
    if (process.platform !== 'darwin') app.quit();
  };

let createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 965,
    height: 665,
    minWidth: 965,
    minHeight: 665,
    backgroundColor: '#eceff1',
    icon: `${__dirname}/assets/icons/mac/icon.icns`
  });

  // menu
  Menu.setApplicationMenu(appMenu);

  mainWindow.loadURL(messagesURL);
  mainWindow.on('closed', destroyWindow);
};

app.on('ready', createWindow);
app.on('activate', createWindow);
app.on('window-all-closed', closeAllWindow);

ipcMain.on('close', () => {
  app.quit();
});
