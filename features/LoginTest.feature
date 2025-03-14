Feature: Verify Login
    As a user
    I want to login to the application
    So that I can access the application
    
    Scenario: Verify user is able to login with valid credentials
        Given I navigate to the login page "localhost:3000"
        And I click on "My Account" link
        When I enter "lambda" as username
        And I enter "lambda123" as password
        And I click on "Login" button
        Then I should see the "My Orders" page