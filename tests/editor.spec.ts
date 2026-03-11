import { test, expect } from '@playwright/test';

test('Markdown editor should allow typing and previewing', async ({ page }) => {
  await page.goto('/posts/new');

  // Verify the page title
  await expect(page.locator('h1')).toContainText('Crear Nuevo Artículo');

  // Find the textarea and type some markdown
  const textarea = page.locator('textarea');
  await textarea.fill('# Mi Titulo\n\nEste es un parrafo **negrita**.');

  // Click on the preview tab
  await page.click('button:has-text("Previsualizar")');

  // Verify the preview content
  const preview = page.locator('.prose');
  await expect(preview.locator('h1')).toHaveText('Mi Titulo');
  await expect(preview.locator('strong')).toHaveText('negrita');

  // Switch back to edit mode
  await page.click('button:has-text("Escribir")');
  await expect(textarea).toBeVisible();
});
