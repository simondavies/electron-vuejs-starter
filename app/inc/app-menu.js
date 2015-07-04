module.exports =
[
 {
   label: 'TestApp',
   submenu : [
     {
       label : 'About App',
       selector: 'orderFrontStandardAboutPanel:'
     },
     {
        type: 'separator'
      },
      {
        label: 'Hide Electron',
        accelerator: 'Command+H',
        selector: 'hide:'
      },
      {
        label: 'Hide Others',
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:'
      },
      {
         type: 'separator'
       },
     {
       label : 'Quit App',
       accelerator: 'Command+Q',
       selector: 'terminate:'
     }
   ]
 }
];
