
'use strict';
// in this file you can append custom step methods to 'I' object
let yaml = require('js-yaml');
let fs   = require('fs');
var users = yaml.safeLoad(fs.readFileSync('./conf/webdriverio/users.yaml', 'utf8'));

let I, loginPage;

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  loginAs: function (name) {
          this.amOnPage('http://phptravels.net/login');
          this.resizeWindow('maximize');
          this.clearCookie();
          this.seeInTitle('Login');

          //Using user from users.yaml file
          this.fillField('//input[@placeholder="Email"]', users[name].email);
          this.fillField('//input[@name="password"]', users[name].password);

          /*Or Alternatively, you can specify the locators and value
          //this.fillField('//input[@name="username"]', 'user@phptravels.com');
          //this.fillField('//input[@name="password"]', 'demouser');
          */
          
          this.pressKey('Enter');
          this.wait(3);
          this.seeCurrentUrlEquals('http://phptravels.net/account/');
          this.seeInTitle('My Account');
          this.see('Hi, John Smith');
      },

      logOut: function () {
          this.amOnPage('http://phptravels.net/account/logout/')
      }

  });
}
