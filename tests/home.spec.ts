import { test, expect } from '@playwright/test';

test('home page should load and display title', async ({ page }) => {
  // Go to the home page
  const response = await page.goto('/');

  // Verify status 200
  expect(response?.status()).toBe(200);

  // Verify the title or main heading contains "Postly"
  const heading = page.getByRole('heading', { name: 'Postly' });
  await expect(heading).toBeVisible();
});
