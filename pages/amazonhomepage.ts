import { expect, Locator, Page } from "@playwright/test";

export class AmazonHomepage {

    readonly page: Page;

    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly searchDropdown: Locator;

    constructor(page: Page){

        this.page = page;

        this.searchDropdown = page.getByTitle("Search in");

        this.searchBox = page.getByPlaceholder("Search Amazon.in");

        this.searchButton = page.locator("#nav-search-submit-button");

    }

    async searchProduct(product: string, category: string){

        this.searchBox.isVisible()
        this.searchBox.fill(product);

        this.searchDropdown.selectOption(category);

        this.searchButton.click()

    }

    async getProductCount(){

        return (await this.page.locator("div[data-component-type='s-search-result']").all()).length;

    }

   async getFirstProduct(){

     return await this.page.locator("div[data-component-type='s-search-result']").first().textContent();
    }

    async getNthProduct(productNumber: number){

        return await this.page.locator("div[data-component-type='s-search-result']").nth(productNumber).textContent();
   

    }

    async getAllProducts(){
        const allProducts = await this.page.locator("div[data-component-type='s-search-result']").all();

        for(const product of allProducts) {

            const productDetails = await product.textContent();
            console.log(productDetails)

            console.log("--------------")

            expect(productDetails).toContain("Apple Watch");
        }
    }
}