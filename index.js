'use strict';
var compileLess = require('broccoli-less-single');
var pickFiles = require('broccoli-static-compiler')
var mergeTrees = require('broccoli-merge-trees')

module.exports = {
  name: 'ember-mui',
  treeForStyles: function(){
    var tree = pickFiles("app/styles", {
      srcDir: '/',
      destDir: 'mui'
    });
    var muiTree = pickFiles("material-ui/src/less", {
      srcDir: '/',
      destDir: 'material-ui'
    });
    return compileLess(mergeTrees([tree, muiTree]), 'mui/app.less', 'assets/app.css')
  },
  treeForPublic: function(){
    return pickFiles("material-ui/src/less/material-ui-icons/fonts", {
      srcDir: '/',
      destDir: 'assets/fonts'
    });
  },
  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    // import addon css into app css
    target.import("assets/app.css");
  }
};
