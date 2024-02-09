import { expect, test } from "@playwright/test";

// You can override the default Playwright test timeout of 30s
// test.setTimeout(60_000);

test("Custom Browser Check", async ({ page }) => {
  const response = await page.goto("http://localhost:3000/");
  expect(response?.status()).toBeLessThan(400);
  await page.screenshot({ path: "screenshot.jpg" });
});
