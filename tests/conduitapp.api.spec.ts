import { expect, test } from "@playwright/test"

test.describe("API testing", async () => {

    var token: string;

    test.beforeAll(async ({ request }) => {

        //1. Prepare the test data

        const testdata = {
            "user": {
                "email": "testuser@test.com",
                "password": "testpassword"
            }
        }

        //2. Send Login API

        const response = await request.post("/api/users/login", {

            data: testdata

        })


        //3. Get the token and pass the token in every request

        const responseInjson = await response.json();

        token = responseInjson.user.token;

        console.log(token)

    })

    test("Get Tags", async ({ request }) => {

        const response = await request.get("/api/tags", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        expect(response.ok()).toBeTruthy();

        const res = await response.json();

        expect(JSON.stringify(res)).toContain("automation")

    })

    test("Post Article", async ({ request }) => {

        const articleData = {
            "article": {
                "body": "Article description",
                "description": "Article 1234",
                "tagList": [
                    "playwright"
                ],
                "title": "Test Articles"
            }
        }

       const response = await request.post("/api/articles", {

            data: articleData, 

            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + token
            }


        }) 


        const res = await response.json();

        expect(response.ok()).toBeTruthy()

    })


})