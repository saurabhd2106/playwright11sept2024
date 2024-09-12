import { Page } from "@playwright/test";

export class Loginpage {

    // Constants and variables required

    readonly page: Page;

    constructor(page: Page) {

        this.page = page;

    }


    // Methods

    async loginToApplication(emailId: string, password: string){

        


    }

    async verifyLogin(){
        
    }


}