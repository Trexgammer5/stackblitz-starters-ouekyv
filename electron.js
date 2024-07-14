const { app, BrowserWindow } = require('electron')

let win;

function minimizeWindow() {
  win.minimize();
}

function maximizeWindow() {
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
}

function closeWindow() {
  win.close();
}

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')

  win.on('closed', () => {
    win = null
  })
})

app.on('window-all-closed', () => {
  if (process.platform!== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

global.electron = {
  minimizeWindow,
  maximizeWindow,
  closeWindow
}