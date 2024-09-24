import { test, expect } from "@playwright/test";

test("All links on the homepage work correctly", async ({ page, context }) => {
  await page.goto("/");

  // Collect all anchor elements with an href attribute
  const links = await page.$$eval("a[href]", (elements) =>
    elements.map((el) => el.getAttribute("href"))
  );

  for (const link of links) {
    // Skip links that are anchors or JavaScript voids
    if (!link || link.startsWith("#") || link.startsWith("javascript:")) {
      continue;
    }

    // Handle relative URLs by resolving them against the base URL
    const url = new URL(link, page.url()).href;

    // Open a new page for each link to avoid interfering with the main page
    const newPage = await context.newPage();

    // Navigate to the link
    const response = await newPage.goto(url);

    // Check that the page loaded successfully
    expect(response?.ok()).toBeTruthy();

    // Close the new page
    await newPage.close();
  }
});
