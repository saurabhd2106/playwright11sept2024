import {expect, test} from "@playwright/test"

test ("Alert Handling", async ({page})=> {


    // 1. Navigate to the page

    // 2. Click on the button

    // 3. Accept/Reject the alert

    // 4. Verify the message on the alert is as expected

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async(dialogBox)=>{

        expect(dialogBox.type()).toBe("alert")

        expect(dialogBox.message()).toEqual("I am a JS Alert")

        await dialogBox.accept()

    })


    await page.getByRole("button", {name: "Click for JS Alert"}).click()


})