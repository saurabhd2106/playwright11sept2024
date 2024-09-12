import {expect, test} from "@playwright/test"
import { Loginpage } from "../pages/loginpage"
import { ArticlePage } from "../pages/articlepage"

test.describe("Conduit App Tests", () => {

    test.beforeEach(async ({page}) => {

        await page.goto("http://localhost")

    })

    test("Login to the application", async ({ page }) => {

        const loginpage = new Loginpage(page);

        const useremail = "testuser@test.com"
        const password = "testpassword"

        const username = "testuser"

       

        await loginpage.loginToApplication(useremail, password);

        await loginpage.verifyLogin(username);

    })

    test("Add Article", async ({ page }) => {

        const loginpage = new Loginpage(page);
        const articlepage = new ArticlePage(page);

        const useremail = "testuser@test.com"
        const password = "testpassword"

        const username = "testuser"


        await loginpage.loginToApplication(useremail, password);

        await  loginpage.verifyLogin(username);

        await  articlepage.addArticle("Article on playwright", "Playwright description", "Article details", "Automation");

        await articlepage.verifyAddArticle();
    })

})