import { expect, test } from "@playwright/test"
import { RestClient } from "../support/restclient";
import userdata from "../testdata/users.json"
import  articleData  from "../testdata/article.json"

test.describe("API testing", async () => {

    var token: string;

    test.beforeAll(async ({ request }) => {

        //1. Prepare the test data

        // Reading from testdata folder

        //2. Send Login API

        const response = await request.post("/api/users/login", {

            data: userdata

        })


        //3. Get the token and pass the token in every request

        const responseInjson = await response.json();

        token = responseInjson.user.token;

        console.log(token)

    })

    test("Get Tags", async ({ request }) => {

        const restclient = new RestClient(request);

        const response = await restclient.SendGetRequest("/api/tags");

        expect(response.ok()).toBeTruthy();

        const res = await response.json();

        expect(JSON.stringify(res)).toContain("automation")

    })

    test("Post Article", async ({ request }) => {

        const restclient = new RestClient(request);

        const headers = {
            "Content-Type": "application/json",
            "Authorization": "Token " + token
        }

       const response = await restclient.SendPostRequest("/api/article", {data: articleData, headers: headers})


        const res = await response.json();

        expect(response.ok()).toBeTruthy();

        expect(res.article.title).toBe(articleData.article.title)

    })


})