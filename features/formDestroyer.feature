Feature: Register test
   The user should be able to submit the form if all the fields filled properly.

   Background: I'am looking for the "Facebook" page on google.com
            Given: I am on the google.com page
            When I type "Facebook" on the google search bar
            And I press the enter key or the submit button
            And I click on the first link
            Then I should be on the Facebook page
 
   @goodPath     
   Scenario Outline: I fill all the fields.
            Given I am on the "Facebook - Inicia sesión o regístrate" page
            And I fill the "<name>", "<lastName>", "<contact>", "<password>", "<birthday>", "<genre>" fields
            And I click on the Register button
            And I click on the yes button to confirm my birthday
            Then The form should be submitted 
    
    Examples:
    |   name   |      lastName       |      contact     |           password         |        birthday           |   genre   |
    |   Mark   |        Jobs         |     7772137821   |            12312q          |       1982-ene-22         |    Male   |
    |   Susan  |        Gates        |  steve@mail.com  |           str0ngp4ss       |       1991-may-01         |   Female  |
    |   John   |      Zuckerberg     |     7772137821   |            oneday213       |       1996-dic-04         |   Male    |

   @badPath     
   Scenario Outline: I fill all the fields but they are incorrect.
            Given I am on the "Facebook - Inicia sesión o regístrate" page
            And I fill the "<name>", "<lastName>", "<contact>", "<password>", "<birthday>", "<genre>" fields
            And I click on the Register button
            Then The error messages should prompt
    
    Examples:
    |   name   |      lastName       |      contact     |           password         |        birthday           |     genre     |
    |   Mark   |                     |     7772137821   |                            |       1982-may-22         |      Male     |
    |   Susan  |        Gates        |                  |           str0ngp4ss       |       1991-feb-01         |     Female    |
    |   John   |      Zuckerberg     |     7772137821   |            oneday213       |                           |      Male     |