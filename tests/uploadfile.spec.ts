import { expect, test } from "@playwright/test"


test.describe("File upload", () => {

    test("File upload", async ({ page }) => {


        await page.goto("https://the-internet.herokuapp.com/upload")

        await page.locator("#file-upload").setInputFiles("/home/student/workspace-playwright/LearningPlaywright/testdata/userdata.json");

        await page.getByRole("button", { name: "Upload" }).click();

        await page.waitForTimeout(3000);

        await expect(page.locator("//h3")).toHaveText("File Uploaded!")


    })

})