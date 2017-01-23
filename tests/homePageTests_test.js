
Feature('HomePageTests');

Scenario('Navigating to Home Page', (I) => {
	I.amOnPage('http://phptravels.net/')
	I.resizeWindow('maximize')
	I.see('Hotels')
});
