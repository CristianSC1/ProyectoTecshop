

module.exports = {

   models: {
     connection: 'mongodbServer'
   },

  port: 3000,
  demoMode:0,
  template:{"moduleInstallNew": 'back/module/installNew.ejs',
    'installModuleDone': 'back/module/installModuleDone.ejs',
    'edit_module': 'back/module/edit.ejs'
  }

};
