import {expect, test} from "@playwright/test"
import { AmazonHomepage } from "../pages/amazonhomepage";

test.describe("Amazon Project", ()=>{

    test.beforeEach(async ({page})=>{
        await page.goto("https://amazon.in");
    })


    test("Search Product", async ({page})=>{

        const homepage = new AmazonHomepage(page);

        await homepage.searchProduct("Apple Watch", "Electronics");

        const firstProduct = await homepage.getFirstProduct();

        expect(firstProduct).toContain("Apple Watch")

        await homepage.getAllProducts();
    })
})