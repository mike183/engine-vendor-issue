/* eslint-env node */
'use strict';

const fileCreator = require('broccoli-file-creator');

module.exports = {
  name: 'test-addon',

  isDevelopingAddon() {
    return true;
  },

  included() {
    this._super.included.apply(this, arguments);
    if (this.parent === this.project) { return; }
    this.import('vendor/custom-vendor-file.js');
  },

  treeForVendor() {
    if (this.parent === this.project) { return; }
    return new fileCreator('custom-vendor-file.js', 'console.log("test")');
  }

};
