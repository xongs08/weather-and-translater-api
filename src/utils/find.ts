import { Page } from "puppeteer";

const find = async (page: Page, selector: string) => {
    try {
        const element = await page.$eval(selector, el => el.textContent);
        return element;
    } catch (err) {
        return undefined;
    }
};

export default find;
