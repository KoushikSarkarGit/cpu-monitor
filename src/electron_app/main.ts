import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./utils.js";
import {resourceMonitoring as cpuUsage} from './resourceCal.js';

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});
  if (isDev() == true){
    mainWindow.loadURL('http://localhost:5111')
  }else{
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }

  
  cpuUsage()
});
