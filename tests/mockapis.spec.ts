import {test, expect} from "@playwright/test"

test.describe("Mocking APIs", async ()=>{

    test("Verify 500 Error message", async ({page})=>{

        await page.route('/api/tags', route => route.fulfill(
            {
                status: 500

            }
        ));

        await page.goto("http://localhost")

        await expect(page.getByText("Popular Tags").first()).toBeVisible();

        await expect(page.getByText("Cannot load popular tags...")).toBeVisible();


    })

    test("Mock Tags API with custom response", async ({page})=>{

        const testdata = {
            "tags": [
                "playwright",
                "automation",
                "cypress",
                "selenium"
            ]
        }

        await page.route('/api/tags', route => route.fulfill(
            {
                status: 200,
                body: JSON.stringify(testdata)

            }
        ));

        await page.goto("http://localhost")

        await expect(page.getByText("Popular Tags").first()).toBeVisible();

        const allTags = await page.locator(".tag-list > a").all();

        await expect((allTags).length).toBe(4);

        const tagTexts = await Promise.all(allTags.map(async tag => (await tag.textContent())?.trim()));
        expect(tagTexts).toEqual(['playwright', "automation", 'cypress', 'selenium']);



    })

    

    test("Update response", async ({page})=>{

        await page.route("/api/tags", async route => {

            const response = await route.fetch()

            const responseInJson = await response.json()

            const modifiedResponse = {

                ...responseInJson,
                tags: ["playwright", "selenium", "jmeter"]

            };

            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(modifiedResponse)

            })

        })

        await page.goto("http://localhost")

        await expect(page.getByText("Popular Tags").first()).toBeVisible();

        const allTags = await page.locator(".tag-list > a").all();

        await expect((allTags).length).toBe(3);

        const tagTexts = await Promise.all(allTags.map(async tag => (await tag.textContent())?.trim()));
        expect(tagTexts).toEqual(['playwright', 'selenium', 'jmeter']);


    })


})