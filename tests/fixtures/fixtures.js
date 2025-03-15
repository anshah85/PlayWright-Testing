/*
 * @typedef {import('playwright-bdd').Fixture} Fixture
 */

import { test as base } from 'playwright-bdd';
import * as Pages from './pages';

const { DashboardObjects } = Pages;

const createTestFunction = (PageClass) => async ({ page }, use) => {
    await use(new PageClass(page));
}

export const test = base.extend({
    dashboardObjects: createTestFunction(DashboardObjects),
});

// export { expect } from '@playwright/test';
