import {expect, test} from "@playwright/test"

test("Drag and Drop", async ({page})=> {

    await page.goto("https://jqueryui.com/droppable/")

    const source =  page.frameLocator(".demo-frame").locator("#draggable");

    const target = page.frameLocator(".demo-frame").locator("#droppable");

    await source.dragTo(target);

    const targetText = await target.textContent();

    expect(targetText?.trim()).toEqual("Dropped!")

})