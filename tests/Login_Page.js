const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");

module.exports ={
'login to page': function(client){
    client
    .url('https://www.google.com/')
    .maximizeWindow()
    .waitForElementVisible('body',1000)
    .waitForElementVisible('input[name=q]',1000)
    .waitForElementVisible('input[value=Google Search]',1000)
    .click('input[name=btnK]')
    .end();
}


};