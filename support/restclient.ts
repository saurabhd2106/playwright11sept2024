import { APIRequestContext } from "@playwright/test";


export class RestClient {

    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async SendGetRequest(url, headers = {}) {

        try {

            const response = await this.request.get(url, { headers });

            if (!response.ok()) {
                throw new Error(`Get method failed with status - ${response.status()}`)
            }

            return response;

        } catch (error) {

            console.log(error);

            throw error;

        }

    }

    async SendPostRequest(url, payload, headers = {}) {

        try {

            const response = await this.request.post(url, {
                data: payload,
                headers: headers
            });

            if (!response.ok()) {
                throw new Error(`Post method failed with status - ${response.status()}`)
            }

            return response;

        } catch (error) {

            console.log(error);

            throw error;

        }

    }

    async SendPutRequest(url, payload, headers = {}) {

        try {

            const response = await this.request.put(url, {
                data: payload,
                headers: headers
            });

            if (!response.ok()) {
                throw new Error(`Put method failed with status - ${response.status()}`)
            }

            return response;

        } catch (error) {

            console.log(error);

            throw error;

        }

    }

    async SendDeleteRequest(url, headers = {}) {

        try {

            const response = await this.request.delete(url, {
               
                headers: headers
            });

            if (!response.ok()) {
                throw new Error(`Delete method failed with status - ${response.status()}`)
            }

            return response;

        } catch (error) {

            console.log(error);

            throw error;

        }

    }
}