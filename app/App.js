/**
 * A Basic Electron starter
 *  A simple basic electron start pack for mt to use when doing them,
 *  to save time on coding.
 *
 * @author Simon Davies
 */

var app = require('app');
var browserWindow = require('browser-window');
var ipc = require('ipc');
var Menu    = require('menu');

//-- reports any crashes to the server
require('crash-reporter').start();


//-- set up the main app menu
var menu_template = require('./inc/app-menu.js');
var main_menu = Menu.buildFromTemplate(menu_template);

//-- set up the main menu items


//-- create a global var for all the windows
var appWindows = {
  main : null
}

/**
 * quit the app when all windows are closed
 */
 app.on('window-all-closed', function() {
   if (process.platform != 'darwin') { app.quit();}
  });
  
/**
 * main app init
 */
app.on('ready', function(){
  //-- init the main window
  appWindows.main = new browserWindow({
      width: 400,
      height: 400,
      frame : false
    });
  //-- open up the dev tools for debugging
  appWindows.main.openDevTools();
  //apply the main menu
  Menu.setApplicationMenu(main_menu);
  /**
   * unset the appWindows.main variable on close
   */
  appWindows.main.on('closed', function() {
    appWindows.main = null;
  });

  appWindows.main.loadUrl('file://' + __dirname + '/pages/main.html');

  /**
   * listeners
   */



});//-- end of app ready
