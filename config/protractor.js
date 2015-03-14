// config/protactor.js

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['../test/e2e/**/*.js'],
	onPrepare: function(){
		browser.driver.get('http://localhost:3000');
		element(by.id('entrar')).click();
		browser.driver.findElement(by.id('login_field')).sendKeys('odaircmartins@gmail.com');
		browser.driver.findElement(by.id('password')).sendKeys('#Ocm222206');	
		browser.driver.findElement(by.name('commit')).click();
	}
};