import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

let globalStartDate;
let globalEndDate;

Given('I navigate to the application {string}', async ({ page }, url) => {
    // Step: Given I navigate to the application "localhost:3000"
    // From: features/DateFilteringUIParams.feature:4:5
    await page.goto(url);
});
  
When('I select {string} as start date', async ({ page }, startDate) => {
    // Step: When I select "01/01/2021" as start date
    // From: features/DateFilteringUIParams.feature:5:5
    globalStartDate = startDate;
    await page.locator('//label[text()="Start Date"]/following-sibling::input').fill(startDate);
});
  
When('I select {string} as end date', async ({ page }, endDate) => {
    // Step: And I select "01/31/2021" as end date
    // From: features/DateFilteringUIParams.feature:6:5
    globalEndDate = endDate;
    await page.fill('//label[text()="End Date"]/following-sibling::input', endDate);
});
  
Then('I should see the data filtered with the selected date range', async ({ page }) => {
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

    await expect(page.locator('//span[contains(text(), "MakerBot")]')).toBeVisible();
    await expect(page.locator('//span[contains(text(), "MakerBot")]/following-sibling::span')).toBeVisible();

    const actualTextMakerBot = await page.locator('//span[contains(text(), "MakerBot")]/following-sibling::span').textContent();
    expect(actualTextMakerBot).toBe(expectedText);

    await expect(page.locator('//span[contains(text(), "Ender")]')).toBeVisible();
    await expect(page.locator('//span[contains(text(), "Ender")]/following-sibling::span')).toBeVisible();

    const actualTextEnder = await page.locator('//span[contains(text(), "Ender")]/following-sibling::span').textContent();
    expect(actualTextEnder).toBe(expectedText);

    await expect(page.locator('//span[contains(text(), "Prusa")]')).toBeVisible();
    await expect(page.locator('//span[contains(text(), "Prusa")]/following-sibling::span')).toBeVisible();

    const actualTextPrusa = await page.locator('//span[contains(text(), "MakerBot")]/following-sibling::span').textContent();
    expect(actualTextPrusa).toBe(expectedText);
});