// import { insertUser } from "@sparkles/accounts";
import { headers } from "next/headers";
import { test, type Page } from "@playwright/test";

test.describe("Test page", () => {
  test("Will fail", async ({ page }) => {
    console.log(headers);
  });
});
