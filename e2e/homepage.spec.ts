import { testWithII } from '@dfinity/internet-identity-playwright';
import { test } from '@playwright/test';
import { HomepageLoggedOut } from './utils/pages/homepage.page';

test('should display homepage in logged out state', async ({ page }) => {
	const homepageLoggedOut = new HomepageLoggedOut({ page });

	await homepageLoggedOut.waitForReady();

	await homepageLoggedOut.takeScreenshot();
});

testWithII.beforeEach(async ({ page }) => {
	await page.clock.install();
});
