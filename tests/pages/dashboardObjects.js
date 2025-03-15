import { expect } from '@playwright/test';

export class DashboardObjects {
    constructor(page) {
        this.page = page;
    }

    get startDateLocator() {
        return '//label[text()="Start Date"]/following-sibling::input';
    }

    get endDateLocator() {
        return '//label[text()="End Date"]/following-sibling::input';
    }

    get makerBotLocator() {
        return '//label[contains(., "MakerBot")]//input[@type="checkbox"]';
    }

    get makerBotProductionReportLocator() {
        return '//span[contains(text(), "MakerBot")]';
    }

    get makerBotProductionReportDateLocator() {
        return this.makerBotProductionReportLocator + '/following-sibling::span';
    }

    get enderLocator() {
        return '//label[contains(., "Ender")]//input[@type="checkbox"]';
    }

    get enderProductionReportLocator() {
        return '//span[contains(text(), "Ender")]';
    }

    get enderProductionReportDateLocator() {
        return this.enderProductionReportLocator + '/following-sibling::span';
    }

    get prusaLocator() {
        return '//label[contains(., "Prusa")]//input[@type="checkbox"]';
    }

    get prusaProductionReportLocator() {
        return '//span[contains(text(), "Prusa")]';
    }

    get prusaProductionReportDateLocator() {
        return this.prusaProductionReportLocator + '/following-sibling::span';
    }

    async navigateToDashboard(url) {
        await this.page.goto(url);
    }

    async selectStartDate(startDate) {
        await this.page.locator(this.startDateLocator).fill(startDate);
    }

    async selectEndDate(endDate) {
        await this.page.locator(this.endDateLocator).fill(endDate);
    }

    async selectMakerBot() {
        await this.page.check(this.makerBotLocator);
    }

    async selectEnder() {
        await this.page.check(this.enderLocator);
    }

    async selectPrusa() {
        await this.page.check(this.prusaLocator);
    }

    async verifyMakerBotProductionReportDate(expectedText) {
        await expect(this.page.locator(this.makerBotProductionReportDateLocator)).toBeVisible();
        const actualText = await this.page.locator(this.makerBotProductionReportDateLocator).textContent();
        expect(actualText).toBe(expectedText);
    }

    // async verifyEnderProductionReportDate(expectedText) {
    //     await expect(this.page.locator(this.enderProductionReportDateLocator)).toBeVisible();
    //     const actualText = await this.page.locator(this.enderProductionReportDateLocator).textContent();
    //     expect(actualText).toBe(expectedText);
    // }

    // async verifyPrusaProductionReportDate(expectedText) {
    //     await expect(this.page.locator(this.prusaProductionReportDateLocator)).toBeVisible();
    //     const actualText = await this.page.locator(this.prusaProductionReportDateLocator).textContent();
    //     expect(actualText).toBe(expectedText);
    // }

    async verifyMakerBotProductionReport(expectedText) {
        await expect(this.page.locator(this.makerBotProductionReportLocator)).toBeVisible();
        // const actualText = await this.page.locator(this.makerBotProductionReportLocator).textContent();
        // expect(actualText).toBe(expectedText);
    }

    async verifyEnderProductionReport(expectedText) {
        await expect(this.page.locator(this.enderProductionReportLocator)).toBeVisible();
        // const actualText = await this.page.locator(this.enderProductionReportLocator).textContent();
        // expect(actualText).toBe(expectedText);
    }

    async verifyPrusaProductionReport(expectedText) {
        await expect(this.page.locator(this.prusaProductionReportLocator)).toBeVisible();
        // const actualText = await this.page.locator(this.prusaProductionReportLocator).textContent();
        // expect(actualText).toBe(expectedText);
    }
}

// export { DashboardObjects };