/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var compileLess = require('broccoli-less-single');
var pickFiles = require('broccoli-static-compiler')
var mergeTrees = require('broccoli-merge-trees')

var app = new EmberAddon();

var tree = pickFiles("tests/dummy/app/styles", {
  srcDir: '/',
  destDir: 'docs'
});
var docsTree = pickFiles("material-ui/docs/src/less", {
  srcDir: '/',
  destDir: 'docs'
});
var muiTree = pickFiles("material-ui/src/less", {
  srcDir: '/',
  destDir: 'material-ui'
});
var lessTree = compileLess(mergeTrees([tree, docsTree, muiTree]), 'docs/app.less', 'assets/dummy.css')

module.exports = mergeTrees([app.toTree(), lessTree]);
