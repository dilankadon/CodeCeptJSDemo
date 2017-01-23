'use strict'

Feature('LoginTest');

Scenario('Login and Logout', (I, loginPage) => {
    I.loginAs('demouser');
    I.logOut();
});
