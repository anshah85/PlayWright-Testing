import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

let globalStartDate;
let globalEndDate;

Given('I navigate to the application {string}', async ({ dashboardObjects }, url) => {
    // Step: Given I navigate to the application "localhost:3000"
    // From: tests/features/DateFilteringUIParams.feature:4:5
    await dashboardObjects.navigateToDashboard(url);
});

When('I select {string} as start date', async ({ dashboardObjects }, startDate) => {
  // Step: When I select "01/01/2021" as start date
  // From: features/DateFilteringUIParams.feature:5:5
  globalStartDate = startDate;
  await dashboardObjects.selectStartDate(startDate);
});

When('I select {string} as end date', async ({ dashboardObjects }, endDate) => {
  // Step: And I select "01/31/2021" as end date
  // From: features/DateFilteringUIParams.feature:6:5
  globalEndDate = endDate;
  await dashboardObjects.selectEndDate(endDate);
});

Then('I should see the data filtered with the selected date range', async ({ dashboardObjects }) => {
  // Step: Then I should see the data filtered with the selected date range
  // From: features/DateFilteringUIParams.feature:7:5
  function formatDate(dateString) {
      const [year, month, day] = dateString.split('-').map(Number);
      const dateObj = new Date(year, month - 1, day); // Creates a date in local time
      return dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
  }

  const formattedStartDate = formatDate(globalStartDate);
  const formattedEndDate = formatDate(globalEndDate);

  const expectedText = `${formattedStartDate} - ${formattedEndDate}`;

  // await expect(dashboardObjects.makerBotProductionReportDateLocator).toBeVisible();
  
  dashboardObjects.verifyMakerBotProductionReportDate(expectedText);

  // dashboardObjects.verifyEnderProductionReportDate(expectedText);

  // dashboardObjects.verifyPrusaProductionReportDate(expectedText);

  // await expect(page.locator('//span[contains(text(), "MakerBot")]/following-sibling::span')).toBeVisible();

  // const actualTextMakerBot = await dashboardObjects.makerBotProductionReportDateLocator.textContent();
  // expect(actualTextMakerBot).toBe(expectedText);

  // await expect(dashboardObjects.enderLocator).toBeVisible();
  // await expect(dashboardObjects.enderProductionReportDateLocator).toBeVisible();
  // // await expect(page.locator('//span[contains(text(), "Ender")]/following-sibling::span')).toBeVisible();

  // const actualTextEnder = await dashboardObjects.enderProductionReportDateLocator.textContent();
  // expect(actualTextEnder).toBe(expectedText);

  // await expect(dashboardObjects.prusaLocator).toBeVisible();
  // await expect(dashboardObjects.prusaProductionReportDateLocator).toBeVisible();
  // // await expect(page.locator('//span[contains(text(), "Prusa")]/following-sibling::span')).toBeVisible();

  // const actualTextPrusa = await dashboardObjects.prusaProductionReportDateLocator.textContent();
  // expect(actualTextPrusa).toBe(expectedText);
});

Given('I am on the dashboard page', async ({ dashboardObjects }) => {
    // Step: Given I am on the dashboard page
    // From: tests/features/DateFilteringUIParams.feature:7:5
    await dashboardObjects.navigateToDashboard('http://localhost:3000');
});
  
  When('I select a date range from {string} to {string}', async ({ page }, startDate, endDate) => {
    // Step: When I select a date range from "2024-01-01" to "2024-01-31"
    // From: tests/features/DateFilteringUIParams.feature:8:5
    globalStartDate = startDate;
    globalEndDate = endDate;

    await page.fill('//label[text()="Start Date"]/following-sibling::input', startDate);
    await page.fill('//label[text()="End Date"]/following-sibling::input', endDate);
});
  
  Then('the chart should update to show only January data', async ({}) => {
    // Step: Then the chart should update to show only January data
    // From: tests/features/DateFilteringUIParams.feature:9:5
  });
  
  Then('the table should display records from January', async ({}) => {
    // Step: And the table should display records from January
    // From: tests/features/DateFilteringUIParams.feature:10:5
  });
  
  Then('the URL should contain the date parameters', async ({}) => {
    // Step: And the URL should contain the date parameters
    // From: tests/features/DateFilteringUIParams.feature:11:5
  });
  
  Then('I should see the error message {string}', async ({}, arg) => {
    // Step: Then I should see the error message "End date should be greater than start date"
    // From: tests/features/DateFilteringUIParams.feature:17:5
  });