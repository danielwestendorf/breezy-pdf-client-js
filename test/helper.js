/* global td:true */
/* global faktoryWorker:true */
/* global faktoryClient:true */
/* eslint no-multi-spaces:0 */
/* eslint no-unused-vars:0 */

global.td = require('testdouble')

module.exports = {
  beforeEach: function() {
  },

  afterEach: function() {
    td.reset()
  },

  beforeAll: function() {
  },

  afterAll: function() {
  }
}
