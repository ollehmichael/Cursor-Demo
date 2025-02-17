import { expect, test } from "@playwright/test";
import {
  clickNTimes,
  counterSelectors,
  getCounterValue,
} from "../utils/test-utils";

test.skip("Counter App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display the initial count", async ({ page }) => {
    const counter = await page.locator(counterSelectors.counter);
    await expect(counter).toHaveText("0");
    expect(await getCounterValue(page)).toBe(0);
  });

  test("should increment the counter", async ({ page }) => {
    await clickNTimes(page, counterSelectors.incrementButton, 2);
    expect(await getCounterValue(page)).toBe(2);
  });

  test("should decrement the counter", async ({ page }) => {
    await clickNTimes(page, counterSelectors.decrementButton, 2);
    expect(await getCounterValue(page)).toBe(-2);
  });

  test("should reset the counter", async ({ page }) => {
    // First increment a few times
    await clickNTimes(page, counterSelectors.incrementButton, 3);
    expect(await getCounterValue(page)).toBe(3);

    // Then reset
    await page.locator(counterSelectors.resetButton).click();
    expect(await getCounterValue(page)).toBe(0);
  });

  test("should handle rapid clicks", async ({ page }) => {
    await clickNTimes(page, counterSelectors.incrementButton, 5);
    expect(await getCounterValue(page)).toBe(5);
  });

  test("should handle increment and decrement sequence", async ({ page }) => {
    await clickNTimes(page, counterSelectors.incrementButton, 3);
    await clickNTimes(page, counterSelectors.decrementButton, 2);
    expect(await getCounterValue(page)).toBe(1);
  });
});
