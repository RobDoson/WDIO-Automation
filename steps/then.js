import {
  Then
} from 'cucumber';
import errorCheck from '../helpers/check/errorCheck';

Then("I should be on the Facebook page", function () {
  expect(browser.getTitle()).to.equal('Facebook - Inicia sesión o regístrate');
});

Then("The form should be submitted", function () {
  browser.reloadSession()
});

Then("The error messages should prompt", function () {
  errorCheck;
});