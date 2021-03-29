const {app, BrowserWindow} = require("electron");

var mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        frame: false,
        center: true,
        fullscreenable: false,
        minWidth: 800,
        minHeight: 450,
        darkTheme: true,
        backgroundColor: "#000000",
        webPreferences: {
            nodeIntegration: true,
            preload: "js/renderer.js",
            nodeIntegrationInSubFrames: true
        }
    });

    //mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.loadFile("index.html");
    mainWindow.on("closed", function() {
        mainWindow = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
    if (process.platform !== "darwin") { // MacOS
        app.quit();
    }
});

app.on("activate", function() {
    if (mainWindow === null) {
        createWindow();
    }
});