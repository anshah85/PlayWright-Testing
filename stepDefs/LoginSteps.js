import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given('I navigate to the login page {string}', async ({ page }, url) => {
    await page.goto(url);
});

Given('I click on {string} link', async ({}, arg) => {
// Step: Given I click on "Login" link
});

When('I enter {string} as username', async ({}, arg) => {
// Step: When I enter "lambda" as username
});

When('I enter {string} as password', async ({}, arg) => {
// Step: And I enter "lambda123" as password
// From: features/LoginTest.feature:10:9
});

When('I click on {string} button', async ({}, arg) => {
// Step: And I click on "Login" button
// From: features/LoginTest.feature:11:9
});

Then('I should see the {string} page', async ({}, arg) => {
// Step: Then I should see the "My Orders" page
// From: features/LoginTest.feature:12:9
});