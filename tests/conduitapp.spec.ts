import {expect, test} from "@playwright/test"

test.describe("Conduit App Tests", () => {

    test("Login to the application", async ({ page }) => {

        const useremail = "testuser@test.com"
        const password = "testpassword"

        const username = "testuser"

        await page.goto("http://localhost")

        await page.getByRole("link", {name: "Sign in"}).click()

        await page.getByPlaceholder("Email").fill(useremail)

        await page.getByPlaceholder("Password").fill(password)

        await page.getByRole("button", {name: "Sign in"}).click()

        await expect(page.getByRole("link", {name: username})).toBeVisible()


    })

})