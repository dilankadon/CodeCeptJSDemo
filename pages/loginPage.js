
'use strict';

let I;

module.exports = {

  _init() {
    //I = require('./steps/steps_file.js')();
    I = actor()
  },

  // insert your locators and methods here
  fields:{
  	emailInput: '//input[@name="username"]',
  	paswordInput: '//input[@name="password"]'
  },

  buttons: {
  	loginButton: '//button(contains(., "Login")]'
  }

}
