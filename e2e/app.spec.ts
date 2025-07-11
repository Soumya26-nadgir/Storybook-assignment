import { test, expect } from '@playwright/test';
test.describe('App', () => {
  test.beforeEach(async ({ page }) => {

    await page.goto('/', { waitUntil: 'networkidle' });
    

    await page.waitForSelector('h1:has-text("E-commerce Component Library")', { state: 'visible', timeout: 30000 });
  });
  test('should display the main heading', async ({ page }) => {

    const heading = page.getByRole('heading', { name: 'E-commerce Component Library' });
    await expect(heading).toBeVisible();
  });
  test.describe('Theme Toggle', () => {
    test('should toggle between light and dark mode', async ({ page }) => {

      const html = page.locator('html');
      await expect(html).not.toHaveClass(/dark/);

      const themeToggle = page.getByRole('button', { name: /switch to dark mode/i });
      await themeToggle.click();

      await expect(html).toHaveClass(/dark/);

      await themeToggle.click();
      await expect(html).not.toHaveClass(/dark/);
    });
  });
  test.describe('Buttons Section', () => {
    test('should display all button variants', async ({ page }) => {

      const buttonsHeading = page.getByRole('heading', { name: 'Buttons' });
      await expect(buttonsHeading).toBeVisible();

      await expect(page.getByRole('button', { name: 'Add to Cart' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Add to Wishlist' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Processing...' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Out of Stock' })).toBeVisible();
    });
  });
  test.describe('Ratings Section', () => {
    test('should display all rating sizes', async ({ page }) => {

      const ratingsHeading = page.getByRole('heading', { name: 'Ratings' });
      await expect(ratingsHeading).toBeVisible();

      await expect(page.getByText('Small').first()).toBeVisible();
      await expect(page.getByText('Medium').first()).toBeVisible();
      await expect(page.getByText('Large').first()).toBeVisible();

      const ratings = page.locator('.text-sm.font-medium.text-gray-500').all();
      expect(await ratings).toHaveLength(3);
    });
  });
  test.describe('Product Cards', () => {
    test('should display product cards with correct information', async ({ page }) => {

      const cardsHeading = page.getByRole('heading', { name: 'Product Cards' });
      await expect(cardsHeading).toBeVisible();

      const productCards = page.locator('[data-testid="product-card"]');
      await expect(productCards).toHaveCount(3);

      const firstCard = productCards.first();
      await expect(firstCard).toContainText('Premium Wireless Headphones');
      await expect(firstCard).toContainText('$199.99');
      await expect(firstCard.getByRole('button', { name: /add to cart/i })).toBeVisible();
    });
    test('should toggle favorite status when clicking favorite button', async ({ page }) => {
      const firstCard = page.locator('[data-testid="product-card"]').first();
      const favoriteButton = firstCard.getByRole('button', { name: /add to favorites/i });
      

      await favoriteButton.click();
      await expect(favoriteButton).toHaveAttribute('aria-label', /remove from favorites/i);
      

      await favoriteButton.click();
      await expect(favoriteButton).toHaveAttribute('aria-label', /add to favorites/i);
    });
  });
});
