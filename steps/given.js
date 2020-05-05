import { Given } from 'cucumber';

Given("I am on the google.com page", function(){
  browser.url('http://google.com')
  console.log(browser.getTitle()) // outputs: "Google"
});

Given("I am on the {string} page", function(title){
  expect(browser.getTitle()).to.equal(title);
  browser.pause(15000);
});