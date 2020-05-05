import { When } from 'cucumber';
import { GooglePage, Facebook } from '../page-objects';


When('I type {string} on the google search bar', (search)=>{
  browser.url('http://google.com')
  console.log(browser.getTitle()) // outputs: "Google"

  GooglePage.searchBox().setValue(search);
});

When("I press the enter key or the submit button", function(){
  browser.keys('Enter');
});

When("I click on the first link", function(){
  GooglePage.firstLink().click();
});

When("I fill the {string}, {string}, {string}, {string}, {string}, {string} fields", function(name, lastName, contact, password, birthday, genre){
  Facebook.fillRegister(name, lastName, contact, password, birthday, genre);

  browser.pause(5000);
  }
);

When("I click on the Register button", function(){
  var error = $("[id='reg_error_inner']");
  expect(error.isDisplayed()).to.equal(false);
  Facebook.submitButton().click();

});

When("I click on the yes button to confirm my birthday", function(){
  $("button[value='1']").click();
  browser.pause(30000);
})
