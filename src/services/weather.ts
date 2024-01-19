import puppeteer from "puppeteer";
import find from "../utils/find";
import translater from "./translater";

const weather = async (region: string) => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    try {
        await page.goto(`https://www.google.com/search?q=weather+${region}`);

        const getTemp = async () => {
            const res = await find(page, '#wob_tm');
            if (!res) {
                return undefined;
            } else {
                return `${res}°C`;
            }
        };

        const getClimate = async () => {
            const climate = await find(page, '#wob_dc');
            if (!climate) {
                return undefined;
            } else {
                const translatedClimate = await translater('pt', 'en', climate);
                return translatedClimate;
            }
        };

        const results = {
            temperature: await getTemp(),
            rain: await find(page, '#wob_pp'),
            humidity: await find(page, '#wob_hm'),
            wind: await find(page, '#wob_ws'),
            climate: await getClimate()
        };

        await browser.close();

        return results;
    } catch(err) {
        await browser.close();
        console.log(err);
    }
};

export default weather;
