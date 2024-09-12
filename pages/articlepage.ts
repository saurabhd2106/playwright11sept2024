import { Page } from "@playwright/test";

export class ArticlePage{


    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async addArticle(title: string, description: string, titleDetails: string, tags: string) {

    }

    async editArticle() {

    }

    async deleteArticle() {

    }

    async verifyAddArticle(){
        
    }


}