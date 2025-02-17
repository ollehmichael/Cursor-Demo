import { Page } from "@playwright/test";

export interface CounterElements {
  counter: string;
  incrementButton: string;
  decrementButton: string;
  resetButton: string;
}

export const counterSelectors: CounterElements = {
  counter: '[data-testid="counter"]',
  incrementButton: '[data-testid="increment-button"]',
  decrementButton: '[data-testid="decrement-button"]',
  resetButton: '[data-testid="reset-button"]',
};

export async function getCounterValue(page: Page): Promise<number> {
  const counterText = await page.locator(counterSelectors.counter).innerText();
  return parseInt(counterText, 10);
}

export async function clickNTimes(
  page: Page,
  selector: string,
  times: number
): Promise<void> {
  for (let i = 0; i < times; i++) {
    await page.locator(selector).click();
  }
}
