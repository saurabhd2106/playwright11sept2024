import { expect, Locator, Page } from "@playwright/test";

export class Loginpage {

    // Constants and variables required

    readonly page: Page;

    readonly signinLink: Locator;

    readonly emailField: Locator;

    readonly passwordField: Locator;

    readonly signinButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.signinLink = page.getByRole("link", {name: "Sign in"});

        this.emailField = page.getByPlaceholder("Email");

        this.passwordField = page.getByPlaceholder("Password");

        this.signinButton = page.getByRole("button", {name: "Sign in"});

    }


    // Methods

    async loginToApplication(emailId: string, password: string){

        await this.signinLink.click()

        await this.emailField.fill(emailId)

        await this.passwordField.fill(password)

        await this.signinButton.click()


    }

    async verifyLogin(username: string){

        await expect(this.page.getByRole("link", {name: username})).toBeVisible()
        
    }


}